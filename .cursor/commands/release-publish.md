# Publicar versión en npm (tag + GitHub Actions)

Usar cuando el usuario invoque **`/release-publish`** o pida **publicar en npm**, **subir tag** y **disparar el workflow Publish**.

Publicación vía **OIDC** (Trusted Publisher en npm): workflow `.github/workflows/publish.yml`, environment `production`, archivo `publish.yml`. El push del tag `v*` dispara el publish en GitHub.

## Requisitos previos (comprobar una vez)

- Trusted Publisher en npm: repo **`FraVelz/ui-kit-fravelz`**, workflow **`publish.yml`**, environment **`production`** (mayúsculas exactas en GitHub).
- `git config core.hooksPath` → `.githooks`
- Rama **`main`** actualizada en remoto.
- **No** usar `Co-authored-by: Cursor` ni trailers del agente en commits.

## Flujo obligatorio (en orden)

### 1. Estado del repo

```bash
git status
git diff
git log -3 --oneline
```

- Si hay cambios sin commitear: primero commitear (p. ej. `/auto-commit`) o incluir en el commit de release.
- Si `src/` cambió: `pnpm run build` y commitear `dist/` en el mismo commit de versión.

### 2. Calcular la siguiente versión

```bash
node scripts/next-release-version.mjs
```

Guardar el resultado como `VERSION` (solo `X.Y.Z`, sin `v`).

Reglas del script:

- Toma el máximo entre `package.json`, tags `v*.*.*` y versiones publicadas en npm.
- Si `package.json` ya es mayor, usa esa versión.
- Si el tag o npm ya existen para esa versión, sube **patch** hasta una versión libre.

### 3. Actualizar versión en el proyecto

Sincronizar **`VERSION`** en:

- `package.json` → `"version"`
- `readme.md` → tabla **Información del proyecto** → **Versión**
- `readme.en.md` → tabla **Project information** → **Version**

### 4. Validar (mismo gate que CI / Publish)

```bash
pnpm run validate
pnpm run build:playground
```

Si falla: corregir antes de seguir (no publicar con CI roto).

### 5. Commit de release

```bash
git add package.json readme.md readme.en.md dist/
# incluir otros archivos del release si aplica
git commit -m "$(cat <<EOF
chore(release): bump version to VERSION

EOF
)"
git log -1 --format=%B
```

Confirmar que el mensaje **no** contiene `Co-authored-by: Cursor`.

### 6. Push de `main`

```bash
git push origin main
```

### 7. Tag y push (dispara Publish en GitHub)

```bash
git tag "vVERSION"
git push origin "vVERSION"
```

### 8. Comprobar publicación

```bash
gh run list --workflow=publish.yml --limit 3
gh run watch --workflow=publish.yml
```

Cuando termine en verde:

```bash
npm view @fravelz/ui-kit-fravelz version
```

Debe coincidir con `VERSION`.

## Si el workflow Publish falla

| Causa habitual | Qué hacer |
| -------------- | --------- |
| Tag en commit sin `publish.yml` | Tag de nuevo en el commit actual de `main` |
| Trusted Publisher mal configurado | Corregir repo `FraVelz/ui-kit-fravelz` en npm |
| CI / Node incompatible | Workflows deben usar **Node 22+** con pnpm 11.1.1 |
| Versión ya en npm | Subir patch con el script y repetir desde el paso 3 |

Re-etiquetar (solo si el tag aún no se publicó en npm):

```bash
git tag -d vVERSION
git push origin :refs/tags/vVERSION
# corregir, luego de nuevo tag + push
```

Alternativa manual sin tag: **Actions → Publish → Run workflow** en `main` (environment `production`), con `package.json` ya en la versión deseada.

## No hacer

- `npm publish` local salvo que el usuario lo pida explícitamente (el flujo oficial es GitHub Actions + OIDC).
- `git push --force` a `main` ni borrar tags ya consumidos por npm sin confirmar con el usuario.
- Publicar si `validate` falla.
