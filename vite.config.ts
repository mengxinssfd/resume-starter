import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { resolve } from 'path';

/**
 * Vite configuration
 * https://vitejs.dev/config/
 */
export default defineConfig(() => {
  return {
    cacheDir: `./.cache`,
    plugins: [
      // https://github.com/vitejs/vite/tree/main/packages/plugin-react
      react(),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
      extensions: ['.ts', '.tsx'],
    },
    css: {
      // dev时生成sourcemap
      devSourcemap: true,
    },
  };
});
