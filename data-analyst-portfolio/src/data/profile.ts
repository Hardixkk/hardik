// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE to update personal details.
//  Any field left as '' is automatically hidden on the site.
// ─────────────────────────────────────────────────────────────
export const profile = {
  name: 'Hardik Kumar Singh',
  title: 'Aspiring Data Analyst | Power BI Developer | AI-Driven Analytics',
  location: 'Patna, Bihar, India',

  // Contact — leave '' to hide. Paste full URLs for github / linkedin.
  email: 'hardiksingh9097@gmail.com',
  github: 'https://github.com/Hardixkk',
  linkedin: '', // e.g. 'https://www.linkedin.com/in/your-id'

  // Resume: put your PDF in /public/resume/ and set the path below.
  // Leave '' to hide the Download Resume buttons.
  resumePath: '/resume/Hardik_Kumar_Singh_Data_Analyst_Resume.pdf',

  // Portrait: file in /public/images. Set '' to hide the photo everywhere.
  photo: '/images/hardik.webp',
  photoAlt: 'Portrait of Hardik Kumar Singh',

  heroHeadline: 'I Turn Data Into Decisions.',
  heroText:
    "I'm Hardik Kumar Singh, an aspiring Data Analyst passionate about transforming raw data into meaningful insights through interactive dashboards, analytical thinking, and AI-assisted workflows.",
  heroTags: ['Business Intelligence', 'Data Visualization', 'AI-Powered Analytics'],

  // Quick facts strip under the hero — keep these true; update if projects change.
  highlights: [
    { value: '2', label: 'Power BI dashboards' },
    { value: '1', label: 'Python + SQL project' },
    { value: '23,201', label: 'Job records explored (approx.)' },
    { value: '10,620', label: 'Normalized skills found (approx.)' },
  ],

  about: [
    "I'm a Data Analyst with a Bachelor of Computer Applications (BCA). I'm building practical skills in Power BI, Excel, SQL, Python, and business intelligence to transform raw datasets into clear, useful insights.",
    'Through my analytics projects, I explore lending performance, sales trends, customer behavior, and job market data. I\'m also interested in using AI tools to assist with SQL queries, Python workflows, DAX calculations, exploratory data analysis, and communicating findings effectively.',
    'My goal is to build reliable, insightful, and business-focused analytical solutions while continuously improving my technical and problem-solving skills.',
  ],
  aboutCards: [
    { icon: 'search', title: 'Analytical Thinking', text: 'Exploring trends, patterns, and data quality.' },
    { icon: 'layout', title: 'Business Intelligence', text: 'Building interactive dashboards and performance reports.' },
    { icon: 'sparkles', title: 'AI-Assisted Analytics', text: 'Using modern AI tools to accelerate workflows while validating the results.' },
  ],

  education: {
    degree: 'Bachelor of Computer Applications (BCA)',
    status: 'Completed',
    college: 'Impact College, Patna', // '' to hide
    university: 'Aryabhatta Knowledge University', // '' to hide
    graduationYear: '2026', // hidden if set to ''
    results: '', // e.g. 'CGPA 8.2' — hidden until set
  },

  contact: {
    headline: "Let's Turn Data Into Insights.",
    text: "I'm interested in Data Analyst, BI Analyst, Reporting Analyst, and MIS Analyst opportunities, as well as collaborative analytics projects.",
  },

  seo: {
    title: 'Hardik Kumar Singh | Data Analyst Portfolio',
  },
}

// Certifications — add ONLY real ones. Empty list shows an editable placeholder.
export type Certification = {
  title: string
  issuer: string
  date?: string
  link?: string // URL or /certificates/file.pdf
  image?: string // /certificates/image.png
  tasks?: string[] // areas listed on the certificate
}
export const certifications: Certification[] = [
  {
    title: 'Data Analytics Job Simulation',
    issuer: 'Deloitte (issued via Forage)',
    date: 'September 13, 2026',
    tasks: ['Data analysis', 'Forensic technology'],
    link: '/certificates/deloitte-data-analytics-job-simulation.pdf',
    image: '/certificates/deloitte-data-analytics-job-simulation.webp',
  },
]
