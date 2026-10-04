export const projects = [
  {
    id: 'tailorcv',
    name: 'TailorCV',
    category: 'Web',
    type: 'Independent product',
    line: 'A better first impression, built in the browser.',
    summary:
      'A CV builder and AI tailoring platform that turns a complicated document workflow into a clear, guided experience.',
    role: 'Full-stack product development',
    period: '2025–present',
    stack: ['React', 'TypeScript', 'Python', 'FastAPI', 'Supabase', 'Stripe'],
    images: [
      {
        src: 'tailorcv-home.webp',
        alt: 'TailorCV homepage with a fictional sample CV and template switcher',
        caption: 'The product homepage, with a fictional sample CV.',
      },
      {
        src: 'tailorcv-builder.webp',
        alt: 'TailorCV editor with template selection and a live document preview',
        caption:
          'CV builder: template selection, editable details and a live document preview.',
      },
    ],
    link: 'https://tailorcv-ai.com',
    linkLabel: 'Visit TailorCV',
    highlights: [
      'Responsive React and TypeScript interfaces, from onboarding to document review.',
      'CV templates, a live preview and editable Word document generation.',
      'AI tailoring with side-by-side document comparison and a changes panel.',
      'Authentication, subscription and credit flows connected to a Python API.',
    ],
    story:
      'I work across the interface and the document-processing workflow. The interesting challenge is keeping the experience understandable: users need to see what changed, review the result and leave with a document they can actually use.',
    note: 'Product screenshots use fictional sample details.',
  },
  {
    id: 'dishify',
    name: 'Dishify',
    category: 'Mobile',
    type: 'Founder · launched product',
    line: 'From what’s in the fridge to what’s for dinner.',
    summary:
      'An AI cooking app combining ingredient scanning, recipe discovery, pantry management and personalised meal planning.',
    role: 'Founder & full-stack developer',
    period: '2023–present',
    stack: ['Flutter', 'Dart', 'Node.js', 'MySQL', 'Redis', 'Gemini'],
    images: [
      {
        src: 'dishify-recipes.webp',
        alt: 'Dishify ingredient scan results showing recipe cards and dietary filters',
        caption:
          'Recipe discovery and dietary filters — saved iOS simulator capture.',
      },
      {
        src: 'dishify-home.webp',
        alt: 'Dishify home screen with recipe search and a visual recipe grid',
        caption:
          'The recipe discovery home screen — saved iOS simulator capture.',
      },
    ],
    link: 'https://dishify.co.uk',
    linkLabel: 'Visit Dishify',
    highlights: [
      'Built and launched the Flutter app for iOS and Android.',
      'Designed BLoC-based flows for scanning, recipes, pantry and meal plans.',
      'Integrated streaming AI responses, retry handling and model fallbacks.',
      'Built Node/Express APIs with Prisma, MySQL, Redis and background queues.',
      'Connected Stripe and RevenueCat subscriptions with production monitoring.',
    ],
    story:
      'Dishify started with a simple idea: make the ingredients people already have more useful. I built the product across mobile UI, AI integration, backend services and payments, taking it from a university project to a released app.',
    note: 'Winner, Brunel Software Innovation Award, 2024.',
  },
  {
    id: 'roxfit',
    name: 'ROXFIT',
    category: 'Mobile',
    type: 'Professional work',
    line: 'Detailed engineering. A simpler experience.',
    summary:
      'Mobile interfaces, workout experiences and native wearable integrations for a platform with 600,000 users.',
    role: 'Software engineer',
    period: 'May 2025–present',
    stack: ['Flutter', 'Dart', 'Swift', 'Kotlin', 'Node.js', 'MongoDB'],
    images: [
      {
        src: 'roxfit-onboarding.webp',
        alt: 'ROXFIT training onboarding with device setup, workouts and progress',
        caption: 'Training onboarding implementation preview.',
      },
      {
        src: 'roxfit-watch.webp',
        alt: 'ROXFIT Apple Watch controls walkthrough on a phone',
        caption: 'A phone-based walkthrough of Apple Watch workout controls.',
      },
    ],
    link: 'https://www.roxfit.app',
    linkLabel: 'Visit ROXFIT',
    highlights: [
      'Built Flutter interfaces from Figma, including onboarding, profiles and race experiences.',
      'Developed workout state handling, analytics and reusable UI components.',
      'Integrated native Swift and Kotlin features with the Flutter application.',
      'Worked on Apple Watch, HealthKit and Health Connect synchronisation and recovery.',
      'Contributed Node.js APIs, tests, release coordination and AI-assisted development tooling.',
    ],
    story:
      'My contribution spans the details users touch and the systems behind them. I care about the transitions between those layers: clear permissions, reliable sync, meaningful states and an interface that remains understandable when something goes wrong.',
    note: 'Team product. Descriptions refer to my contributions; 600,000 is the platform user count as of October 2026.',
  },
  {
    id: 'ailoupe',
    name: 'AiLoupe',
    category: 'Research',
    type: 'AiDLab · research software',
    line: 'Making material intelligence visible.',
    summary:
      'An image-based material classification experience connecting AI results to a visual materials library.',
    role: 'Android & Flutter development',
    period: '2024–2025',
    stack: ['Android', 'Java', 'Flutter', 'Data visualisation'],
    images: [
      {
        src: 'ailoupe-material.webp',
        alt: 'AiLoupe material-card design showing fabric composition, properties and sensory data',
        caption:
          'An archived project material-card design, showing the information architecture.',
      },
    ],
    highlights: [
      'Worked on Android material views, digital-twin displays and PDF export.',
      'Contributed to the transition from Android XML interfaces to Flutter.',
      'Connected image-classification results with rich material information.',
      'Translated research data into usable visual interfaces across devices.',
    ],
    story:
      'The challenge was to make technical material data useful to designers. My work focused on how results are presented and explored, including material cards, digital-twin content and cross-device interfaces.',
    note: 'Collaborative research project. Image shows an archived project design, not a new simulator capture.',
  },
  {
    id: 'wellbeing',
    name: 'AI for Wellbeing',
    category: 'Research',
    type: 'AiDLab · research software',
    line: 'Turning complex observations into a clear interface.',
    summary:
      'Cross-platform research interfaces for exploring environment, movement and wellbeing observations.',
    role: 'Flutter developer',
    period: '2024–2025',
    stack: ['Flutter', 'BLoC', 'Firebase', 'Python', 'Data visualisation'],
    images: [],
    highlights: [
      'Built desktop and mobile research interfaces with Flutter.',
      'Worked on charts, time selection, place selection and analysis views.',
      'Connected frontend state with authentication and backend analysis services.',
      'Worked in an agile research team with unit and integration testing.',
    ],
    story:
      'I helped translate an exploratory research workflow into a navigable application. The work combines reactive state, camera-related flows and several ways of presenting complex observations.',
    note: 'Research software; not presented as a clinically validated product.',
  },
  {
    id: 'tapmeet',
    name: 'TapMeet',
    category: 'Mobile',
    type: 'Prototype',
    line: 'Places, rooms and people, kept in sync.',
    summary:
      'A Flutter prototype exploring shared locations, room management, invitations and offline-to-online synchronisation.',
    role: 'Prototype development',
    period: '2025',
    stack: ['Flutter', 'Dart', 'BLoC', 'Firebase', 'Local storage'],
    images: [],
    highlights: [
      'Structured the app around presentation, domain and data layers.',
      'Built location, room, invitation and profile flows.',
      'Implemented local storage and connectivity-aware synchronisation.',
      'Explored light and dark themes across the interface.',
    ],
    story:
      'A smaller project for exploring how shared spaces and invitations fit together. It also gave me room to work on the less visible parts of a mobile interface: local state, connectivity changes and synchronisation.',
    note: 'Prototype, not a claim of a released commercial service.',
  },
]

export const skills = [
  {
    title: 'Interfaces',
    text: 'React · TypeScript · JavaScript · HTML & CSS · Flutter · Dart · Figma',
  },
  {
    title: 'Product systems',
    text: 'Node.js · Express · Python · FastAPI · MySQL · MongoDB · Redis · Firebase',
  },
  {
    title: 'Native & delivery',
    text: 'Swift · Kotlin · BLoC · REST APIs · Unit & integration testing · CI/CD',
  },
  {
    title: 'AI in practice',
    text: 'LLM integration · Streaming responses · Model fallbacks · Cursor · AI-assisted review',
  },
]
