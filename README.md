# Aviora — Systems, Automation, Training

Marketing site and lightweight CMS for Aviora, a consultancy focused on strategic modernization, intelligent automation, and workforce enablement.

Live sections include Home, Services, Case Studies, About, and Contact. A protected CMS page allows authenticated admins to edit case studies stored in Supabase.

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS + shadcn/ui
- Framer Motion
- React Router
- TanStack Query
- Supabase (auth + Postgres)

## Project Structure

- `src/pages` — Route pages (Home, Services, CaseStudies, About, Contact, Auth, CMS)
- `src/components` — UI and layout components (Navigation, Footer, etc.)
- `src/integrations/supabase` — Supabase client and generated types
- `supabase/migrations` — SQL migrations (case_studies table and policies)

## Getting Started

Prerequisites:
- Node.js 18+ (or Bun). Recommended: Node 20 LTS.

1) Install dependencies
```
npm install
# or
bun install
```

2) Configure environment variables
Create a `.env` file in the project root:
```
VITE_SUPABASE_URL=https://YOUR-PROJECT.ref.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=YOUR_SUPABASE_ANON_KEY
```

3) Run the dev server
```
npm run dev
```
The app will be available at http://localhost:8080 (see `vite.config.ts`).

## Database and CMS

This project uses Supabase for authentication and to store Case Studies.

- Apply the migration in `supabase/migrations/` using the Supabase SQL Editor or CLI to create the `case_studies` table and RLS policies.
- Visit `/auth` to sign up or log in (Supabase email/password). After login, `/cms` provides an admin interface to edit case studies.

## Scripts

- `npm run dev` — Start the Vite dev server
- `npm run build` — Create a production build
- `npm run preview` — Preview the production build
- `npm run lint` — Lint the project

## Deployment

Any static host that supports Vite builds works (Vercel, Netlify, Cloudflare Pages, etc.).

Basic steps:
1) Set env vars `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` in your host.
2) Build: `npm run build`
3) Deploy the `dist/` folder.

## Branding

Project copy and UI are branded as “Aviora”. Update content in `src/pages` as needed.

## License

All rights reserved.
