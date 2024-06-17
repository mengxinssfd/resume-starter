import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import { exec } from 'child_process';
import { formatDate } from '@tool-pack/basic';
import pkg from './package.json';
import data from './src/data';

const strf = JSON.stringify;

/**
 * Vite configuration
 * https://vitejs.dev/config/
 */
export default defineConfig(async (env) => {
  const lastModified = await getLatestCommitTime('2024-03-12 00:00:00');
  const isDev = env.mode === 'development';
  return {
    base: isDev ? undefined : '/mengxinssfd/resume-starter',
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
    // 环境变量配置
    define: {
      'import.meta.env.APP_LAST_MODIFIED': strf(lastModified),
      'import.meta.env.APP_AUTHOR': strf(pkg.author),
      'import.meta.env.APP_TITLE': strf(
        `${data.info.name} - ${data.info.job}简历`,
      ),
      'import.meta.env.APP_ENTRY': strf(
        isDev ? 'src/index.dev.tsx' : 'src/index.tsx',
      ),
    },
  };
});

// 获取 git 最新的代码提交时间
export function getLatestCommitTime(defValue?: string): Promise<string> {
  return new Promise((resolve, reject): void => {
    exec('git log -1 --format=%cd', (error, stdout, stderr) => {
      if ((error || stderr) && defValue) {
        resolve(defValue);
        return;
      }
      if (error) {
        reject(error);
        return;
      }
      if (stderr) {
        reject(new Error(stderr));
        return;
      }
      const commitTime = new Date(stdout.trim());
      const offset = commitTime.getTimezoneOffset() / 60 + 8;
      commitTime.setHours(commitTime.getHours() + offset);
      resolve(formatDate(commitTime));
    });
  });
}
