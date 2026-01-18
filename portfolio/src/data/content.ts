export const contact = {
  address: 'Kosovska 29/10',
  city: 'Novi Sad',
  country: 'Serbia',
  phone: '+381 61 215 88 47',
  email: 'andrijanstanisic321@gmail.com',
}

export const profile = {
  firstName: 'Andrija',
  lastName: 'Stanišić',
  headline: 'Final year Applied Computer Science student @ FTN, University of Novi Sad',
  summary:
    'Highly motivated student committed to continuous improvement and learning from experienced colleagues. Passionate about building games, websites, and software, and eager to work across different programming languages and technologies. Communicative, collaborative, and able to work under pressure.',
}

export type EducationItem = {
  title: string
  institution: string
  location?: string
  period?: string
  details?: string
}

export const education: EducationItem[] = [
  {
    title: 'Secondary education — Information Technology',
    institution: 'ESTŠ "Nikola Tesla", Kraljevo',
    period: '2018 — 2022',
  },
  {
    title: 'Faculty of Technical Sciences — Final (4th) year',
    institution: 'University of Novi Sad',
    details: 'Programme: Applied Computer Science',
  },
  {
    title: 'Certificate',
    institution: 'CISCO — IT Essentials',
  },
]

export type ExperienceItem = {
  title: string
  period?: string
  description?: string
}

export const experience: ExperienceItem[] = [
  {
    title: 'Full Stack Developer — Devione',
    period: 'November 2025 — Present',
    description:
      'Working as a Full Stack Developer on web development projects, contributing to both frontend and backend solutions.',
  },
  {
    title: 'Microsoft Development Center — Invite-Only Event',
    period: 'Belgrade, November 2025',
    description:
      'Attended an exclusive invite-only event at the Microsoft Development Center in Belgrade after successfully passing the coding test for a Software Developer position.',
  },
  {
    title: 'Self-driven creator — Games, websites, and software',
    description:
      'Focused on building projects to sharpen skills across game development and web technologies; continually experimenting with new tools and frameworks.',
  },
  {
    title: 'Second place — "Evropski dnevnik" competition',
    period: '2021',
    description: 'Team of three; achieved second place at the competition.',
  },
  {
    title: 'Participation in programming competitions — Petlja.org',
  },
]

export type SkillItem = { name: string; level: number }
export type SkillGroup = { category: string; items: SkillItem[] }

export const skillGroups: SkillGroup[] = [
  {
    category: 'Web — Frontend',
    items: [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 75 },
      { name: 'React', level: 75 },
      { name: 'Angular', level: 35 },
      { name: 'TypeScript', level: 75 },
    ],
  },
  {
    category: 'Web — Backend',
    items: [
      { name: 'Node.js', level: 75 },
      { name: 'PHP', level: 20 },
      { name: 'SQL', level: 80 },
      { name: '.NET', level: 55 },
      { name: 'Java', level: 30 },
      { name: 'Python', level: 40 },
    ],
  },
  {
    category: 'Languages & CS',
    items: [
      { name: 'C', level: 75 },
      { name: 'C++', level: 80 },
      { name: 'C#', level: 85 },
      { name: 'Julia', level: 25 },
      { name: 'Assembly', level: 30 },
      { name: 'VHDL', level: 20 },
  { name: 'Matlab', level: 40 },
    ],
  },
  {
    category: 'Game Development',
    items: [
      { name: 'Unity', level: 65 },
      { name: 'Unreal Engine', level: 80 },
    ],
  },
  {
    category: 'Tools & Networking',
    items: [
      { name: 'Git', level: 85 },
      { name: 'Jira', level: 60 },
      { name: 'TCP/IP', level: 60 },
    ],
  },
]

export type ProjectItem = {
  name: string
  description?: string
  demoUrl?: string
  codeUrl?: string
  images?: string[]
  videoUrl?: string
  installerUrl?: string
  tags?: string[]
  featured?: boolean
  highlights?: string[]
}

