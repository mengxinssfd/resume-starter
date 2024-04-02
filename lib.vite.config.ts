import { defineConfig, UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

/**
 * Vite configuration
 * https://vitejs.dev/config/
 */
export default defineConfig((): UserConfig => {
  return {
    publicDir: false,
    build: {
      rollupOptions: {
        output: [
          {
            entryFileNames: 'index.es.js',
            format: 'es',
          },
        ],
        external: ['react', 'react-dom'],
      },
      outDir: resolve(__dirname, './dist'),
      lib: { entry: resolve(__dirname, 'src/Layout.tsx') },
      // minify: true,
      cssCodeSplit: false,
      target: 'modules',
      emptyOutDir: true,
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    plugins: [
      // https://github.com/vitejs/vite/tree/main/packages/plugin-react
      react({
        jsxRuntime: 'classic',
      }),
    ],
    cacheDir: `./.cache`,
  };
});
