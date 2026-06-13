# Autocommit (Conventional Commits — ui-kit-fravelz)

Usar cuando el usuario pida **hacer commit** del trabajo actual en este paquete npm.

## Cuándo ejecutar

- El usuario invoca este comando o pide explícitamente **commit** / **autocommit**.
- **No** crear commits si el usuario no lo pidió.

## Antes de commitear

1. `git status` — archivos modificados.
2. `git diff` — cambios staged y unstaged.
3. `git log -10 --oneline` — estilo reciente.
4. **Respetar borrados:** si el diff elimina líneas o archivos, **no restaurarlos** ni "arreglar" el contenido antes del commit salvo petición explícita del usuario. Un borrado suele ser intencional.
5. Hooks activos: `git config core.hooksPath` debe ser `.githooks`. Si no, una vez por clon: `git config core.hooksPath .githooks`.

**No** incluir: `node_modules/`, `*.tgz`, secretos.

**Sí** incluir tras `pnpm run build` si cambió `src/`: actualizar `dist/` en el mismo commit (el paquete publica `dist`).

**Nunca** `Co-authored-by: Cursor`, `cursoragent@cursor.com`, ni coautoría del agente en el mensaje final.

## Tipos y scopes

| Tipo | Uso |
|------|-----|
| `feat` | Nuevo componente o export público |
| `fix` | Bug en componente o build |
| `docs` | `readme.md`, README en GitHub |
| `refactor` | Reorganizar sin cambiar API |
| `chore` | `.gitignore`, scripts, `.cursor/` |
| `build` | Babel, `package.json`, dependencias de build |

| Scope | Cuándo |
|-------|--------|
| `atoms` | `src/atoms/` |
| `molecules` | `src/molecules/` |
| `organisms` | `src/organisms/` |
| `dist` | Solo salida compilada |
| `npm` | `package.json`, publicación |
| `cursor` | `.cursor/` |

Mensajes en **inglés**, imperativo. Ejemplo:

```text
feat(atoms): add dismissible variant to Alert

Rebuild dist after src change.
```

## Crear el commit

```bash
git commit -m "$(cat <<'EOF'
feat(molecules): improve Card hover styles

EOF
)"
```

Si un hook rechaza el commit: corregir y **nuevo** commit; no `--no-verify` salvo petición explícita.

## Después del commit

1. `git log -1 --format=%B` — el cuerpo **no** debe contener `Co-authored-by:` ni `cursoragent@cursor.com`.
2. Si el IDE añadió el trailer igualmente (commit ya hecho, **sin push**): guardar solo el mensaje deseado en un archivo y `git commit --amend -F /ruta/msg.txt`; volver a comprobar con `git log -1 --format=%B`.
3. Los hooks en `.githooks/` eliminan esas líneas automáticamente en commits normales (`prepare-commit-msg` y `commit-msg`).
