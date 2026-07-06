import path from 'node:path';

import { getHostArch } from '@electron/get';
import { getElectronVersion } from '@electron-forge/core-utils';
import { MakerBase } from '@electron-forge/maker-base';
import {
  ForgeArch,
  ForgeConfigMaker,
  ForgeListrOptions,
  ForgeListrTaskFn,
  ForgeMakeResult,
  ForgePlatform,
  IForgeResolvableMaker,
  ResolvedForgeConfig,
} from '@electron-forge/shared-types';
import { autoTrace, delayTraceTillSignal } from '@electron-forge/tracer';
import chalk from 'chalk';
import filenamify from 'filenamify';
import fs from 'fs-extra';
import { Listr, PRESET_TIMER } from 'listr2';
import logSymbols from 'log-symbols';

import getForgeConfig from '../util/forge-config';
import { getHookListrTasks, runMutatingHook } from '../util/hook';
import importSearch from '../util/import-search';
import getCurrentOutDir from '../util/out-dir';
import parseArchs from '../util/parse-archs';
import { readMutatedPackageJson } from '../util/read-package-json';
import resolveDir from '../util/resolve-dir';

import { listrPackage } from './package';

type MakerImpl = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  new (...args: any[]): MakerBase<any>;
};

type MakeTargets = ForgeConfigMaker[] | string[];

function generateTargets(
  forgeConfig: ResolvedForgeConfig,
  overrideTargets?: MakeTargets,
) {
  if (overrideTargets) {
    return overrideTargets.map((target) => {
        throw new Error("STUB");
    });
  }
  return forgeConfig.makers;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isElectronForgeMaker(
  target: MakerBase<any> | unknown,
): target is MakerBase<any> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (target as MakerBase<any>).__isElectronForgeMaker;
}

type MakeContext = {
  dir: string;
  forgeConfig: ResolvedForgeConfig;
  actualOutDir: string;
  makers: Array<() => MakerBase<unknown>>;
  outputs: ForgeMakeResult[];
};

export interface MakeOptions {
  /**
   * The path to the app from which distrubutables are generated
   */
  dir?: string;
  /**
   * Whether to use sensible defaults or prompt the user visually
   */
  interactive?: boolean;
  /**
   * Whether to skip the pre-make packaging step
   */
  skipPackage?: boolean;
  /**
   * An array of make targets to override your forge config
   */
  overrideTargets?: MakeTargets;
  /**
   * The target architecture
   */
  arch?: ForgeArch;
  /**
   * The target platform
   */
  platform?: ForgePlatform;
  /**
   * The path to the directory containing generated distributables
   */
  outDir?: string;
}

export const listrMake = (
  childTrace: typeof autoTrace,
  {
    dir: providedDir = process.cwd(),
    interactive = false,
    skipPackage = false,
    arch = getHostArch() as ForgeArch,
    platform = process.platform as ForgePlatform,
    overrideTargets,
    outDir,
  }: MakeOptions,
  receiveMakeResults?: (results: ForgeMakeResult[]) => void,
) => {
    throw new Error("STUB");
};

export default autoTrace(
  { name: 'make()', category: '@electron-forge/core' },
  async (childTrace, opts: MakeOptions): Promise<ForgeMakeResult[]> => {
      throw new Error("STUB");
  },
);
