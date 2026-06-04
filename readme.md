# @fravelz/ui-kit-fravelz

Biblioteca de componentes **React** personalizados (patrón atoms / molecules / organisms) para sitios de notas y proyectos públicos del portfolio de [Fravelz](https://github.com/FraVelz). Publicada en npm como [`@fravelz/ui-kit-fravelz`](https://www.npmjs.com/package/@fravelz/ui-kit-fravelz). Los estilos usan **Tailwind CSS** en el proyecto consumidor; requiere **React 18+** y **React DOM 18+**.

**Idiomas:** Español · [English](readme.en.md)

![Fravelz UI Kit — vista previa de marca](assets/brand/og-image.png)

## Atoms

| Componente             | Notas                                             |
| ---------------------- | ------------------------------------------------- |
| `Alert`                | Mensajes de estado con icono y cierre opcional    |
| `AnimationDevelopment` | Animación Lottie (peer opcional en el consumidor) |
| `Badge`                | Chip o etiqueta compacta                          |
| `Button`               | Botón con variantes y tamaños                     |
| `Divider`              | Separador horizontal o vertical                   |
| `DynamicLink`          | Enlace con estado visitado (React Router)         |
| `GradientText`         | Texto con degradado cyan–purple                   |
| `Image`                | Imagen con dimensiones configurables              |
| `Input`                | Campo de texto con label e icono                  |
| `Link`                 | Enlace con scroll suave a anclas                  |
| `Line`                 | Línea decorativa                                  |
| `Note`                 | Bloque de nota destacada                          |
| `Tag`                  | Etiqueta o pill removible                         |
| `Text`                 | Párrafo con variantes de color y tamaño           |
| `Tooltip`              | Información contextual al hover                   |

## Molecules

| Componente         | Notas                                   |
| ------------------ | --------------------------------------- |
| `CallToAction`     | Enlace destacado tipo CTA               |
| `Card`             | Contenedor con borde y hover opcional   |
| `Code`             | Bloque de código con resaltado y copiar |
| `Container`        | Ancho máximo y padding responsive       |
| `Divided`          | Layout en dos columnas                  |
| `Grid`             | Rejilla responsive                      |
| `List`             | Lista ordenada o desordenada            |
| `ProgressBar`      | Barra de progreso                       |
| `SegmentedControl` | Control segmentado (p. ej. idioma)      |
| `Table`            | Tabla de datos                          |
| `TableHeader`      | Cabecera de tabla                       |
| `TableRow`         | Fila de tabla                           |
| `TableCell`        | Celda de tabla                          |
| `Title`            | Título con variantes                    |

## Organisms

| Componente         | Notas                             |
| ------------------ | --------------------------------- |
| `CurriculumAside`  | Índice lateral sticky (layout)    |
| `CurriculumFull`   | Índice en viewport pequeño        |
| `Message`          | Modal con overlay                 |
| `Roadmap`          | Timeline de pasos                 |
| `Section`          | Sección de página con título      |
| `SiteFooter`       | Shell de pie de página            |
| `SiteFooterColumn` | Columna del pie                   |
| `SiteHeader`       | Shell de cabecera                 |
| `Structure`        | Layout con curriculum + contenido |

### Utilidades (SVG y `cn`)

| Export                                                                                                                      | Uso                                                    |
| --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| `cn`                                                                                                                        | Combinar clases Tailwind con `clsx` + `tailwind-merge` |
| `IconInfo`, `IconSuccess`, `IconWarning`, `IconError`, `IconClose`, `IconCheck`, `IconCopy`, `IconArrowRight`, `alertIcons` | Iconos inline para atoms y molecules                   |

## Ejemplo

```tsx
import { Button, Card, Section, Title } from "@fravelz/ui-kit-fravelz";

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

## Instalación

```bash
npm install @fravelz/ui-kit-fravelz
```

El paquete incluye tipos TypeScript (`dist/index.d.ts`).

---

## Desarrollo local

```bash
git clone https://github.com/FraVelz/ui-kit-fravelz.git
cd ui-kit-fravelz
pnpm install
pnpm run build
pnpm run dev
```

Documentación interactiva en el playground (`/es`, `/en`, `/es/docs/:id`). Para desplegar en Vercel: **Build** `pnpm run build:playground`, **Output** `playground/dist`. Ver `vercel.json`.

---

## Paleta

- **Acentos:** cyan (`#06B6D4`) y purple (`#A855F7`)
- **Temas:** estilos base claros y prefijo `dark:` (consumidor con `darkMode: 'class'`)

---

## Publicar en npm

> [!NOTE]
> para desarrollador.

```bash
pnpm run build
npm publish --access public
```

---

## Información del proyecto

|                 |                                                                                  |
| --------------- | -------------------------------------------------------------------------------- |
| **Versión**     | 1.2.2                                                                            |
| **Autor**       | [Fravelz](https://github.com/FraVelz)                                            |
| **Licencia**    | [Apache-2.0](LICENSE)                                                            |
| **Repositorio** | [github.com/FraVelz/ui-kit-fravelz](https://github.com/FraVelz/ui-kit-fravelz)   |
| **npm**         | [@fravelz/ui-kit-fravelz](https://www.npmjs.com/package/@fravelz/ui-kit-fravelz) |
| **Playground**  | [ui-kit-fravelz.vercel.app](https://ui-kit-fravelz.vercel.app/)                  |

> Al publicar una nueva versión, actualiza `version` aquí y en `package.json`, luego `npm publish`.
