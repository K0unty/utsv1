import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: [
        "/index.html",
        "L/S1/UTS1/adjusted-project/adjusted-project/**/*",
        "L/S1/UTS1/first-project/first-project/**/*",
      ],
    },
  },
});
