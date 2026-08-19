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
  headline: 'Full-stack developer · Software engineering student @ FTN, University of Novi Sad',
  summary:
    'Full-stack developer with professional experience building enterprise web applications in React, TypeScript, Symfony, and SQL, and a habit of designing maintainable systems around DDD, SOLID, and clean architecture. Outside of that I ship Loop 9, a Steam psychological horror built in Unreal Engine 5 C++ with a live AI companion on a production Symfony API. Available for flexible part-time and freelance engagements.',
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
    title: "Bachelor's degree — Software engineering",
    institution: 'Faculty of Technical Sciences, University of Novi Sad',
    period: '2022 — Oct 2026',
    details: 'Final (4th) year.',
  },
  {
    title: 'Secondary education — Information Technology',
    institution: 'ESTŠ "Nikola Tesla", Kraljevo',
    period: '2018 — 2022',
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
    title: 'Full-Stack Developer — Devione',
    period: 'November 2025 — Present',
    description:
      'Building enterprise web applications in Symfony, React, TypeScript, and Redux Toolkit, delivered in an enterprise environment for The Coca-Cola Company. Design modular systems following DDD, SOLID, and clean code principles, and develop and maintain REST APIs alongside frontend features across the full stack.',
  },
  {
    title: 'Independent developer — Loop 9 (Steam)',
    period: '2025 — 2026',
    description:
      'Solo-developing a psychological horror title for Steam: Unreal Engine 5 C++ client, live AI companion, relationship-driven endings, and a production Symfony API (session auth, localization, moderation, provider routing).',
  },
]

export type HonorItem = { title: string; period?: string; description?: string }

export const honors: HonorItem[] = [
  {
    title: 'AMD Developer Hackathon — accepted',
    period: 'May 2026',
    description: 'Qualified for the invite-only on-site finals in San Francisco.',
  },
  {
    title: 'Microsoft Development Center Serbia — Career Booth Experience',
    period: 'Belgrade, November 2025',
    description:
      'Selected for the invite-only programme after passing Microsoft’s coding assessment for a Software Developer position.',
  },
  {
    title: 'Second place — "Evropski dnevnik" competition',
    period: '2021',
    description: 'Team of three.',
  },
  {
    title: 'Programming competitions — Petlja.org',
    description: 'Regular participant.',
  },
]

export type SkillGroup = { category: string; items: string[] }

export const skillGroups: SkillGroup[] = [
  {
    category: 'Games',
    items: ['C++', 'Unreal Engine 5', 'Blueprints', 'Unity (C#)'],
  },
  {
    category: 'Full-stack',
    items: [
      'React (Redux)',
      'TypeScript',
      'PHP (Symfony)',
      'Node.js (Express)',
      'SQL (MySQL, PostgreSQL)',
      'Docker',
      'Networking (TCP/IP)',
    ],
  },
]

export type ProjectItem = {
  name: string
  description?: string
  demoUrl?: string
  codeUrl?: string
  backendUrl?: string
  images?: string[]
  videoUrl?: string
  installerUrl?: string
  tags?: string[]
  featured?: boolean
  flagship?: boolean
  learning?: boolean
  highlights?: string[]
}

