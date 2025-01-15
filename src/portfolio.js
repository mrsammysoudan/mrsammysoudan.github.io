const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://mrsammysoudan.github.io',
  title: 'SS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Sammy Soudan',
  role: 'Software and App Developer',
  description:
    'Professional Developer based in London, UK with industrial experience. I enjoy challenging tasks and always aim to achieve creativity and logic',
  resume: 'https://moccasin-lizzy-6.tiiny.site',
  social: {
    linkedin: 'https://www.linkedin.com/in/sammy-soudan/',
    github: 'https://github.com/mrsammysoudan',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Dishify',
    description:
      'Founded Dishify, an app that uses AI and image recognition to create recipes based on ingredients',
    stack: [
      'Flutter',
      'Dart',
      'Firebase',
      'OAuth',
      'Laravel',
      'Python',
      'TensorFlow',
      'Jetpack Compose',
      'Kotlin',
    ],
    sourceCode: 'https://github.com/mrsammysoudan/Dishify/tree/main',
    livePreview: 'https://dishify.co.uk',
  },
  {
    name: 'Fitness Tracker',
    description:
      'Developed a Web application that tracks and suggests fitness excersies based on your body capabilities',
    stack: [
      'Node',
      'TypeScript',
      'React',
      'PostgreSQL',
      'AWS',
      'GraphQL',
      'RESTful',
    ],
    sourceCode: 'https://github.com/mrsammysoudan/fitnessDam',
  },
  {
    name: 'Prayer Coach',
    description:
      'Developed a prayer app with leveling up system to track the prayers using voice recognition',
    stack: ['Flutter', 'Figma', 'RESTful'],
    sourceCode: 'https://github.com/mrsammysoudan/azkar_coach',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Flutter',
  'Dart',
  'OAuth',
  'Firebase',
  'Laravel',
  'Figma',
  'Git',
  'Node',
  'AWS',
  'PostgreSQL',
  'GraphQL',
  'Python',
  'Kotlin',
  'Java',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'mr.sammysoudan@gmail.com',
}

export { header, about, projects, skills, contact }
