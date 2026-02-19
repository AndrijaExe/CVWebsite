import { useState, useEffect, useRef } from 'react'

interface UseTypingEffectOptions {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
  loop?: boolean
  mistakeChance?: number // Probability of making a mistake (0-1)
}

export const useTypingEffect = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
  loop = true,
  mistakeChance = 0.1, // 10% chance of mistake
}: UseTypingEffectOptions) => {
  const [displayText, setDisplayText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [hasMistake, setHasMistake] = useState(false)
  const [mistakePosition, setMistakePosition] = useState(-1)
  const timeoutRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    if (words.length === 0) return

    const currentWord = words[wordIndex]
    const wrongChars = '1234567890qwertyuiopasdfghjklzxcvbnm'

    const handleTyping = () => {
      if (isPaused) {
        timeoutRef.current = window.setTimeout(() => {
          setIsPaused(false)
          if (!hasMistake) {
            setIsDeleting(true)
          }
        }, pauseDuration)
        return
      }

      if (hasMistake && !isDeleting) {
        // Delete the mistake
        if (displayText.length > mistakePosition) {
          setDisplayText(displayText.slice(0, -1))
          timeoutRef.current = window.setTimeout(handleTyping, deletingSpeed)
        } else {
          // Finished deleting mistake, continue typing correctly
          setHasMistake(false)
          setMistakePosition(-1)
          timeoutRef.current = window.setTimeout(handleTyping, typingSpeed)
        }
        return
      }

      if (!isDeleting) {
        // Typing
        if (displayText.length < currentWord.length) {
          const nextChar = currentWord[displayText.length]
          
          // Random chance to make a mistake
          if (
            !hasMistake && 
            Math.random() < mistakeChance && 
            displayText.length > 2 && 
            displayText.length < currentWord.length - 2
          ) {
            // Make a mistake - type wrong character
            const wrongChar = wrongChars[Math.floor(Math.random() * wrongChars.length)]
            setDisplayText(displayText + wrongChar)
            setHasMistake(true)
            setMistakePosition(displayText.length)
            timeoutRef.current = window.setTimeout(handleTyping, typingSpeed + 100)
          } else {
            // Type correct character
            setDisplayText(displayText + nextChar)
            timeoutRef.current = window.setTimeout(handleTyping, typingSpeed)
          }
        } else {
          // Finished typing current word
          if (!loop && wordIndex === words.length - 1) {
            return
          }
          setIsPaused(true)
          timeoutRef.current = window.setTimeout(handleTyping, pauseDuration)
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
          timeoutRef.current = window.setTimeout(handleTyping, deletingSpeed)
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }

    timeoutRef.current = window.setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [displayText, wordIndex, isDeleting, isPaused, hasMistake, mistakePosition, words, typingSpeed, deletingSpeed, pauseDuration, loop, mistakeChance])

  return displayText
}

export default useTypingEffect
