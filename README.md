# Pulseboard — SaaS Analytics Landing Page

A portfolio-grade, light-theme marketing site for **Pulseboard**, a fictional SaaS analytics
product. Built as a complete React demo: bold display typography, bento grids, scroll-driven
reveals, glassmorphism accents, and a pure-CSS product mockup — no image assets anywhere.

## What's inside

- **Sticky navbar** — translucent blur background on scroll, animated mobile hamburger menu,
  CTA with hover micro-interaction
- **Hero** — Sora display headline with gradient accent, dual CTAs, and a fully CSS-built
  product dashboard mockup (browser chrome, sidebar, KPI cards, animated bar + SVG line
  chart) with floating glassmorphism notification cards
- **Logo marquee** — infinite CSS marquee of customer wordmarks (pauses on hover, seamless loop)
- **Features bento grid** — 2 large + 4 small cells, each with its own tiny live-feeling CSS
  visual (animated bars, alert rows, NLQ box, integration tiles, security toggles, API/code
  snippet)
- **Animated stats** — count-up numbers triggered on scroll (IntersectionObserver +
  requestAnimationFrame, custom `useCountUp` hook)
- **Pricing** — monthly/yearly toggle with animated price transitions (yearly = 2 months free),
  highlighted "Most popular" tier, feature checklists
- **Testimonials** — 6 cards with names, titles, companies, and star ratings
- **FAQ accordion** — smooth height animation, 6 realistic questions
- **CTA band** — gradient panel with light decorative flourishes
- **Footer** — multi-column layout with status pill and real-looking links

All copy lives in `src/data/content.js`; reusable hooks live in `src/hooks/`.

## Tech stack

- React 18 + Vite
- Tailwind CSS 3
- Framer Motion (scroll reveals, micro-interactions)
- Google Fonts: Sora (display) + Inter (body), imported via CSS `@import`

## Run it

```bash
npm install
npm run dev      # start dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Project structure

```
saas-landing/
├── index.html
├── package.json
├── vite.config.js          # base: './' for portable builds
├── tailwind.config.js      # Sora/Inter font families, brand palette
├── postcss.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css           # Tailwind + fonts + marquee/float keyframes
    ├── data/content.js     # all copy in one place
    ├── hooks/
    │   ├── useInView.js
    │   └── useCountUp.js
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── LogoMarquee.jsx
        ├── FeaturesBento.jsx
        ├── Stats.jsx
        ├── Pricing.jsx
        ├── Testimonials.jsx
        ├── Faq.jsx
        ├── Cta.jsx
        └── Footer.jsx
```

## Notes

- Fully responsive — grids stack and the nav collapses to a hamburger menu at mobile widths
  (verified layout approach at 390px).
- Light theme only, by design. No dark-mode code is included.
