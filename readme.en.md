# @fravelz/ui-kit-fravelz

Custom **React** component library (atoms / molecules / organisms) for notes sites and public portfolio projects by [Fravelz](https://github.com/FraVelz). Published on npm as [`@fravelz/ui-kit-fravelz`](https://www.npmjs.com/package/@fravelz/ui-kit-fravelz). Styles use **Tailwind CSS** in the consumer app; requires **React 18+** and **React DOM 18+**.

**Languages:** [Español](readme.md) · English

![Fravelz UI Kit — brand preview](assets/brand/og-image.png)

## Atoms

| Component              | Notes                                          |
| ---------------------- | ---------------------------------------------- |
| `Alert`                | Status messages with icon and optional dismiss |
| `AnimationDevelopment` | Lottie animation (optional peer in consumer)   |
| `Badge`                | Compact chip or label                          |
| `Button`               | Button with variants and sizes                 |
| `Divider`              | Horizontal or vertical separator               |
| `DynamicLink`          | Link with visited state (React Router)         |
| `GradientText`         | Cyan–purple gradient text                      |
| `Image`                | Image with configurable dimensions             |
| `Input`                | Text field with label and icon                 |
| `Link`                 | Link with smooth scroll to anchors             |
| `Line`                 | Decorative line                                |
| `Note`                 | Highlighted note block                         |
| `Tag`                  | Removable tag or pill                          |
| `Text`                 | Paragraph with color and size variants         |
| `Tooltip`              | Contextual hover information                   |

## Molecules

| Component          | Notes                                    |
| ------------------ | ---------------------------------------- |
| `CallToAction`     | Prominent CTA-style link                 |
| `Card`             | Container with border and optional hover |
| `Code`             | Syntax-highlighted block with copy       |
| `Container`        | Max width and responsive padding         |
| `Divided`          | Two-column layout                        |
| `Grid`             | Responsive grid                          |
| `List`             | Ordered or unordered list                |
| `ProgressBar`      | Progress bar                             |
| `SegmentedControl` | Segmented control (e.g. locale)          |
| `Table`            | Data table                               |
| `TableHeader`      | Table header                             |
| `TableRow`         | Table row                                |
| `TableCell`        | Table cell                               |
| `Title`            | Heading with variants                    |

## Organisms

| Component          | Notes                            |
| ------------------ | -------------------------------- |
| `CurriculumAside`  | Sticky side index (layout)       |
| `CurriculumFull`   | Index on small viewports         |
| `Message`          | Modal with overlay               |
| `Roadmap`          | Step timeline                    |
| `Section`          | Page section with title          |
| `SiteFooter`       | Footer shell                     |
| `SiteFooterColumn` | Footer column                    |
| `SiteHeader`       | Header shell                     |
| `Structure`        | Layout with curriculum + content |

### Utilities (SVG and `cn`)

| Export                                                                                                                      | Use                                                   |
| --------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| `cn`                                                                                                                        | Merge Tailwind classes with `clsx` + `tailwind-merge` |
| `IconInfo`, `IconSuccess`, `IconWarning`, `IconError`, `IconClose`, `IconCheck`, `IconCopy`, `IconArrowRight`, `alertIcons` | Inline icons for atoms and molecules                  |

## Example

```tsx
import { Button, Card, Section, Title } from "@fravelz/ui-kit-fravelz";

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

---

## Installation

```bash
npm install @fravelz/ui-kit-fravelz
```

TypeScript types ship in `dist/index.d.ts`.

---

## Local development

```bash
git clone https://github.com/FraVelz/ui-kit-fravelz.git
cd ui-kit-fravelz
pnpm install
pnpm run build
pnpm run dev
```

Interactive docs in the playground (`/es`, `/en`, `/es/docs/:id`). Vercel deploy: **Build** `pnpm run build:playground`, **Output** `playground/dist`. See `vercel.json`.

---

## Palette

- **Accents:** cyan (`#06B6D4`) and purple (`#A855F7`)
- **Themes:** light base styles and `dark:` prefix (consumer needs `darkMode: 'class'`)

---

## Publish to npm

> [!NOTE]
> para desarrollador.

```bash
pnpm run build
npm publish --access public
```

---

## Project information

|                |                                                                                  |
| -------------- | -------------------------------------------------------------------------------- |
| **Version**    | 1.2.0                                                                            |
| **Author**     | [Fravelz](https://github.com/FraVelz)                                            |
| **License**    | [Apache-2.0](LICENSE)                                                            |
| **Repository** | [github.com/FraVelz/ui-kit-fravelz](https://github.com/FraVelz/ui-kit-fravelz)   |
| **npm**        | [@fravelz/ui-kit-fravelz](https://www.npmjs.com/package/@fravelz/ui-kit-fravelz) |
| **Playground** | [ui-kit-fravelz.vercel.app](https://ui-kit-fravelz.vercel.app/)                  |

> When publishing a new version, update `version` here and in `package.json`, then run `npm publish`.
