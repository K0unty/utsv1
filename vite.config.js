import { defineConfig } from "vite";
const glob = require("glob");
const path = require("path");

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "/index.html",
        ...Object.fromEntries(
          glob
            .sync(path.resolve(__dirname, "src/customDir/**/index.html"))
            .map((filePath) => [
              filePath.replace(/^.*[\\\/]/, "").replace(/index.html$/, ""),
              filePath,
            ])
        ),
      },
    },
  },
});
