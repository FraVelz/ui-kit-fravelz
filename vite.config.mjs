import path from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: path.resolve(rootDir, "playground"),
  plugins: [react(), tailwindcss()],
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
