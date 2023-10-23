import { resolve } from "path";
import { defineConfig } from "vite";
import htmlPurge from "vite-plugin-html-purge";

export default defineConfig({
  root: resolve(__dirname, "src/"),
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about/index.html"),
        contact: resolve(__dirname, "contact/index.html"),
      },
    },
  },
  plugins: [htmlPurge()]
});