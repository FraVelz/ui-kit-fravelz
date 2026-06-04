/** Rutas del playground. */

export const SITE_HOME = "/";

export const DOCS_HOME = "/docs";

export function docsPath(componentId: string) {
  return `${DOCS_HOME}/${componentId}`;
}
