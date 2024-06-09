mport { defineConfig, glob } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: async () => {
        const files = await glob('src/L/**/*.index.html', {
          cwd: process.cwd(),
          absolute: true,
        });
        return files;
      },
    },
  },
});