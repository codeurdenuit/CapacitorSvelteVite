import { defineConfig } from 'vite';
import {svelte} from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';

export default defineConfig({
  root: './src',
  build: {
    outDir: '../dist',
    minify: false,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {},
        entryFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
  },
  plugins: [
    svelte({preprocess: sveltePreprocess()}),
  ],
  server: {
    hmr: {
      host: 'localhost',
    },
  },
});
