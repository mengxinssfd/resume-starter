import { defineConfig, UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { getLatestCommitTime } from './vite.config';

const strf = JSON.stringify;

/**
 * Vite configuration
 * https://vitejs.dev/config/
 */
export default defineConfig(async (): Promise<UserConfig> => {
  const lastModified = await getLatestCommitTime('2024-03-12 00:00:00');
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
        jsxRuntime: 'automatic',
      }),
    ],
    cacheDir: `./.cache`,
    // 环境变量配置
    define: {
      'import.meta.env.APP_LAST_MODIFIED': strf(lastModified),
    },
  };
});
