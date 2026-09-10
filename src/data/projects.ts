import stackImg from '../assets/images/stack.jpg';
import steamStackVideo from '../assets/videos/steam_stack.webm';

export interface ContributionItem {
  number: string;
  title: string;
  description: string;
  extraInfo?: string;
  anchorHref: string;
}

export interface EditorialSummary {
  smallLabel?: string;
  headline?: string;
  items?: ContributionItem[];
  videoUrl?: string;
  posterImage?: string;
  image?: string;
}

export interface GameProject {
  id: string;
  slug: string;
  title: string;
  year?: string;
  jobTitle?: string;
  image: string;
  studio?: string;
  genre?: string;
  platforms?: string;
  criticalReception?: string;
  engineAndTools?: string;
  teamSize?: string;
  projectLength?: string;
  contributionsHtml: string;
  
  // New fields for the Squarespace-like layout
  releasedDate?: string;
  skillFocus?: string;
  timeSpent?: string;
  
  // Summary section
  summaryOfContributions?: {
    textHtml: string;
    images?: string[];
    videos?: string[];
  };

  editorialSummary?: EditorialSummary;
  
  // Main Playthrough
  fullPlaythroughVideoUrl?: string;
  heroVideoUrl?: string;
  
  // Additional Detail Blocks (Highlights, Case Studies, etc.)
  detailBlocks?: {
    id?: string;
    title?: string;
    subtitle?: string;
    contentHtml?: string;
    videoUrl?: string;
    imageUrl?: string;
    mediaPosition?: 'left' | 'right' | 'gallery';
    galleryImages?: string[];
  }[];

  portfolioPageContent?: {
    overview: string;
    highlights: string[];
    videoUrl?: string;
    galleryImages?: string[];
  };
}

