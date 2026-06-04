import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const rootDir = path.dirname(fileURLToPath(import.meta.url));
const siteMeta = JSON.parse(
  fs.readFileSync(path.resolve(rootDir, "playground/site-meta.json"), "utf8"),
);

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;");
}

function siteMetaHtmlPlugin() {
  return {
    name: "html-site-meta",
    transformIndexHtml(html) {
      const siteUrl = process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : siteMeta.githubUrl;
      const title = escapeHtml(siteMeta.title);
      const description = escapeHtml(siteMeta.description);
      const keywords = escapeHtml(siteMeta.keywords);
      const author = escapeHtml(siteMeta.author);
      const name = escapeHtml(siteMeta.name);
      const ogImage = escapeHtml(siteMeta.ogImage);
      const url = escapeHtml(siteUrl);
      const themeColor = escapeHtml(siteMeta.themeColor);
      const twitterCard = escapeHtml(siteMeta.twitterCard);
      const logoPath = escapeHtml(siteMeta.logoPath);

      const block = `
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="keywords" content="${keywords}" />
    <meta name="author" content="${author}" />
    <meta name="theme-color" content="${themeColor}" />
    <link rel="canonical" href="${url}" />
    <link rel="icon" href="${logoPath}" type="image/png" />
    <link rel="apple-touch-icon" href="${logoPath}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="${name}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:image:alt" content="${name} — vista previa para redes sociales" />
    <meta property="og:locale" content="es_ES" />
    <meta property="og:locale:alternate" content="en_US" />
    <meta name="twitter:card" content="${twitterCard}" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${ogImage}" />
    <meta name="twitter:image:alt" content="${name} — vista previa para redes sociales" />`;

      return html.replace("<!-- SITE_META -->", block);
    },
  };
}

export default defineConfig({
  root: path.resolve(rootDir, "playground"),
  publicDir: path.resolve(rootDir, "assets"),
  plugins: [react(), tailwindcss(), siteMetaHtmlPlugin()],
  resolve: {
    alias: {
      "@kit": path.resolve(rootDir, "src"),
    },
  },
  server: {
    fs: {
      allow: [rootDir],
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
