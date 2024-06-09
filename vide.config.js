// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        L1: resolve(
          __dirname,
          "L/S1/UTS1/first-project/first-project/index.html"
        ),
        L2: resolve(
          __dirname,
          "L/S1/UTS1/adjusted-project/adjusted-project/index.html"
        ),
      },
    },
  },
});
