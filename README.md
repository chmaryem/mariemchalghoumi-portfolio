# Mariem Chalghoumi — Portfolio

A personal portfolio built with React, TypeScript, Vite, Tailwind CSS and
Framer Motion. Content is sourced from the attached CV; no experience,
project, or statistic is invented.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com), click **New Project**, and import
   the repository.
3. Framework preset: **Vite**. Build command `npm run build`, output
   directory `dist` (Vercel detects these automatically).
4. Deploy — no environment variables or paid services are required.

## Notes / things to double-check before publishing

- `src/data/profile.ts` holds every fact shown on the site (experience,
  projects, skills, education, contact links) — update it directly if
  anything on your CV changes.
- The LinkedIn and GitHub URLs were extracted from the link annotations in
  the CV PDF (`github.com/chmaryem` and the LinkedIn profile) — verify they
  are current.
- `public/assets/profile.png` is your original portrait; the hero section
  uses a background-removed version (`public/assets/profile-cutout.png`) so
  it can blend into the dark hero. If you swap in a new photo, regenerate a
  cutout the same way (or provide one with a transparent background) and
  update `src/sections/Hero.tsx`.
- `public/assets/Mariem-Chalghoumi-CV.pdf` is served as the "Download CV"
  file — replace it if your CV changes.
- `public/assets/projects/` is empty and unused; every project instead uses
  a small generated technical diagram (`src/components/ProjectVisual.tsx`)
  since no real project screenshots were provided.