export const webProjects: ProjectItem[] = [
  {
    name: 'MovieVerse — Full‑Stack web app',
    description:
      'A full‑stack web application for browsing a catalog of movies and series with user accounts, ratings, and trivia. The project is split into a frontend (React + Vite + TailwindCSS) and a backend (Express + TypeScript + MySQL) with JWT authentication.',
    codeUrl: 'https://github.com/AndrijaExe/MovieVerse',
    images: [
      '/movieverse/PocetnaStranica.webp',
      '/movieverse/KatalogFilmova.webp',
      '/movieverse/KatalogSerija.webp',
      '/movieverse/LoginForm.webp',
      '/movieverse/SignUpForm.webp',
      '/movieverse/MyProfile.webp',
      '/movieverse/AdminProfiles.webp',
      '/movieverse/UserMenagmentForAdminsOnly.webp',
      '/movieverse/FunctionsOfLoggedInUser.webp',
      '/movieverse/FullyFunctionalLightAndDarkTheme.webp',
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
    name: 'Loop 9',
    description:
      'A psychological horror about a floor that repeats. Spot what changed, pick the right elevator, and decide how much you trust the tired voice on the phone. Built solo in Unreal Engine 5 C++ with a live AI companion and a production Symfony backend — six endings come from how you treat him, not from a dialogue tree.',
    backendUrl: 'https://github.com/AndrijaExe/Loop9_backend',
    images: [
      '/loop9/main-menu.jpg',
      '/loop9/first-person.jpg',
      '/loop9/lobby.jpg',
      '/loop9/office.jpg',
      '/loop9/phone.jpg',
      '/loop9/code-six-endings.webp',
      '/loop9/code-ending-router.webp',
      '/loop9/code-anomaly-types.webp',
      '/loop9/code-session-timeline.webp',
    ],
    tags: ['Unreal Engine 5', 'C++', 'Blueprints', 'PHP', 'Symfony', 'Steam'],
    featured: true,
    flagship: true,
    highlights: [
      'Flagship project: Steam title (App ID 4982260), ~60–90 minute runs built for replay.',
      'Nine anomaly types on a looping office floor — hide, move, light, audio, text, locked doors, pursuer, scale, phantom chat.',
      'Live phone chat with Dragojlo: no dialogue trees; he answers in the player language and remembers how he was treated.',
      'Hidden relationship meters (trust, kindness, suspicion, cooperation, dependency, AI stability) steer six distinct endings.',
      'Client in Unreal 5 C++; production API in Symfony (session auth, localization EN/SR/DE/FR/RU, moderation, failover).',
      'Post-run timeline and ending archive are driven from play data, not a raw stat dump.',
      'Backend repository: https://github.com/AndrijaExe/Loop9_backend',
    ],
  },
  {
    name: 'TIC-TAC-TOE',
    description:
      'A polished browser-playable Tic-Tac-Toe game made in Unity. The UI is intentionally minimalist because the focus for this assignment was backend/gameplay functionality, architecture, and clean system separation.',
    demoUrl: 'https://andrijaexe.itch.io/tic-tac-toe',
    codeUrl: 'https://github.com/AndrijaExe/TwoDesperados_TicTacToe',
    images: [
      '/tictactoe/main-menu.webp',
      '/tictactoe/game-scene.webp',
      '/tictactoe/round-end-modal.webp',
      '/tictactoe/game-controller.webp',
      '/tictactoe/board-view.webp',
      '/tictactoe/cell-view.webp',
      '/tictactoe/game-controller-under-the-hood.webp',
    ],
    tags: ['Unity', 'C#', 'HTML5', 'Game Architecture'],
    highlights: [
      'Play in browser (cloud build): https://andrijaexe.itch.io/tic-tac-toe',
      'Source code: https://github.com/AndrijaExe/TwoDesperados_TicTacToe',
      'Architecture is layered to keep gameplay logic separate from presentation and scene flow.',
      'Code hierarchy by responsibility: GameController (highest level) -> BoardView (contains cells) -> CellView (single board cell).',
      'UI is intentionally minimal; priority was robust gameplay/backend functionality and maintainable code structure.',
    ],
  },
  {
    name: 'UE5 Horror Game — Awaken',
    description:
      'Psychological horror game built in Unreal Engine 5.4.4 over ~2 months. Single-player, Blueprint scripting, Windows installer.',
    codeUrl: 'https://github.com/AndrijaExe/Awaken',
    installerUrl: 'https://www.dropbox.com/scl/fi/epqmidlwps1pcyipv769i/Awaken-Final-Version-Installer.exe?rlkey=4f50xfbu0ppnhsz1rjkequucz&st=l7gys8nv&dl=0',
    images: [
      '/awaken/AI that is chasing you.webp',
      '/awaken/Battery healt and time.webp',
      '/awaken/Clues that you must collect.webp',
      '/awaken/Main Menu.webp',
      '/awaken/Pause Menu.webp',
      '/awaken/Settings Menu.webp',
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
      '/dungeonEscape/EnginePhoto.webp',
      '/dungeonEscape/CollectableItemCPP.webp',
      '/dungeonEscape/InteractFunctionality.webp',
      '/dungeonEscape/LockCPPClass.webp',
      '/dungeonEscape/MoverComponentCPP.webp',
    ],
    videoUrl: '/dungeonEscape/DungeonEscapeIntro.mp4',
    tags: ['Unreal Engine 5', 'C++'],
    featured: false,
    learning: true,
  },
  {
    name: 'Obstacle Assault',
    description:
      'A 3D platformer where I customized player input systems, created C++ scripts for dynamic moving platforms, and focused on level design to deliver the best possible user experience.',
    images: [
      '/obstacleAssault/EditorPhoto.webp',
      '/obstacleAssault/Code2.webp',
      '/obstacleAssault/MovingPlatformCode.webp',
    ],
    videoUrl: '/obstacleAssault/ObstacleAssaultIntro.mp4',
    tags: ['Unreal Engine 5', 'C++'],
    featured: false,
    learning: true,
  },
]

// Legacy export for compatibility
export const projects: ProjectItem[] = [...webProjects, ...gameProjects]


export const extras = [
  'English — C1 (Advanced)',
  'Driving license — Category B',
]

export const links = {
  github: 'https://github.com/AndrijaExe',
  linkedin: 'https://www.linkedin.com/in/andrijastanisic/',
}
