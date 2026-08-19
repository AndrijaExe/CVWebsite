#!/usr/bin/env python3
"""Resize Loop 9 store art and render safe code cards for the CV gallery."""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

REPO = Path("/home/andrija/Desktop/CVWebsite/CVWebsite/portfolio")
OUT = REPO / "public" / "loop9"
MASTERS = Path("/home/andrija/Desktop/Loop9/Game/Loop9/Marketing/Steam/StoreUpload/masters")

SHOTS = [
    ("loop9_mainmenu_16x9.png", "main-menu.png", (1600, 900)),
    ("loop9_main_ingame_16x9.png", "office-loop.png", (1600, 900)),
    ("loop9_lobby_fp_16x9.png", "first-person.png", (1600, 900)),
    ("loop9_hero_ingame_16x9.png", "phone-desk.png", (1600, 900)),
    ("loop9_header_ingame_16x9.png", "corridor.png", (1600, 900)),
    ("loop9_emergency_notext_3x4.png", "emergency.png", (1200, 1600)),
]

KEYWORDS = {
    "namespace", "class", "struct", "enum", "const", "constexpr", "static",
    "return", "if", "else", "virtual", "public", "protected", "private",
    "override", "inline", "true", "false", "bool", "int32", "float", "void",
    "UENUM", "BlueprintType", "uint8",
}

TYPES = {
    "ELoopEndingType", "ELoopAnomalyType", "ERunEventTone", "ERunEventType",
    "FEndingEvaluationContext", "FLoopEndingEvaluator", "FRunEvent",
    "UAnomalyComponentBase", "TArray", "FName",
}


def font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    candidates = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSansMono-Bold.ttf" if bold
        else "/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationMono-Bold.ttf" if bold
        else "/usr/share/fonts/truetype/liberation/LiberationMono-Regular.ttf",
    ]
    for path in candidates:
        if Path(path).exists():
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def resize_shot(src: Path, dest: Path, size: tuple[int, int]) -> None:
    image = Image.open(src).convert("RGB")
    image.thumbnail(size, Image.Resampling.LANCZOS)
    dest.parent.mkdir(parents=True, exist_ok=True)
    image.save(dest, "PNG", optimize=True)


def token_color(token: str) -> str:
    stripped = token.strip()
    if stripped.startswith("//") or stripped.startswith("/*") or stripped.startswith("*"):
        return "#6a9955"
    if stripped.startswith("#"):
        return "#c586c0"
    if stripped.startswith('"') or stripped.startswith("'"):
        return "#ce9178"
    if stripped in KEYWORDS:
        return "#569cd6"
    if stripped in TYPES:
        return "#4ec9b0"
    if stripped.isdigit() or stripped.replace(".", "", 1).isdigit():
        return "#b5cea8"
    return "#d4d4d4"


def render_code(filename: str, dest: Path, lines: list[str]) -> None:
    mono = font(18)
    mono_bold = font(16, bold=True)
    pad_x, pad_y = 28, 22
    line_h = 28
    header_h = 46
    width = 1100
    height = header_h + pad_y * 2 + line_h * len(lines)

    img = Image.new("RGB", (width, height), "#1e1e1e")
    draw = ImageDraw.Draw(img)
    draw.rectangle((0, 0, width, header_h), fill="#252526")
    for i, color in enumerate(("#ff5f56", "#ffbd2e", "#27c93f")):
        draw.ellipse((16 + i * 18, 16, 28 + i * 18, 28), fill=color)
    draw.text((80, 13), filename, fill="#cccccc", font=mono_bold)

    y = header_h + pad_y
    for index, line in enumerate(lines, start=1):
        draw.text((pad_x, y), f"{index:2}", fill="#858585", font=mono)
        x = pad_x + 48
        if line.lstrip().startswith("//"):
            draw.text((x, y), line, fill="#6a9955", font=mono)
        else:
            # Keep indentation, color whole remaining line by first token.
            leading = len(line) - len(line.lstrip(" "))
            draw.text((x, y), " " * leading, fill="#d4d4d4", font=mono)
            x += mono.getlength(" " * leading)
            rest = line.lstrip(" ")
            color = token_color(rest.split(" ")[0] if rest else "")
            if rest.startswith("//"):
                color = "#6a9955"
            elif any(rest.startswith(k) for k in ("class ", "enum ", "struct ", "namespace ", "return ", "if ", "else", "virtual ", "public:", "protected:")):
                color = "#569cd6"
            draw.text((x, y), rest, fill=color, font=mono)
        y += line_h

    dest.parent.mkdir(parents=True, exist_ok=True)
    img.save(dest, "PNG", optimize=True)


