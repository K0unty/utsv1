import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: [
        "/index.html",
        "L/S1/UTS1/adjusted-project/adjusted-project/index.html",
        "L/S1/UTS1/first-project/first-project/index.html",
      ],
    },
  },
});
