# @fravelz/ui-kit-fravelz

Custom **React** component library (atoms / molecules / organisms) for notes sites and public portfolio projects by [Fravelz](https://github.com/FraVelz).

Published on npm as [`@fravelz/ui-kit-fravelz`](https://www.npmjs.com/package/@fravelz/ui-kit-fravelz).

|              |         |
| ------------ | ------- |
| **Version**  | 1.2.0   |
| **Author**   | Fravelz |
| **License**  | Apache-2.0 |

> When publishing a new version, update `version` here and in `package.json`, then run `npm publish`.

**Languages:** [Español](readme.md) · English

---

## Installation

```bash
npm install @fravelz/ui-kit-fravelz
```

Requires **React 18+** and **React DOM 18+** as peer dependencies. Styles use **Tailwind CSS** utility classes in the consuming app.

The package ships **TypeScript types** (`dist/index.d.ts`). Works in projects **with or without TS**.

---

## Usage

```tsx
import { Button, Card, Title, Section } from "@fravelz/ui-kit-fravelz";
import type { ButtonVariant } from "@fravelz/ui-kit-fravelz";

export default function Page() {
  return (
    <Section title="Example">
      <Card>
        <Title headingLevel="h2">Hello</Title>
        <Button variant="primary" size="md">
          Action
        </Button>
      </Card>
    </Section>
  );
}
```

Per-component imports (tree-shaking depends on your bundler):

```tsx
import { Alert, Badge, Grid, Roadmap } from "@fravelz/ui-kit-fravelz";
```

### Site layout shells

```tsx
import {
  SiteHeader,
  SiteFooter,
  SiteFooterColumn,
} from "@fravelz/ui-kit-fravelz";

<SiteHeader
  brand={<a href="/">My app</a>}
  meta={<span className="text-xs">v1.0</span>}
  actions={<nav>{/* links */}</nav>}
/>;

<SiteFooter
  brand={<p>Project description</p>}
  toolbar={/* theme switcher, etc. */}
  legal={<p>© 2026 My team</p>}
>
  <SiteFooterColumn title="Links">
    <nav>{/* … */}</nav>
  </SiteFooterColumn>
</SiteFooter>;
```

---

## Local development

Clone the repo, install dependencies, and compile `src/` → `dist/` (JS + `.d.ts`):

```bash
git clone https://github.com/FraVelz/ui-kit-fravelz.git
cd ui-kit-fravelz
npm install
npm run build
npm run typecheck   # optional: check types in src and playground
```

### Playground (component preview)

The `playground/` folder uses Vite + Tailwind. It imports directly from `src/` (no rebuild on every change):

```bash
npm run dev
```

Open the URL Vite prints (default `http://localhost:5173`). **React Router:** `/` landing, `/docs` index, `/docs/:id` per-component docs. The playground is **bilingual (ES/EN)** with selectors in the header; preference is stored in `localStorage`. Code lives under `playground/features/docs/` (pages and UI), `playground/components/layout/`, and `playground/i18n/`. When adding new exports, update `registry.ts`, `i18n/doc-en.ts`, and `Previews.tsx`.

### Deploy docs on Vercel

- **Root Directory:** repository root (`.`), not `playground/`.
- **Build Command:** `npm run build:playground` — do not use `npm run build` (that builds the npm package in `/dist`, not the site).
- **Output Directory:** `playground/dist` — not `/dist`.
- After changing dashboard settings, run a **Redeploy**.
- `vercel.json` and the `vercel-build` script enforce this when the project reads the repo.

If the browser shows source like `export { Button, Card... }`, Vercel is serving the library `dist/`; fix Output Directory and Build Command.

Try the package in another project without publishing:

```bash
npm link
# in the consumer project:
npm link @fravelz/ui-kit-fravelz
```

---

## Repository structure

```text
src/
  atoms/          # Button, Link, Input, Alert, … (.tsx)
  molecules/      # Card, Grid, Table, Title, …
  organisms/      # Section, Message, Roadmap, SiteHeader, SiteFooter, …
  types/          # shared unions and types
  index.tsx       # public re-exports
playground/       # Vite app for development only (not published to npm)
dist/             # tsc output: .js + .d.ts (what npm publishes)
```

---

## Exported components

### Icons (SVG)

`IconInfo`, `IconSuccess`, `IconWarning`, `IconError`, `IconClose`, `IconCheck`, `IconCopy`, `IconArrowRight`, `alertIcons` — for `Badge`, `Input`, `CallToAction`, etc.

### Atoms

`AnimationDevelopment`, `Alert`, `Badge`, `Button`, `Divider`, `GradientText`, `Input`, `Link`, `DynamicLink`, `Image`, `Line`, `Note`, `Tag`, `Text`, `Tooltip`

### Molecules

`CallToAction`, `Card`, `Code`, `Container`, `Divided`, `Grid`, `List`, `ProgressBar`, `Table` (+ `TableHeader`, `TableRow`, `TableCell`), `Title`

### Organisms

`Section`, `Structure` (+ `CurriculumAside`, `CurriculumFull`), `Message`, `Roadmap`, `SiteHeader`, `SiteFooter` (+ `SiteFooterColumn`)

---

## Palette and design (v1.1.x+)

- **Primary accents:** cyan (`#06B6D4`) and purple (`#A855F7`)
- Variants on buttons, links, alerts, and timeline (`Roadmap`)
- Designed for dark backgrounds (`gray-900`); the playground also supports a light theme toggle

---

## Publish to npm

```bash
npm run build
npm publish --access public
```

Scope `@fravelz` — public package on [npmjs.com](https://www.npmjs.com/package/@fravelz/ui-kit-fravelz).

---

## Changelog summary (1.1.0)

- Improvements to `Button`, `Text`, `Link`, `Title`, `Line`, `Code`, `Table`, `Message`, `Roadmap`
- New atoms: `Alert`, `Badge`, `Divider`, `GradientText`, `Input`, `Tag`, `Tooltip`
- New molecules: `CallToAction`, `Card`, `Container`, `Grid`, `ProgressBar`
- `Section` organism with headings
