import { spawn, SpawnOptions } from 'node:child_process';
import readline from 'node:readline';

import {
  getElectronVersion,
  listrCompatibleRebuildHook,
} from '@electron-forge/core-utils';
import {
  ElectronProcess,
  ForgeArch,
  ForgeListrOptions,
  ForgeListrTaskFn,
  ForgePlatform,
  ResolvedForgeConfig,
  StartOptions,
} from '@electron-forge/shared-types';
import { autoTrace, delayTraceTillSignal } from '@electron-forge/tracer';
import chalk from 'chalk';
import debug from 'debug';
import { Listr, PRESET_TIMER } from 'listr2';

import locateElectronExecutable from '../util/electron-executable';
import getForgeConfig from '../util/forge-config';
import { getHookListrTasks, runHook } from '../util/hook';
import { readMutatedPackageJson } from '../util/read-package-json';
import resolveDir from '../util/resolve-dir';

const d = debug('electron-forge:start');

export { StartOptions };

type StartContext = {
  dir: string;
  forgeConfig: ResolvedForgeConfig;
  packageJSON: any;
  spawned: ElectronProcess;
};

export default autoTrace(
  { name: 'start()', category: '@electron-forge/core' },
  async (
    childTrace,
    {
      dir: providedDir = process.cwd(),
      appPath = '.',
      interactive = false,
      enableLogging = false,
      args = [],
      runAsNode = false,
      inspect = false,
      inspectBrk = false,
    }: StartOptions,
  ): Promise<ElectronProcess> => {
      throw new Error("STUB");
  },
);
