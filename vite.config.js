import _ from "lodash";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { jsonX } from 'vite-plugin-jsonx';

import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';
import dynamicImport from 'vite-plugin-dynamic-import'

import { viteStaticCopy } from 'vite-plugin-static-copy'
import { normalizePath } from 'vite'

import path from 'path'

import { dependencies } from './package.json';

function renderChunks(deps) {
  let chunks = {};
  Object.keys(deps).forEach((key) => {
    if (['react', 'react-router-dom', 'react-dom'].includes(key)) return;
    chunks[`vendors/${key.replace('/', '-')}`] = [key];
  });
  return chunks;
}

// Development mode
/** @type {import('vite').UserConfig} */
export default defineConfig({
  root: path.resolve(__dirname, 'app'),
  base: './',
  publicDir: '/public',
  cacheDir: path.resolve(__dirname, '.vite'),
  plugins: [
    react(),
    jsonX(),
    dynamicImport(),
    // dynamicImportVars(),
    viteStaticCopy({
      targets: [
        {
          src: normalizePath(path.resolve(__dirname, 'app', 'public')),
          dest: path.resolve(__dirname, 'dist'),
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@app/assets': path.join(__dirname, 'app', 'src', 'assets'),
      '@app/components': path.join(__dirname, 'app', 'src', 'components'),
      '@app/hocs': path.join(__dirname, 'app', 'src', 'hocs'),
      '@app/pages': path.join(__dirname, 'app', 'src', 'pages'),
      '@app/services': path.join(__dirname, 'app', 'src', 'services'),
      '@app/store': path.join(__dirname, 'app', 'src', 'store'),
    },
  },
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    copyPublicDir: true,
    assetsDir: './js/',
    emptyOutDir: false,
    sourcemap: false,

    rollupOptions: {
      output: {
        manualChunks: {
          vendors: ['react', 'react-router-dom', 'react-dom'],
          // ...renderChunks(dependencies),
        },
      },
    },
  }
})
