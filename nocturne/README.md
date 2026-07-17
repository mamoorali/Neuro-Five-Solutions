# Nocturne

A responsive landing page for **Nocturne**, a fictional app concept that generates
personalized ambient soundscapes to help you fall asleep. Built as a frontend-only
exercise — no backend, no real audio, no live data — the focus is entirely on
layout, responsiveness, and a cohesive design system.

## Live demo

[Add your deployed URL here once live]

## Why plain HTML/CSS/JS

No framework was used on purpose. The goal of this task was to prove I can structure
a UI cleanly without relying on a framework to do that structuring for me. Instead of
one framework's idea of a "component," each section of the page is a small JavaScript
function that returns an HTML string, mounted into a specific spot in `index.html` by
`main.js`. This keeps the same separation of concerns you'd get from React or Vue —
one function, one responsibility, reusable and composable — using nothing but the
language itself.

## Project structure
nocturne/
├── index.html              — page skeleton with mount points for each section
├── css/
│   ├── variables.css       — design tokens: colors, type scale, spacing, motion
│   ├── base.css            — resets, global typography, accessibility (reduced motion, focus states)
│   ├── layout.css          — grid/flex layout and responsive breakpoints
│   └── components.css      — styling for buttons, cards, nav, and the hero orb animation
├── js/
│   ├── main.js              — entry point; mounts every component into the DOM
│   └── components/
│       ├── Navbar.js
│       ├── Hero.js
│       ├── HowItWorks.js
│       ├── FeatureCard.js   — includes both the reusable card and the Features section
│       ├── Testimonial.js
│       ├── PricingCard.js   — includes both the reusable card and the Pricing section
│       └── Footer.js
└── README.md

### How the component pattern works

Each file under `js/components/` exports a function that returns an HTML string
built from a template literal, e.g.:

```javascript
function Hero() {
  return `<h1>...</h1>`;
}
```

`main.js` is the only file that touches the DOM directly. On `DOMContentLoaded`, it
calls each component function and injects the result into its matching mount point
in `index.html`:

```javascript
document.getElementById('hero').innerHTML = Hero();
```

Some components (`FeatureCard`, `PricingCard`) define two functions in one file: a
small reusable "card" function, and a "section" function that maps an array of data
into a list of those cards — the clearest example of composition in this project.

## Design system

- **Colors**: deep indigo background with warm gold and dusk-violet accents
- **Type**: Fraunces (display/headings), Manrope (body), Space Mono (labels/eyebrows)
- **Spacing**: 8px base scale, applied consistently via CSS custom properties
- **Motion**: a single signature animation — a slow "breathing" orb behind the hero —
  respecting `prefers-reduced-motion` for accessibility

## Responsive breakpoints

- Mobile: base styles, single-column layouts
- Tablet (480px+): 2-column feature grid, horizontal hero actions
- Desktop (1024px+): full nav links visible, 3-column grids for steps/features,
  2-column pricing

Built mobile-first — base CSS targets mobile, with `min-width` media queries
progressively enhancing the layout upward.

## Running locally

No build step or dependencies required. Clone the repo and open `index.html`
directly in a browser, or serve it with any static server, e.g.:

## Notes

This is a portfolio/task exercise. Nocturne is not a real product — no accounts,
payments, or audio playback are implemented.