CODE_CARDS = [
    (
        "LoopTypes.h",
        "code-six-endings.png",
        [
            "UENUM(BlueprintType)",
            "enum class ELoopEndingType : uint8",
            "{",
            "    EscapeTogether,",
            "    ObedientFool,",
            "    ColdBetrayal,",
            "    ParanoidSurvivor,",
            "    MergedMemory,",
            "    TheReplacement",
            "};",
        ],
    ),
    (
        "LoopEndingEvaluator.cpp",
        "code-ending-router.png",
        [
            "ELoopEndingType FLoopEndingEvaluator::Evaluate(const FEndingEvaluationContext& Context)",
            "{",
            "    // Relationship shape picks the ending. Thresholds stay in source.",
            "    if (!HasMeaningfulAIRelationship(Context))",
            "        return ELoopEndingType::ParanoidSurvivor;",
            "",
            "    if (MatchesReplacement(Context))   return ELoopEndingType::TheReplacement;",
            "    if (MatchesMergedMemory(Context))  return ELoopEndingType::MergedMemory;",
            "    if (MatchesColdBetrayal(Context))  return ELoopEndingType::ColdBetrayal;",
            "    if (MatchesObedientFool(Context))  return ELoopEndingType::ObedientFool;",
            "    if (MatchesEscapeTogether(Context)) return ELoopEndingType::EscapeTogether;",
            "",
            "    return ELoopEndingType::ParanoidSurvivor;",
            "}",
        ],
    ),
    (
        "AnomalyTypes.h",
        "code-anomaly-types.png",
        [
            "UENUM(BlueprintType)",
            "enum class ELoopAnomalyType : uint8",
            "{",
            "    Hide, Move, Light, Audio, Text,",
            "    DoorLock, Pursuer, Scale, PhantomMessage",
            "};",
            "",
            "class UAnomalyComponentBase : public UActorComponent",
            "{",
            "    virtual bool ApplyAnomalyState();",
            "    virtual void RestoreNormalState();",
            "};",
        ],
    ),
    (
        "Loop9RuntimePolicies.h",
        "code-session-timeline.png",
        [
            "inline ERunEventTone ToneFromStateDeltas(int32 KindnessDelta, int32 SuspicionDelta)",
            "{",
            "    if (KindnessDelta < 0) return ERunEventTone::Hostile;",
            "    if (SuspicionDelta > 0) return ERunEventTone::Suspicious;",
            "    if (KindnessDelta > 0) return ERunEventTone::Friendly;",
            "    return ERunEventTone::Neutral;",
            "}",
            "",
            "inline void AppendRunEvent(TArray<FRunEvent>& Events, FRunEvent Event)",
            "{",
            "    // Two calls on the same floor collapse into one timeline beat.",
            "    if (CanMergeWithLastCall(Events, Event))",
            "        MergeIntoLast(Events.Last(), Event);",
            "    else",
            "        Events.Add(MoveTemp(Event));",
            "}",
        ],
    ),
]


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for src_name, dest_name, size in SHOTS:
        src = MASTERS / src_name
        if not src.exists():
            raise SystemExit(f"missing master: {src}")
        resize_shot(src, OUT / dest_name, size)
        print("shot", dest_name)

    for filename, dest_name, lines in CODE_CARDS:
        render_code(filename, OUT / dest_name, lines)
        print("code", dest_name)


if __name__ == "__main__":
    main()
