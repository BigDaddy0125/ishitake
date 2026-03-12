import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  server: {
    host: true,
    port: 5173
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        company: resolve(__dirname, 'company.html'),
        mainEn: resolve(__dirname, 'index-en.html'),
        companyEn: resolve(__dirname, 'company-en.html')
      }
    }
  }
});
