# Autocommit (Conventional Commits — ui-kit-fravelz)

Usar cuando el usuario pida **hacer commit** del trabajo actual en este paquete npm.

## Cuándo ejecutar

- El usuario invoca este comando o pide explícitamente **commit** / **autocommit**.
- **No** crear commits si el usuario no lo pidió.

## Antes de commitear

1. `git status` — archivos modificados.
2. `git diff` — cambios staged y unstaged.
3. `git log -10 --oneline` — estilo reciente.

**No** incluir: `node_modules/`, `*.tgz`, secretos.

**Sí** incluir tras `npm run build` si cambió `src/`: actualizar `dist/` en el mismo commit (el paquete publica `dist`).

**Nunca** `Co-authored-by: Cursor` ni coautoría del agente.

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