export const ALL_PROJECTS: GameProject[] = [
  {
    id: 'stack',
    slug: 'stack',
    title: 'Stack',
    year: '2023',
    image: stackImg,
    studio: 'Joy Way',
    genre: 'Соревновательный VR-шутер',
    platforms: 'Meta Quest',
    jobTitle: 'Unity Developer',
    timeSpent: '10 месяцев',
    contributionsHtml: 'Разработка геймплея, сетевого кода, ии',
    
    summaryOfContributions: {
      textHtml: `<p>Я сделал оружие в STACK: разработал предсказуемый бросок диска, рикошеты и ощущение попадания.</p>
      <p>Я создал AI-ботов с четырьмя тактическими поведениями.</p>
      <p>Я довёл самые тяжёлые бои на Meta Quest с ~55 до стабильных 72 FPS, сократив количество батчей примерно с 3000 до 900.</p>`,
      videos: [steamStackVideo]
    },

    editorialSummary: {
      headline: 'То, на чём держится STACK',
      items: [
        {
          number: '01',
          title: 'БОЙ',
          description: 'Стены стали частью оружия.\nБросок диска, рикошеты и ощущение попадания.',
          anchorHref: '#combat-core'
        },
        {
          number: '02',
          title: 'МАТЧ',
          description: 'Боты.\nМатч начинается и без полного состава.',
          anchorHref: '#ai-bots'
        },
        {
          number: '03',
          title: 'FPS',
          description: '55 → 72 FPS.\n~3000 → ~900 батчей.',
          anchorHref: '#meta-quest-performance'
        }
      ],
      videoUrl: steamStackVideo,
      posterImage: stackImg
    },
    
    heroVideoUrl: 'https://www.youtube.com/embed/naDIpOcMIkE?si=OTkBA12SY0BfwEVm',
    //fullPlaythroughVideoUrl: 'https://www.youtube.com/embed/naDIpOcMIkE?si=_8ZJuebnFuaipR0q',
    
    detailBlocks: [
      {
        id: 'combat-core',
        title: 'БОЕВОЕ ЯДРО: БРОСОК, РИКОШЕТ, ПОПАДАНИЕ',
        contentHtml: '<p>Каждое оружие имеет уникальный вес, отдачу и механику перезарядки. Игроки могут перезаряжать оружие на лету во время выполнения паркурных трюков.</p><ul><li>Физически корректная перезарядка и двуручный хват.</li><li>Тактическое использование укрытий и быстрый срыв дистанции.</li></ul>',
        mediaPosition: 'left',
        imageUrl: stackImg
      },
      {
        id: 'meta-quest-performance',
        title: '72 FPS НА META QUEST',
        contentHtml: '<p>При разработке локаций особое внимание уделялось линиям видимости (line of sight) и созданию ключевых точек интереса. Каждая карта спроектирована так, чтобы стимулировать игроков постоянно передвигаться и использовать вертикальное преимущество.</p>',
        mediaPosition: 'gallery',
        galleryImages: [stackImg, stackImg, stackImg]
      }
    ],

    portfolioPageContent: {
      overview: 'Stack — динамичный VR-шутер с элементами паркура, разработанный студией JoyWay для платформ PC, Steam и Meta VR на движке Unity.',
      highlights: [
        'Разработка физики паркура и пространственного перемещения в VR',
        'Проектирование и балансировка оружия и боя',
        'Дизайн уровней и вертикального взаимодействия'
      ],
      galleryImages: [
        stackImg
      ]
    }
  },
  {
    id: 'bioshock',
    slug: 'bioshock',
    title: 'BioShock (2007)',
    year: '2007',
    jobTitle: 'Level and Systems Designer',
    image: 'https://images.squarespace-cdn.com/content/v1/5715099120c647a349b1acb0/1461907944299-OMG4T626Z4NNHKCFCM1P/image-asset.jpeg',
    studio: 'Irrational Games',
    platforms: 'Xbox 360 | PS3 | PC',
    criticalReception: '"One of the greatest video games of all time"; Critically acclaimed, Bafta award winner, and one of the highest rated games of all time. Winner of multiple Game of the Year awards.',
    engineAndTools: 'Unreal and proprietary scripting system',
    contributionsHtml: 'Designed and crafted "<a href="https://www.youtube.com/watch?v=986tvu0teEg" target="_blank" class="text-blue-700 underline font-medium hover:text-blue-900">Neptune\'s Bounty</a>," a level which helped define the tenets of <em>BioShock</em> level design. Design owner for AI systems, driving iteration and tuning behaviors. Design owner for UI & UX on the PC SKU. Built <a href="https://www.youtube.com/watch?v=0KTc9wg4f7I" target="_blank" class="text-blue-700 underline font-medium hover:text-blue-900">marketing demos</a> and promoted the game.',
    portfolioPageContent: {
      overview: 'In BioShock, Dean Tate brought the underwater city of Rapture to life by designing "Neptune\'s Bounty" and "The Fighting McDonagh Tavern". His work set the standard for environmental storytelling, Plasmid water conductivity hazards, and Big Daddy encounter arenas.',
      highlights: [
        'Designed Neptune\'s Bounty and The Fighting McDonagh Tavern',
        'Owner for AI systems iteration and tuning behaviors across Splicers',
        'Owner for UI & UX design on the PC platform',
        'Built and tuned the official E3 promotional gameplay demo'
      ],
      videoUrl: 'https://www.youtube.com/embed/986tvu0teEg',
      galleryImages: [
        'https://images.squarespace-cdn.com/content/v1/5715099120c647a349b1acb0/1461907944299-OMG4T626Z4NNHKCFCM1P/image-asset.jpeg'
      ]
    }
  },
  {
    id: 'bioshock2',
    slug: 'bioshock2',
    title: 'BioShock 2 (2010)',
    year: '2010',
    jobTitle: 'Senior Level and Systems Designer',
    image: 'https://images.squarespace-cdn.com/content/v1/5715099120c647a349b1acb0/1461907960400-JGW10V3WQ2M54DBIOTTC/image-asset.jpeg',
    studio: '2K Marin/Australia',
    platforms: 'Xbox 360 | PS3 | PC',
    criticalReception: 'Critically acclaimed, Bafta nominated, and highly rated',
    engineAndTools: 'Unreal and proprietary scripting system',
    contributionsHtml: 'Created "<a href="https://www.youtube.com/watch?v=7KNsiTHVKyk" target="_blank" class="text-blue-700 underline font-medium hover:text-blue-900">Fontaine Futuristics</a>," one of the most <a href="https://www.reddit.com/r/Bioshock/comments/s5p7kg/favorite_bioshock_2_level/" target="_blank" class="text-blue-700 underline font-medium hover:text-blue-900">memorable levels in the series</a>. Brought one of the most <a href="https://www.reddit.com/r/Bioshock/comments/2xrrto/the_choice_concerning_gil_alexander/" target="_blank" class="text-blue-700 underline font-medium hover:text-blue-900">beloved</a> and <a href="https://steamcommunity.com/app/409720/discussions/0/333656722962625685" target="_blank" class="text-blue-700 underline font-medium hover:text-blue-900">interesting</a> characters "<a href="http://bioshock.wikia.com/wiki/Gilbert_Alexander" target="_blank" class="text-blue-700 underline font-medium hover:text-blue-900">Gil Alexander</a>" to life. Made <a href="https://www.reddit.com/r/Bioshock/comments/74osu2/spoiler_ill_take_every_jump_scare_in_bioshock_1/" target="_blank" class="text-blue-700 underline font-medium hover:text-blue-900">everyone\'s favorite inanimate object</a>, the Unstable Teleport Plasmid.',
    portfolioPageContent: {
      overview: 'As Senior Level Designer at 2K Marin, Dean Tate designed the entire "Fontaine Futuristics" chapter. Players explore the secret Plasmid R&D headquarters, face mutated scientist Gil Alexander, and navigate Little Sister ADAM defense arenas.',
      highlights: [
        'Created Fontaine Futuristics level layout, flow, and pacing',
        'Authored Gil Alexander narrative encounter inside the bio-tank',
        'Designed Unstable Teleport Plasmid easter egg mechanics',
        'Designed Little Sister ADAM harvesting defense arenas'
      ],
      videoUrl: 'https://www.youtube.com/embed/7KNsiTHVKyk',
      galleryImages: [
        'https://images.squarespace-cdn.com/content/v1/5715099120c647a349b1acb0/1461907960400-JGW10V3WQ2M54DBIOTTC/image-asset.jpeg'
      ]
    }
  },
  {
    id: 'scanner-sombre',
    slug: 'scanner-sombre',
    title: 'Scanner Sombre (2016)',
    year: '2016',
    jobTitle: 'Sole Contracted Level Designer',
    image: 'https://images.squarespace-cdn.com/content/v1/5715099120c647a349b1acb0/6205c2b3-4136-4277-a6e0-8391e94a6f16/scanner+somber+logo+large.jpg',
    studio: 'Introversion (Uplink, Darwinia, Prison Architect)',
    platforms: 'PC/Mac/Linux - VR Supported',
    criticalReception: '91% user rating (Steam)',
    teamSize: 'two core members—myself (contracted for project) and Introversion’s Chris Delay',
    projectLength: '~3 months contracting',
    engineAndTools: 'Unity + mesh creation plugin',
    contributionsHtml: 'This project was a “palate cleanser” for Introversion—a design experiment built under intentionally enormous time constraints. I covered all level construction duties, including mesh modeling, blocking spaces, decorating, and fleshing them out to shippable quality. This project was a joy to work on—<a href="https://youtu.be/1lhjcwjsIFs" target="_blank" class="text-blue-700 underline font-medium hover:text-blue-900">the audience loved it</a>, and it inspired the creation of a sub-genre of similar LiDAR-themed horror titles.',
    portfolioPageContent: {
      overview: 'Scanner Sombre is an eerie cave exploration game where the world is pitch black until the player paints thousands of colorful LIDAR laser dots onto surfaces. Dean Tate constructed all 3D cavern meshes, abyss bridge crossings, and subterranean cult temple ruins.',
      highlights: [
        'Sole contracted level designer for Introversion Software',
        'Constructed all 3D cavern meshes, chasm bridges, and cult temple ruins',
        'Balanced point-cloud density and spatial navigation without light sources',
        'Completed entire project level construction in ~3 months'
      ],
      videoUrl: 'https://www.youtube.com/embed/1lhjcwjsIFs',
      galleryImages: [
        'https://images.squarespace-cdn.com/content/v1/5715099120c647a349b1acb0/6205c2b3-4136-4277-a6e0-8391e94a6f16/scanner+somber+logo+large.jpg'
      ]
    }
  },
  {
    id: 'dance-central',
    slug: 'dance-central',
    title: 'Dance Central (2010)',
    year: '2010',
    jobTitle: 'Lead Designer',
    image: 'https://images.squarespace-cdn.com/content/v1/5715099120c647a349b1acb0/1461907977269-UWHN0HPM2WTYQXJTI79F/image-asset.jpeg',
    studio: 'Harmonix Music Systems',
    platforms: 'Xbox 360 Kinect',
    criticalReception: 'highly-rated and hailed as Kinect\'s "killer app"',
    engineAndTools: 'Proprietary engine and tools. Microsoft office and Visio for documentation',
    projectLength: '~1 year',
    contributionsHtml: 'Lead the design for a new type of dance game for Xbox 360 Kinect. Solved usability and design problems for a new type of input and technology that was in parallel development with the game. Collaborated on design and creative vision. Shipped a high-quality franchise starter for the launch of Kinect.',
    portfolioPageContent: {
      overview: 'As Lead Designer at Harmonix, Dean Tate led game design on Dance Central, the flagship launch title for Xbox 360 Kinect. He established controller-less gesture navigation, pose scoring feedback, and practice modes.',
      highlights: [
        'Design Lead for Xbox 360 Kinect flagship launch title',
        'Pioneered controller-less gesture UI and pose precision scoring',
        'Created "Break It Down" practice mode with speed control and limb highlighting',
        'Multi-million unit seller worldwide'
      ],
      galleryImages: [
        'https://images.squarespace-cdn.com/content/v1/5715099120c647a349b1acb0/1461907977269-UWHN0HPM2WTYQXJTI79F/image-asset.jpeg'
      ]
    }
  },
  {
    id: 'captain-forever-remix',
    slug: 'captain-forever-remix',
    title: 'CAPTAIN FOREVER REMIX (2016)',
    year: '2016',
    jobTitle: 'Company Founder',
    image: 'https://images.squarespace-cdn.com/content/v1/5715099120c647a349b1acb0/1461907927032-6NE7EBVHWC3OM69P0DCN/image-asset.jpeg',
    studio: 'Pixelsaurus Games (self-employed owner)',
    platforms: 'PC | Mac | Linux',
    criticalReception: '94% user rating (Steam)',
    teamSize: 'two core members (myself and Brian Chan) and one audio contractor (Emeen Zarookian)',
    projectLength: '18 months',
    engineAndTools: 'Unity, Adobe Suite, Google Docs',
    contributionsHtml: 'Built and shipped a game on a two-person team after licensing the design for a beloved and award-winning indie classic. Created all of the art assets, drove world building, designed and tuned major systems, planned the approach to marketing, made all marketing assets, and wrote dialogue.',
    portfolioPageContent: {
      overview: 'Captain Forever Remix is an indie action roguelike where players construct custom spaceships mid-battle out of salvaged enemy parts. As half of Pixelsaurus Games, Dean created all vector artwork, cartoon aesthetic, writing, and module tuning.',
      highlights: [
        'Co-founder of Pixelsaurus Games',
        'Created 100+ modular ship component art assets',
        'Authored cartoon aesthetic, dialogue, and narrative lore',
        'IGF Excellence in Design Honorable Mention'
      ],
      galleryImages: [
        'https://images.squarespace-cdn.com/content/v1/5715099120c647a349b1acb0/1461907927032-6NE7EBVHWC3OM69P0DCN/image-asset.jpeg'
      ]
    }
  },
  {
    id: 'captain-bubblenaut',
    slug: 'captain-bubblenaut',
    title: 'Captain Bubblenaut (2013)',
    year: '2013',
    image: 'https://images.squarespace-cdn.com/content/v1/5715099120c647a349b1acb0/1461907988316-J6FBQKMGQR1QR19W994E/image-asset.jpeg',
    studio: 'Pixelsaurus Games (self-employed owner)',
    teamSize: '2 (myself and Owen Macindoe)',
    platforms: 'iOS iPhone & iPad',
    projectLength: '3 year spare-time side project',
    engineAndTools: 'Cocos 2D, Xcode, Adobe Suite',
    contributionsHtml: 'Collaborated on a two-person team to explore new design space and make <a href="https://www.youtube.com/watch?v=M854M4dvlA0" target="_blank" class="text-blue-700 underline font-medium hover:text-blue-900">something truly unique</a>. Created all art assets and drove world building.',
    portfolioPageContent: {
      overview: 'Captain Bubblenaut is a unique touchscreen iOS title exploring physics and buoyancy controls. Dean Tate created all art assets and drove world building.',
      highlights: [
        'Explored custom touchscreen mechanics for iOS',
        'Created all visual art assets and animation frames',
        'Designed bubble physics puzzle interactions'
      ]
    }
  },
  {
    id: 'hockee',
    slug: 'hockee',
    title: 'H O C K E E (2014)',
    year: '2014',
    image: 'https://images.squarespace-cdn.com/content/v1/5715099120c647a349b1acb0/1461908034625-ZUI0ISRUR2FVTRXIGUH0/image-asset.jpeg',
    teamSize: '2 (myself and Sean Gubelman)',
    platforms: 'Browsers | PC | Mac',
    projectLength: '48 hours',
    engineAndTools: 'Unity and Adobe Suite',
    contributionsHtml: 'Built a game in 48 hours to test collaboration with a new dev partner. Explored new design ideas. Created all art assets and defined design goals.',
    portfolioPageContent: {
      overview: 'H O C K E E was a rapid 48-hour game jam project created to test game development collaboration and fast prototyping.',
      highlights: [
        '48-hour rapid prototyping game jam project',
        'Created all art assets and defined core competitive rules'
      ]
    }
  },
  {
    id: 'swat-4',
    slug: 'swat-4',
    title: 'Swat 4: The Stetchkov Syndicate (2006)',
    year: '2006',
    image: 'https://images.squarespace-cdn.com/content/v1/5715099120c647a349b1acb0/1461908003410-7PTNFHFPGDOY9WODR17J/image-asset.jpeg',
    studio: 'Irrational Australia',
    platforms: 'PC',
    teamSize: '6',
    projectLength: '~6 months',
    engineAndTools: 'Unreal, 3DSMax and proprietary scripting system',
    contributionsHtml: 'Designed, built, scripted, decorated and lit half of the levels in the game, which ran double-duty in both single and multiplayer modes.',
    portfolioPageContent: {
      overview: 'In Swat 4: The Stetchkov Syndicate, Dean Tate designed, built, and lit half of the tactical SWAT levels for both singleplayer and multiplayer modes.',
      highlights: [
        'Designed and constructed half of all tactical SWAT levels',
        'Scripted AI suspect and hostage reaction logic',
        'Created dual-purpose layouts for singleplayer campaign & multiplayer'
      ]
    }
  },
  {
    id: 'tribes-vengeance',
    slug: 'tribes-vengeance',
    title: 'Tribes: Vengeance (2004)',
    year: '2004',
    image: 'https://images.squarespace-cdn.com/content/v1/5715099120c647a349b1acb0/1461908020232-NDSON6IDFDYORF9NOG5D/image-asset.jpeg',
    studio: 'Irrational Australia',
    platforms: 'PC',
    teamSize: '~30',
    projectLength: '~2 years',
    engineAndTools: 'Unreal and proprietary scripting system',
    contributionsHtml: 'Built mind-bending 3D spaces to compliment Tribes\' unique blend of combat, jetpacking and skiing. Built multiplayer levels for one of the most unique and revered franchises in competitive FPS gaming. Designed, built, scripted, decorated and lit single player levels.',
    portfolioPageContent: {
      overview: 'In Tribes: Vengeance, Dean Tate constructed 3D vertical environments tailored for high-speed jetpack skiing and aerial combat. Won AGDC Best Level Design Award.',
      highlights: [
        'AGDC Award Winner for Best Level Design',
        'Built 3D terrain skiing and jetpack combat arenas',
        'Designed and scripted singleplayer campaign missions and multiplayer CTF maps'
      ]
    }
  }
];
