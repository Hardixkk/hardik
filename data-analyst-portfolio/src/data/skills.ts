// Skill categories. No proficiency percentages — neutral tags only.
export type SkillCategory = {
  id: string
  title: string
  icon: 'bi' | 'excel' | 'sql' | 'python' | 'ai' | 'tools'
  description: string
  skills: string[]
  priority?: boolean // visually emphasised
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'bi',
    title: 'Business Intelligence & Visualization',
    icon: 'bi',
    description: 'Interactive dashboards, KPI reporting, data transformation, and business performance visualization.',
    skills: ['Microsoft Power BI', 'DAX', 'Power Query', 'Tableau', 'Charts & dashboards'],
    priority: true,
  },
  {
    id: 'sql',
    title: 'SQL & Databases',
    icon: 'sql',
    description: 'Querying, filtering, combining, and aggregating structured data.',
    skills: ['SQL', 'MySQL', 'JOINs & aggregations', 'Subqueries', 'CTEs', 'Window functions'],
    priority: true,
  },
  {
    id: 'excel',
    title: 'Excel & Spreadsheet Analytics',
    icon: 'excel',
    description: 'Spreadsheet analysis, data organization, lookup functions, and reporting.',
    skills: ['PivotTables', 'XLOOKUP & VLOOKUP', 'IF & SUMIFS', 'Data cleaning'],
    priority: true,
  },
  {
    id: 'python',
    title: 'Python & Statistical Analysis',
    icon: 'python',
    description: 'Data manipulation, exploratory analysis, statistical summaries, and visualization.',
    skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Exploratory Data Analysis', 'Descriptive statistics'],
    priority: true,
  },
  {
    id: 'ai',
    title: 'AI-Assisted Data Analytics',
    icon: 'ai',
    description:
      'Using AI to draft and debug queries, explain calculations, suggest exploratory analyses, document workflows, and summarize validated findings.',
    skills: ['ChatGPT', 'Claude', 'AI-assisted SQL', 'AI-assisted Python & Pandas', 'AI-assisted DAX', 'AI-generated insight summaries'],
    priority: true,
  },
  {
    id: 'tools',
    title: 'Tools & Productivity',
    icon: 'tools',
    description: 'Everyday tooling for version control, notebooks, and reporting.',
    skills: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Microsoft Word', 'Microsoft PowerPoint'],
  },
]
