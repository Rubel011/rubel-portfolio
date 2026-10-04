# Rubel Foridi — Full Stack Developer Portfolio

Personal site for Rubel Foridi, a backend-focused full stack developer in Kolkata, India.

The visual language is a technical record rather than a landing page: paper canvas, blue-black ink, one flat cobalt accent, IBM Plex Sans for prose and IBM Plex Mono for numbers and stack lists. Sections are separated by hairlines, not cards. The single deliberate animation is the request trace in the hero, which runs once on load and collapses to its end state under `prefers-reduced-motion`.

## Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4, design tokens in `src/app/globals.css`
- **Components:** shadcn/ui primitives (`src/components/ui`)
- **Fonts:** IBM Plex Sans and IBM Plex Mono via `next/font`
- **Live data:** GitHub repository stars and forks (`src/hooks/use-github-stats.ts`), contribution chart from `ghchart.rshah.org`

## Pages

| Route        | Contents                                                                                                 |
| ------------ | -------------------------------------------------------------------------------------------------------- |
| `/`          | Hero and request trace, experience record, three selected projects, writing, contribution chart, contact |
| `/projects`  | All six projects                                                                                         |
| `/dashboard` | Component scratch pad, not linked from the site                                                          |

## Getting started

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
bun run build   # production build
bun start       # serve the production build
bun run lint
```

Bun is the only supported package manager for this repository.

## Editing content

All copy, roles, projects, and links live in `src/lib/portfolio-data.ts`. The page reads from it directly, so adding an experience entry or project needs no component changes. A blog post renders as a link only when its `slug` is a real URL.

## Project structure

```
src/
├── app/                  # Routes, global tokens, layout
├── components/
│   ├── ui/               # shadcn/ui primitives
│   ├── header.tsx        # Sticky masthead and mobile sheet nav
│   ├── hero.tsx          # Name, positioning, actions
│   ├── request-trace.tsx # Hero pipeline diagram (CSS-only animation)
│   ├── section.tsx       # Section shell with sticky label column
│   ├── experience.tsx    # Roles as chronological record rows
│   ├── projects.tsx      # Project index rows
│   ├── writing.tsx       # Posts
│   ├── open-source.tsx   # Contribution chart
│   ├── contact.tsx       # Email, copy action, local time
│   ├── footer.tsx
│   └── icons.tsx         # The three inline SVG glyphs in use
├── hooks/
└── lib/
```

## Connect

- [GitHub](https://github.com/Rubel011)
- [LinkedIn](https://linkedin.com/in/rubel-foridi)
- [Email](mailto:rubelforidi@gmail.com)

## License

MIT