export const webProjects: ProjectItem[] = [
  {
    name: 'MovieVerse — Full‑Stack web app',
    description:
      'A full‑stack web application for browsing a catalog of movies and series with user accounts, ratings, and trivia. The project is split into a frontend (React + Vite + TailwindCSS) and a backend (Express + TypeScript + MySQL) with JWT authentication.',
    codeUrl: 'https://github.com/AndrijaExe/MovieVerse',
    images: [
      '/movieverse/PocetnaStranica.png',
      '/movieverse/KatalogFilmova.png',
      '/movieverse/KatalogSerija.png',
      '/movieverse/LoginForm.png',
      '/movieverse/SignUpForm.png',
      '/movieverse/MyProfile.png',
      '/movieverse/AdminProfiles.png',
      '/movieverse/UserMenagmentForAdminsOnly.png',
      '/movieverse/FunctionsOfLoggedInUser.png',
      '/movieverse/FullyFunctionalLightAndDarkTheme.png',
    ],
    videoUrl: '/movieverse/Intro.mp4',
    tags: ['React', 'TypeScript', 'Vite', 'TailwindCSS', 'Node.js', 'Express', 'REST', 'JWT', 'MySQL'],
    highlights: [
      'Users: registration, login (JWT), profile, logout',
      'Movies & Series: list, details, public create, admin update/delete',
      'Episodes per series: public create and full admin CRUD',
      'Ratings: public submit/update, full admin CRUD',
      'Trivia: linked to movie/series, public list, full admin CRUD',
      'Theme: light/dark toggle (persisted locally)',
      'Database: MySQL; cover images stored as Base64 and served via API',
      'Pages: Home, Movies catalog, Movie detail, Series catalog, Series detail, My profile, Admin dashboard, 404',
    ],
  },
]

export const gameProjects: ProjectItem[] = [
  {
    name: 'UE5 Horror Game — Awaken',
    description:
      'Psychological horror game built in Unreal Engine 5.4.4 over ~2 months. Single-player, Blueprint scripting, Windows installer.',
    codeUrl: 'https://github.com/AndrijaExe/Awaken',
    installerUrl: 'https://www.dropbox.com/scl/fi/epqmidlwps1pcyipv769i/Awaken-Final-Version-Installer.exe?rlkey=4f50xfbu0ppnhsz1rjkequucz&st=l7gys8nv&dl=0',
    images: [
      '/awaken/AI that is chasing you.png',
      '/awaken/Battery healt and time.png',
      '/awaken/Clues that you must collect.png',
      '/awaken/Main Menu.png',
      '/awaken/Pause Menu.png',
      '/awaken/Settings Menu.png',
    ],
    videoUrl: '/awaken/trailer.mp4',
    tags: ['Unreal Engine 5', 'Blueprints', 'Windows', 'Inno Setup'],
    featured: true,
  },
  {
    name: 'Dungeon Escape',
    description:
      'A 3D dungeon escape game where I implemented puzzle mechanics, crafted atmospheric environments with advanced lighting effects, and developed C++ systems for item interaction and inventory management.',
    images: [
      '/dungeonEscape/EnginePhoto.png',
      '/dungeonEscape/CollectableItemCPP.png',
      '/dungeonEscape/InteractFunctionality.png',
      '/dungeonEscape/LockCPPClass.png',
      '/dungeonEscape/MoverComponentCPP.png',
    ],
    videoUrl: '/dungeonEscape/DungeonEscapeIntro.mp4',
    tags: ['Unreal Engine 5', 'C++', 'GameDev.tv Course'],
    featured: false,
  },
  {
    name: 'Obstacle Assault',
    description:
      'A 3D platformer where I customized player input systems, created C++ scripts for dynamic moving platforms, and focused on level design to deliver the best possible user experience.',
    images: [
      '/obstacleAssault/EditorPhoto.png',
      '/obstacleAssault/Code2.png',
      '/obstacleAssault/MovingPlatformCode.png',
    ],
    videoUrl: '/obstacleAssault/ObstacleAssaultIntro.mp4',
    tags: ['Unreal Engine 5', 'C++', 'GameDev.tv Course'],
    featured: false,
  },
]

// Legacy export for compatibility
export const projects: ProjectItem[] = [...webProjects, ...gameProjects]


export const extras = [
  'Driving license — Category B',
  'English — B2 (Upper-Intermediate)',
]

export const links = {
  github: 'https://github.com/AndrijaExe',
  linkedin: 'https://www.linkedin.com/in/andrijastanisic/',
}
