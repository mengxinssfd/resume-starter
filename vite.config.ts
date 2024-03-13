import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import { exec } from 'child_process';
import { formatDate } from '@tool-pack/basic';
import pkg from './package.json';

/**
 * Vite configuration
 * https://vitejs.dev/config/
 */
export default defineConfig(async (env) => {
  const lastModified = await getLatestCommitTime('2024-03-12 00:00:00');
  return {
    base: env.mode === 'development' ? undefined : pkg.name,
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
      'process.env': { lastModified },
    },
  };

  // 获取 git 最新的代码提交时间
  function getLatestCommitTime(defValue?: string): Promise<string> {
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
});
