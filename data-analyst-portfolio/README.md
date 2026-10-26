# Data Analyst Portfolio — Hardik Kumar Singh

React + TypeScript + Vite + Tailwind CSS, with Recharts, Framer Motion and Lucide icons.

## Prerequisites
Node.js 18+ and npm.

## Install & run
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build locally
```

## Where to edit things (no component changes needed)
| What | File |
|---|---|
| Name, title, email, GitHub, LinkedIn, resume path, about text, education, certifications | `src/data/profile.ts` |
| Skill categories and tags | `src/data/skills.ts` |
| Projects, screenshots, repo URLs | `src/data/projects.ts` |
| Workflow steps | `src/data/workflow.ts` |

Any field left as `''` (GitHub, LinkedIn, resume, graduation year, results…) is **hidden automatically**, so there are no broken buttons.

## Add project screenshots
1. Copy images to `public/projects/` (e.g. `bank-loan-1.png`).
2. In `src/data/projects.ts` set
   `screenshots: [{ src: '/projects/bank-loan-1.png', alt: 'Bank Loan Analytics summary dashboard' }]`
3. Set `repoUrl` to the real GitHub URL. Screenshots become enlargeable automatically.

## Add a new project
Append an object to the `projects` array. Category filters are generated from the `categories` of your projects (`Power BI`, `SQL`, `Python`, `AI Analytics`).

## Add / replace the resume
Put the PDF in `public/resume/` and set `resumePath: '/resume/your-file.pdf'` in `profile.ts`.

## Certifications
Add only real ones to the `certifications` array in `profile.ts` (title, issuer, optional date, link, image).

## AI demo
The "Analytics, Accelerated by AI" demo runs on a small illustrative dataset in the browser. It is **not** a live AI system and needs no API key. If you add real AI later, call the model from a server-side function and keep keys in server environment variables — never in `VITE_*` variables or frontend code.

## Deploy
**Vercel:** import the repo → framework preset *Vite* → build command `npm run build`, output `dist`.
**Netlify:** build command `npm run build`, publish directory `dist`.
No environment variables are required.
