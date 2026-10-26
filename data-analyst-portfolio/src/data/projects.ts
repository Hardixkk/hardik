// ─────────────────────────────────────────────────────────────
//  ADD / EDIT PROJECTS HERE. Everything on the Projects section
//  and the case-study modal is generated from this array.
//
//  • screenshots: put images in /public/projects/ and list paths,
//    e.g. ['/projects/bank-loan-1.png']. Empty = labeled placeholder.
//  • repoUrl: paste the real GitHub URL. Empty = button hidden.
// ─────────────────────────────────────────────────────────────
export type ProjectCategory = 'Power BI' | 'SQL' | 'Python' | 'AI Analytics'

export type Project = {
  id: string
  title: string
  summary: string
  categories: ProjectCategory[]
  tools: string[]
  objectives: string[]
  features: string[]
  businessRelevance: string
  businessQuestions: string[]
  verifiedFindings: string[]
  /** Figures exactly as shown in the project's own dashboard screenshots (rounded as displayed). */
  kpis?: { label: string; value: string }[]
  kpiNote?: string
  screenshots: { src: string; alt: string }[]
  repoUrl: string
  liveUrl?: string
  placeholderNote?: string
}

export const projects: Project[] = [
  {
    id: 'bank-loan-analytics',
    title: 'Bank Loan Analytics Dashboard',
    summary:
      'An interactive banking dashboard to analyze loan applications, funded amounts, repayments, loan status, and credit risk indicators.',
    categories: ['Power BI'],
    tools: ['Power BI', 'DAX', 'Power Query', 'Data Visualization'],
    objectives: [
      'Track lending performance through headline KPIs',
      'Compare good loans and bad loans',
      'Understand loan distribution across geography, term and purpose',
    ],
    features: [
      'Total loan application KPIs',
      'Total funded amount',
      'Total amount received',
      'Average interest rate',
      'Average debt-to-income ratio',
      'Monthly loan application trends',
      'State-wise loan distribution',
      'Loan distribution by term and purpose',
      'Homeownership analysis',
      'Good loan vs bad loan analysis',
      'Loan status comparisons',
    ],
    businessRelevance:
      'Helps users investigate lending performance, monitor portfolio indicators, and understand differences between loan categories.',
    businessQuestions: [
      'How are loan applications, funded amounts and repayments trending over time?',
      'How do good loans differ from bad loans?',
      'Which states, terms and purposes account for the most lending?',
    ],
    verifiedFindings: [], // Add findings only when supported by your dashboard/dataset
    kpis: [
      { label: 'Total loan applications', value: '38,576' },
      { label: 'Total funded amount', value: '435.8M' },
      { label: 'Total amount received', value: '473.1M' },
      { label: 'Average interest rate', value: '12.05%' },
      { label: 'Average DTI rate', value: '13.33%' },
      { label: 'Good loan applications', value: '86.18%' },
      { label: 'Bad loan applications', value: '13.82%' },
    ],
    kpiNote: 'Figures as displayed on the dashboard; large amounts are rounded to millions (M).',
    screenshots: [
      { src: '/projects/bank-loan-dashboard.webp', alt: 'Bank Loan Analytics Power BI dashboard showing total applications, funded amount, amount received, average interest rate, average DTI, good versus bad loan split and loan status charts' },
    ],
    repoUrl: 'https://github.com/Hardixkk/Bank-Loan-Analytics-Dashboard',
  },
  {
    id: 'mobile-sales-analytics',
    title: 'Mobile Sales Analytics Dashboard',
    summary:
      'An interactive dashboard to analyze mobile phone sales, quantities sold, transactions, customer ratings, payment methods, and product performance.',
    categories: ['Power BI'],
    tools: ['Power BI', 'DAX', 'Power Query', 'Data Visualization'],
    objectives: [
      'Monitor sales, quantity and transaction KPIs',
      'Compare performance across periods',
      'Explore product, city and payment patterns',
    ],
    features: [
      'Total sales',
      'Total quantity sold',
      'Average selling price',
      'Total transactions',
      'Monthly sales and quantity trends',
      'City-wise sales distribution',
      'Sales by mobile brand and model',
      'Payment method analysis',
      'Customer ratings',
      'Day-of-week sales analysis',
      'Month-to-date reporting',
      'Same-period-last-year comparisons',
    ],
    businessRelevance:
      'Helps users explore sales performance, compare periods, and investigate product and customer purchasing patterns.',
    businessQuestions: [
      'How do sales and quantities change month to month and versus the same period last year?',
      'Which brands, models and cities drive sales?',
      'How do payment methods and customer ratings vary?',
    ],
    verifiedFindings: [], // Add KPI values only if supported by your screenshots; label rounding & units
    kpis: [
      { label: 'Total sales', value: '769M' },
      { label: 'Total quantity', value: '19K' },
      { label: 'Average price', value: '40.11K' },
      { label: 'Transactions', value: '4K' },
    ],
    kpiNote: 'Figures as displayed on the dashboard (rounded, K = thousand, M = million); the brand table totals 769,204,988 sales and 3,835 transactions.',
    screenshots: [
      { src: '/projects/mobile-sales-dashboard.webp', alt: 'Mobile Sales Power BI dashboard with sales KPIs, city map, monthly quantity trend, customer ratings, payment method split, sales by model and sales by day' },
    ],
    repoUrl: 'https://github.com/Hardixkk/Mobile-Sales-dashboard-',
  },
  {
    id: 'ai-job-market-intelligence',
    title: 'AI Job Market Intelligence',
    summary:
      'A data analytics project exploring job market data to understand skill demand and identify patterns in job postings.',
    categories: ['Python', 'SQL'],
    tools: ['Python', 'Pandas', 'SQL', 'MySQL', 'Data Cleaning', 'Exploratory Data Analysis'],
    objectives: [
      'Clean and prepare job-posting data',
      'Extract and normalize skills from postings',
      'Explore which skills are most frequently requested',
    ],
    features: [
      'Data cleaning and preparation',
      'Skill extraction',
      'Skill normalization',
      'MySQL database work',
      'Exploration of in-demand skills and job market patterns',
    ],
    businessRelevance:
      'Explores job market requirements, examines frequently requested skills, and supports an evidence-based understanding of skill demand.',
    businessQuestions: [
      'Which skills appear most often across job postings?',
      'How does normalization change the skill vocabulary?',
    ],
    // Figures as recorded for the project. Update if project files show different results.
    verifiedFindings: [
      '≈ 23,201 job records in the dataset',
      '≈ 176,134 normalized job-skill records',
      '≈ 10,620 unique normalized skills after normalization',
    ],
    screenshots: [],
    repoUrl: '',
    placeholderNote: 'No dashboard yet — add screenshots or notebook outputs to turn this into a fuller case study.',
  },
]
