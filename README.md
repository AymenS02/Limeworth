# Limeworth X-Ray & Ultrasound

Website for Limeworth X-Ray & Ultrasound, Suite 102, 849 Upper Wentworth St, Hamilton, ON.

Built with React, TypeScript, Tailwind CSS and Framer Motion on Vite. Deployed on Vercel.

## Development

```bash
npm install
npm run dev       # local dev server
npm run build     # typecheck + production build to dist/
npm run preview   # serve the production build
```

## Editing content

All clinic information — contact details, hours, services, exam prep, testimonial, service areas
and PDF links — lives in [`src/data/clinic.ts`](src/data/clinic.ts). Update it there and every
page picks up the change.

PDFs are served from `public/docs/`. To replace one, overwrite the file with the same name.

## Structure

```
src/
  data/clinic.ts        clinic content (single source of truth)
  lib/                  hours/open-now logic, helpers
  hooks/                usePageTitle, useOpenStatus
  components/
    layout/             TopBar, Navbar, MobileMenu, Footer, SiteLayout
    sections/           Hero, ServiceCards, ContactForm, VisitInfo, …
    motion/             shared variants, Reveal, PageTransition
    ui/                 Button, Icon, Container/Section/Badge
  pages/                Home, Services, ServiceDetail, PatientInfo, Contact, NotFound
```

## Deployment

Import the repo in Vercel — it detects Vite automatically. `vercel.json` rewrites all routes to
`index.html` so deep links like `/services/ultrasound` work.
