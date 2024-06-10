import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        subpage1: path.resolve(__dirname, "src/L/S2/index.html"),
        // Add more entries as needed
      },
    },
  },
});
