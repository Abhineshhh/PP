# abhineshhh.me

Personal portfolio — [abhineshhh.me](https://abhineshhh.me)

## Stack

- **Next.js 16** — App Router
- **Tailwind CSS** + `@tailwindcss/typography`
- **Framer Motion** — scroll animations
- **Geist** — font

## Dev

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Structure

```
app/
├── components/   # Nav, Footer, ProjectCard, AnimateIn, …
├── config/       # config.ts — all site content (name, projects, socials, resume URL)
├── layout.tsx    # Root layout + SEO metadata
└── page.tsx      # Portfolio page
```

## Customising

Edit [`app/config/config.ts`](app/config/config.ts) to update your name, projects, social links, and resume URL. No need to touch any component.
