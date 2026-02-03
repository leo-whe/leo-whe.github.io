import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 🔴 Change to relative path './'. 
  // This allows the app to work at ANY path (localhost:5173/ OR github.io/repo-name/)
  // without needing to manually change this string.
  base: './', 
  build: {
    outDir: 'dist',
  },
});