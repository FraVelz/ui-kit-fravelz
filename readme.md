# @fravelz/ui-kit-fravelz

Biblioteca de componentes **React** personalizados (patrón atoms / molecules / organisms) para sitios de notas y proyectos públicos del portfolio de [Fravelz](https://github.com/FraVelz).

Publicada en npm como [`@fravelz/ui-kit-fravelz`](https://www.npmjs.com/package/@fravelz/ui-kit-fravelz).

|              |         |
| ------------ | ------- |
| **Versión**  | 1.1.2   |
| **Autor**    | Fravelz |
| **Licencia** | ISC     |

> Al publicar una nueva versión, actualiza `version` aquí y en `package.json`, luego `npm publish`.

---

## Instalación

```bash
npm install @fravelz/ui-kit-fravelz
```

Requiere **React 18+** y **React DOM 18+** como peer dependencies. Los estilos usan clases **Tailwind CSS** en el proyecto consumidor.

---

## Uso

```jsx
import { Button, Card, Title, Section } from "@fravelz/ui-kit-fravelz";

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

```jsx
import { Alert, Badge, Grid, Roadmap } from "@fravelz/ui-kit-fravelz";
```

---

## Desarrollo local

Clonar el repo, instalar y compilar `src/` → `dist/`:

```bash
git clone https://github.com/FraVelz/ui-kit-fravelz.git
cd ui-kit-fravelz
npm install
npm run build
```

### Playground (vista previa de componentes)

Carpeta `playground/` con Vite + Tailwind. Importa directamente desde `src/` (sin `build` en cada cambio):

```bash
npm run dev
```

Abre la URL que muestra Vite (por defecto `http://localhost:5173`). Añade ejemplos en `playground/App.jsx` cuando exportes componentes nuevos.

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
  atoms/          # Button, Link, Input, Alert, …
  molecules/      # Card, Grid, Table, Title, …
  organisms/      # Section, Message, Roadmap, Structure
  index.jsx       # reexportaciones públicas
playground/       # app Vite solo para desarrollo (no se publica en npm)
dist/             # salida de Babel (lo que publica npm)
```

---

## Componentes exportados

### Atoms

`AnimationDevelopment`, `Alert`, `Badge`, `Button`, `Divider`, `GradientText`, `Input`, `Link`, `DynamicLink`, `Image`, `Line`, `Note`, `Tag`, `Text`, `Tooltip`

### Molecules

`CallToAction`, `Card`, `Code`, `Container`, `Divided`, `Grid`, `List`, `ProgressBar`, `Table` (+ `TableHeader`, `TableRow`, `TableCell`), `Title`

### Organisms

`Section`, `Structure` (+ `CurriculumAside`, `CurriculumFull`), `Message`, `Roadmap`

---

## Paleta y diseño (v1.1.x)

- **Primarios:** cyan (`#06B6D4`) y purple (`#A855F7`)
- Variantes en botones, enlaces, alertas y timeline (`Roadmap`)
- Pensado para fondos oscuros (`gray-900`)

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
