import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: [
        "src/index.html",
        "L/**/index.html", // include all index.html files in subdir and its subdirectories
      ],
    },
  },
});
