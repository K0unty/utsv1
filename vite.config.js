import { defineConfig } from "vite";
import glob from "glob";
import path from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "/index.html",
        ...Object.fromEntries(
          glob
            .sync(path.resolve(__dirname, "src/L/**/index.html"))
            .map((filePath) => [
              filePath.replace(/^.*[\\\/]/, "").replace(/index.html$/, ""),
              filePath,
            ])
        ),
      },
    },
  },
});
