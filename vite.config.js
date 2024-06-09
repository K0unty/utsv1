import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "/index.html",
        "custom-dir": "/src/custom-dir/index.html", // Add this line
      },
    },
  },
});
