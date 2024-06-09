import { defineConfig } from "vite";
import glob from "glob";

export default defineConfig({
  build: {
    rollupOptions: {
      input: async () => {
        const files = await glob("src/L/**/*.index.html", {
          cwd: process.cwd(),
          absolute: true,
        });
        return files;
      },
    },
  },
});
