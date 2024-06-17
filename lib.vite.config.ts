import { defineConfig, UserConfig, Plugin } from 'vite';
import { resolve } from 'path';
import { getLatestCommitTime } from './vite.config';
import { visualizer } from 'rollup-plugin-visualizer';

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
        external: [
          'react',
          'react-dom',
          'markdown-it',
          'pdf-lib',
          '@tool-pack/basic',
          '@tool-pack/dom',
        ],
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
      // react({
      //   jsxRuntime: 'automatic',
      // }),
      {
        ...(visualizer({ filename: 'temp/analyze.html' }) as Plugin),
        apply(_, { mode }) {
          return mode === 'analyze';
        },
      },
    ],
    esbuild: {
      tsconfigRaw: { compilerOptions: { jsx: 'react' } },
    },
    cacheDir: `./.cache`,
    // 环境变量配置
    define: {
      'process.env.NODE_ENV': "'production'",
      'import.meta.env.APP_LAST_MODIFIED': strf(lastModified),
    },
  };
});
