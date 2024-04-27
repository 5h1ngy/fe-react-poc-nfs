import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { jsonX } from 'vite-plugin-jsonx';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    jsonX()
  ],
})
