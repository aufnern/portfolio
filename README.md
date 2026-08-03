# Portfolio

Personal portfolio site built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Editing content

All text — name, role, about, projects, skills, education/experience, links — lives in
[`src/content/portfolio.ts`](src/content/portfolio.ts). Edit that one file; the page reads from it.

To add a resume, drop a `resume.pdf` into `public/` (the Resume button links to `/resume.pdf`).

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## Deploying to Vercel

1. Push this repo to GitHub.
2. Go to https://vercel.com/new, import the repo, and deploy with the defaults
   (Vercel detects Next.js automatically — no configuration needed).
3. Optionally add a custom domain under the project's Settings → Domains.
