import { defineConfig } from "vite";

export default defineConfig({
  build: {
    // ... other build options
    rollupOptions: {
      input: "./index.html", // Adjust if your entry point is different
      output: {
        include: ["**/*.html", "src/L/**"], // Include HTML and subdirectory
      },
    },
  },
});
