# Vinay Penta — Portfolio

A modern, responsive portfolio built with Next.js 15 (App Router), React 19, TypeScript,
Tailwind CSS, Framer Motion, Lucide icons, and shadcn/ui-style components.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploying to Netlify

This is a Next.js App Router site, which uses server-side rendering/routing — Netlify needs to
detect it as a Next.js project and build it with its Next.js adapter (plain static hosting will
404 on every page).

Netlify does this automatically as of Next.js 13.5+, with no config needed. `netlify.toml` in
this repo just pins the build command; Netlify auto-installs and auto-updates its Next.js adapter
so it always ships the latest fixes — we intentionally don't pin the adapter version.

To deploy:
1. Push this project to GitHub (or GitLab/Bitbucket).
2. In Netlify: **Add new site → Import an existing project**, and pick the repo.
3. Leave build settings as detected (`npm run build`). Deploy.
4. If a previous failed deploy is cached, use **Deploys → Trigger deploy → Clear cache and
   deploy site** once.

**Security note:** this project was originally scaffolded on Next.js 15.1.0 / React 19.0.0, both
affected by the critical React Server Components RCE (CVE-2025-55182 / CVE-2025-66478,
"React2Shell") disclosed in December 2025. It has since been upgraded to Next.js 16.2.10 and
React 19.2.7, which are patched. If you fork or reuse this project later, run `npm outdated` and
check the Next.js security advisories before deploying, since new CVEs surface periodically and
Netlify will block deploys on flagged versions.

## Editing content

Every piece of content on the site — name, summary, skills, experience, projects, education,
achievements, and contact links — lives in one file:

```
lib/data.ts
```

Edit that file to update anything on the page; no component code needs to change.

**Things to personalize before deploying:**
- `profile.github` — a real GitHub profile URL wasn't listed on the resume, so it's a placeholder.
- `projects[].links.demo` / `projects[].links.code` — the resume didn't list live URLs or repos,
  so these currently point to `#`. Add real links once available.
- `public/resume.pdf` — your resume, wired up to the "Download Resume" button. Replace this file
  to update what gets downloaded.

## Project structure

```
app/
  layout.tsx        Root layout, fonts, SEO metadata
  page.tsx           Assembles all sections
  globals.css        Theme variables, base styles, reduced-motion support
components/
  Navbar.tsx          Sticky nav with active-section highlighting
  Hero.tsx            Hero section with animated "API response" signature visual
  About.tsx
  Skills.tsx          Categorized animated progress bars
  Experience.tsx      Vertical timeline
  Projects.tsx        Project cards with tech badges + links
  Education.tsx       Education + achievements
  Contact.tsx         Contact details + form (opens a pre-filled email)
  Footer.tsx
  BackToTop.tsx
  ThemeProvider.tsx   Dark/light mode (persisted to localStorage)
  ThemeToggle.tsx
  ui/                 Small shadcn-style primitives (Button, Card, Badge)
lib/
  data.ts             All resume content — single source of truth
  utils.ts            cn() className helper
public/
  resume.pdf          Downloadable resume
```

## Notes

- Dark/light mode uses the `class` strategy and respects the visitor's OS preference on first
  visit, then remembers their choice.
- The contact form has no backend wired up — submitting it opens the visitor's email client with
  a pre-filled message addressed to you. Swap in a real endpoint (e.g. Formspree, Resend, or an
  API route) if you'd like it to submit silently instead.
- Animations respect `prefers-reduced-motion`.
- Build verified with `npm run build` — compiles clean with no type errors.
