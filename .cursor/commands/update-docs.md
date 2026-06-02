# Actualizar documentación (ui-kit-fravelz)

Usar cuando el usuario pida actualizar **readme**, documentación del paquete o información en GitHub.

## Archivos principales

| Archivo | Contenido |
|---------|-----------|
| `readme.md` | Documentación pública (npm y GitHub) |
| `package.json` | `description`, `version`, `keywords`, `repository` |

## Reglas

- Mantener **versión** sincronizada entre `readme.md` (tabla inicial) y `package.json`.
- Documentar componentes nuevos en la sección **Componentes exportados** del readme y en `src/index.jsx`.
- No crear `docs/` salvo que el usuario lo pida; este repo es pequeño y el readme basta.
- Respuesta al usuario en **español**; mensajes de commit en **inglés** si aplica commit.

## Lista de componentes

La fuente de verdad de exports es `src/index.jsx`. Al añadir o quitar un export, actualizar el readme en el mismo cambio.
