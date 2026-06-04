# @fravelz/ui-kit-fravelz

Biblioteca de componentes **React** personalizados (patrón atoms / molecules / organisms) para sitios de notas y proyectos públicos del portfolio de [Fravelz](https://github.com/FraVelz).

Publicada en npm como [`@fravelz/ui-kit-fravelz`](https://www.npmjs.com/package/@fravelz/ui-kit-fravelz).

|              |         |
| ------------ | ------- |
| **Versión**  | 1.2.0   |
| **Autor**    | Fravelz |
| **Licencia** | Apache-2.0 |

> Al publicar una nueva versión, actualiza `version` aquí y en `package.json`, luego `npm publish`.

**Idiomas:** Español · [English](readme.en.md)

---

## Instalación

```bash
npm install @fravelz/ui-kit-fravelz
```

Requiere **React 18+** y **React DOM 18+** como peer dependencies. Los estilos usan clases **Tailwind CSS** en el proyecto consumidor.

El paquete incluye **tipos TypeScript** (`dist/index.d.ts`). Funciona en proyectos **con o sin TS**.

---

## Uso

```tsx
import { Button, Card, Title, Section } from "@fravelz/ui-kit-fravelz";
import type { ButtonVariant } from "@fravelz/ui-kit-fravelz";

export default function Page() {
  return (
    <Section title="Ejemplo">
      <Card>
        <Title headingLevel="h2">Hola</Title>
        <Button variant="primary" size="md">
          Acción
        </Button>
      </Card>
    </Section>
  );
}
```

Importación por componente (tree-shaking depende del bundler):

```tsx
import { Alert, Badge, Grid, Roadmap } from "@fravelz/ui-kit-fravelz";
```

### Shells de cabecera y pie

```tsx
import {
  SiteHeader,
  SiteFooter,
  SiteFooterColumn,
} from "@fravelz/ui-kit-fravelz";

<SiteHeader
  brand={<a href="/">Mi app</a>}
  meta={<span className="text-xs">v1.0</span>}
  actions={<nav>{/* enlaces */}</nav>}
/>;

<SiteFooter
  brand={<p>Descripción del proyecto</p>}
  toolbar={/* selector de tema, etc. */}
  legal={<p>© 2026 Mi equipo</p>}
>
  <SiteFooterColumn title="Enlaces">
    <nav>{/* … */}</nav>
  </SiteFooterColumn>
</SiteFooter>;
```

---

## Desarrollo local

Clonar el repo, instalar y compilar `src/` → `dist/` (JS + `.d.ts`):

```bash
git clone https://github.com/FraVelz/ui-kit-fravelz.git
cd ui-kit-fravelz
npm install
npm run build
npm run typecheck   # opcional: comprobar tipos en src y playground
```

### Playground (vista previa de componentes)

Carpeta `playground/` con Vite + Tailwind. Importa directamente desde `src/` (sin `build` en cada cambio):

```bash
npm run dev
```

Abre la URL que muestra Vite (por defecto `http://localhost:5173`). **React Router**: `/` presentación, `/docs` índice, `/docs/:id` ficha de cada componente. El playground es **bilingüe (ES/EN)** con selector en la cabecera; la preferencia se guarda en `localStorage`. Código en `playground/features/docs/` (páginas y componentes), `playground/components/layout/` y `playground/i18n/`; al exportar componentes nuevos, actualiza `registry.ts`, `i18n/doc-en.ts` y `Previews.tsx`.

### Desplegar documentación en Vercel

- **Root Directory:** raíz del repo (`.`), no `playground/`.
- **Build Command:** `npm run build:playground` — no uses `npm run build` (eso genera el paquete npm en `/dist`, no la web).
- **Output Directory:** `playground/dist` — no `/dist`.
- Tras cambiar ajustes en el dashboard, haz **Redeploy**.
- `vercel.json` y el script `vercel-build` fijan esto automáticamente si el proyecto lee el repo.

Si ves código fuente de `export { Button, Card... }` en el navegador, Vercel está sirviendo el `dist/` de la biblioteca; corrige Output Directory y Build Command.

Probar en otro proyecto sin publicar:

```bash
npm link
# en el proyecto consumidor:
npm link @fravelz/ui-kit-fravelz
```

---

## Estructura del repositorio

```text
src/
  atoms/          # Button, Link, Input, Alert, … (.tsx)
  molecules/      # Card, Grid, Table, Title, …
  organisms/      # Section, Message, Roadmap, SiteHeader, SiteFooter, …
  types/          # unions y tipos compartidos
  index.tsx       # reexportaciones públicas
playground/       # app Vite solo para desarrollo (no se publica en npm)
dist/             # salida de tsc: .js + .d.ts (lo que publica npm)
```

---

## Componentes exportados

### Icons (SVG)

`IconInfo`, `IconSuccess`, `IconWarning`, `IconError`, `IconClose`, `IconCheck`, `IconCopy`, `IconArrowRight`, `alertIcons` — para `Badge`, `Input`, `CallToAction`, etc.

### Atoms

`AnimationDevelopment`, `Alert`, `Badge`, `Button`, `Divider`, `GradientText`, `Input`, `Link`, `DynamicLink`, `Image`, `Line`, `Note`, `Tag`, `Text`, `Tooltip`

### Molecules

`CallToAction`, `Card`, `Code`, `Container`, `Divided`, `Grid`, `List`, `ProgressBar`, `Table` (+ `TableHeader`, `TableRow`, `TableCell`), `Title`

### Organisms

`Section`, `Structure` (+ `CurriculumAside`, `CurriculumFull`), `Message`, `Roadmap`, `SiteHeader`, `SiteFooter` (+ `SiteFooterColumn`)

---

## Paleta y diseño (v1.1.x)

- **Primarios:** cyan (`#06B6D4`) y purple (`#A855F7`)
- Variantes en botones, enlaces, alertas y timeline (`Roadmap`)
- Pensado para fondos oscuros (`gray-900`); el playground incluye selector de tema claro/oscuro

---

## Publicar en npm

```bash
npm run build
npm publish --access public
```

Scope `@fravelz` — paquete público en [npmjs.com](https://www.npmjs.com/package/@fravelz/ui-kit-fravelz).

---

## Changelog resumido (1.1.0)

- Mejoras en `Button`, `Text`, `Link`, `Title`, `Line`, `Code`, `Table`, `Message`, `Roadmap`
- Nuevos atoms: `Alert`, `Badge`, `Divider`, `GradientText`, `Input`, `Tag`, `Tooltip`
- Nuevas molecules: `CallToAction`, `Card`, `Container`, `Grid`, `ProgressBar`
- Organism `Section` con encabezados
