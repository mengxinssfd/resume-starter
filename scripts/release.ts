import { type Options, execa } from 'execa';
import { ReleaseType } from 'semver';
import { prompt } from 'enquirer';
import * as semver from 'semver';
import * as path from 'path';
import chalk from 'chalk';
import * as fs from 'fs';

import rootPkgJson from '../package.json';
const args = require('minimist')(process.argv.slice(2));
const rootDir = path.resolve(__dirname, '..');

const npmTool = 'pnpm';
// const bin = (name: string) =>
//   path.resolve(__dirname, '../node_modules/.bin/' + name);
const step = (msg: string) => console.log(chalk.cyan(msg));

/**
 * @param {string} bin
 * @param {string[]} args
 * @param {{}} opts
 */
const exec = (
  bin: string,
  args: string[],
  opts: Options = {
    /*execPath: path.resolve(__dirname, '../')*/
  },
) => execa(bin, args, { stdio: 'inherit', ...opts });

const actions = {
  async release(config: Config) {
    async function publishPkg(pkgPath: string) {
      const json = JSON.parse(
        fs.readFileSync(path.resolve(pkgPath, 'package.json'), 'utf-8'),
      );
      if (json.private) return;

      step(`Publishing ${json.name}...`);
      try {
        await exec('npm', ['publish', '--access=public'], {
          stdio: 'pipe',
          cwd: pkgPath,
        });
        console.log(
          chalk.green(
            `Successfully published ${json.name}@${config.targetVersion}`,
          ),
        );
      } catch (e: any) {
        if (e.stderr.match(/previously published/)) {
          console.log(chalk.red(`Skipping already published: ${json.name}`));
        } else {
          throw e;
        }
      }
    }
    await publishPkg(rootDir);
  },
  async gitCommit(targetVersion: string) {
    const { stdout } = await exec('git', ['diff'], { stdio: 'pipe' });
    if (stdout) {
      step('\nCommitting changes...');
      await exec('git', ['add', '-A']);
      await exec('git', ['commit', '-m', `release: v${targetVersion}`]);
    } else {
      console.log('No changes to commit.');
    }
  },
  build: () => {
    return exec(npmTool, ['build:lib'], { execPath: rootDir });
  },
  async gitPush(targetVersion: string) {
    // push to GitHub
    await exec('git', ['tag', `v${targetVersion}`]);
    await exec('git', ['push', 'origin', `refs/tags/v${targetVersion}`]);
    await exec('git', ['push']);
  },
  genChangeLog: () => exec(npmTool, ['changelog']),
  lintCheck: () => exec(npmTool, ['check:all']),
  updatePkg: (config: Config) => {
    rootPkgJson.version = config.targetVersion;
    fs.writeFileSync(
      path.resolve(rootDir, 'package.json'),
      JSON.stringify(rootPkgJson, null, 2),
    );
  },
};

interface Config {
  skippedPackages: string[];
  currentVersion: string;
  targetVersion: string;
  skipBuild: boolean;
  skipTest: boolean;
  preId: string;
  tag: string;
}
const baseConfig: Config = {
  // semver.prerelease('1.2.3-alpha.3') -> [ 'alpha', 3 ]
  preId: args.preid || semver.prerelease(rootPkgJson.version)?.[0],
  currentVersion: rootPkgJson.version,
  skipBuild: args.skipBuild,
  targetVersion: args._[0],
  skipTest: args.skipTest,
  skippedPackages: [],
  tag: args.tag,
};

const inc = (i: ReleaseType) =>
  semver.inc(baseConfig.currentVersion, i, baseConfig.preId);

async function getVersion(preId: string, currentVersion: string) {
  let targetVersion;
  const versionIncrements: ReleaseType[] = [
    'patch',
    'minor',
    'major',
    ...(preId
      ? (['prepatch', 'preminor', 'premajor', 'prerelease'] as const)
      : []),
  ];
  const { release } = await prompt<{ release: string }>([
    {
      choices: versionIncrements
        .map<{ message: string; name: string; hint: string }>((i) => {
          const version = inc(i) as string;
          return {
            hint: 'v' + version,
            name: version,
            message: i,
          };
        })
        .concat([{ message: `custom`, name: 'custom', hint: '' }]),
      message: `选择发布版本(当前v${rootPkgJson.version})`,
      name: 'release',
      type: 'select',
    },
  ]);
  if (release === 'custom') {
    ({ version: targetVersion } = await prompt<{ version: string }>({
      validate(value) {
        // 校验版本号
        if (!semver.valid(value)) return `invalid version: ${value}`;
        if (semver.gte(rootPkgJson.version, value))
          return '新版本号必须大于旧版本号';

        return true;
      },
      message: `Input custom version, cur(v${rootPkgJson.version}):`,
      initial: currentVersion,
      name: 'version',
      type: 'input',
    }));
  } else {
    targetVersion = release;
  }

  const { yes } = await prompt<{ yes: boolean }>({
    message: `Releasing v${targetVersion}. Confirm?`,
    type: 'confirm',
    name: 'yes',
  });

  if (!yes) {
    throw new Error(`select NO`);
  }
  return targetVersion;
}

async function getConfig() {
  const config = {
    ...baseConfig,
  };

  config.targetVersion ||= await getVersion(
    config.preId,
    config.currentVersion,
  );

  return config;
}

async function setup() {
  console.log('start');

  const config = await getConfig();

  step('\nRunning tests...');
  if (!config.skipTest) {
    await actions.lintCheck();
  } else {
    console.log(`(skipped)`);
  }

  step('\nRunning build...');
  if (!config.skipBuild) {
    await actions.build();
  } else {
    console.log(`(skipped)`);
  }

  // update package.json
  step('\nUpdate package.json...');
  actions.updatePkg(config);

  // generate changelog
  step('\nGenerating changelog...');
  await actions.genChangeLog();

  step('\ngit commit...');
  await actions.gitCommit(config.targetVersion);

  // publish packages
  step('\nPublishing packages...');
  await actions.release(config);
  console.log(config);

  return config;
}

setup().then(
  async (config) => {
    // push to GitHub
    step('\nPushing to GitHub...');
    await actions.gitPush(config.targetVersion);
    console.log('end');
  },
  (e) => {
    console.log('error', e);
  },
);
