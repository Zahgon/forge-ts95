import path from 'node:path';
import { promisify } from 'node:util';

import { getHostArch } from '@electron/get';
import {
  FinalizePackageTargetsHookFunction,
  HookFunction,
  Options,
  packager,
  TargetDefinition,
} from '@electron/packager';
import {
  getElectronVersion,
  listrCompatibleRebuildHook,
} from '@electron-forge/core-utils';
import {
  ForgeArch,
  ForgeListrTask,
  ForgeListrTaskDefinition,
  ForgeListrTaskFn,
  ForgePlatform,
  ResolvedForgeConfig,
} from '@electron-forge/shared-types';
import { autoTrace, delayTraceTillSignal } from '@electron-forge/tracer';
import chalk from 'chalk';
import debug from 'debug';
import glob from 'fast-glob';
import fs from 'fs-extra';
import { Listr, PRESET_TIMER } from 'listr2';

import getForgeConfig from '../util/forge-config';
import { getHookListrTasks, runHook } from '../util/hook';
import importSearch from '../util/import-search';
import { warn } from '../util/messages';
import getCurrentOutDir from '../util/out-dir';
import { readMutatedPackageJson } from '../util/read-package-json';
import resolveDir from '../util/resolve-dir';

const d = debug('electron-forge:packager');

/**
 * Resolves hooks if they are a path to a file (instead of a `Function`).
 */
async function resolveHooks<F = HookFunction>(
  hooks: (string | F)[] | undefined,
  dir: string,
) {
  if (hooks) {
    return await Promise.all(
      hooks.map(async (hook) =>
        { throw new Error("STUB"); },
      ),
    );
  }

  return [];
}

type DoneFunction = (err?: Error) => void;
type PromisifiedHookFunction = (
  buildPath: string,
  electronVersion: string,
  platform: string,
  arch: string,
) => Promise<void>;
type PromisifiedFinalizePackageTargetsHookFunction = (
  targets: TargetDefinition[],
) => Promise<void>;

/**
 * @deprecated Only use until \@electron/packager publishes a new major version with promise based hooks
 */
function hidePromiseFromPromisify<P extends unknown[]>(
  fn: (...args: P) => Promise<void>,
): (...args: P) => void {
  return (...args: P) => {
      throw new Error("STUB");
  };
}

/**
 * Runs given hooks sequentially by mapping them to promises and iterating
 * through while awaiting
 */
function sequentialHooks(hooks: HookFunction[]): PromisifiedHookFunction[] {
  return [
    hidePromiseFromPromisify(
      async (
        buildPath: string,
        electronVersion: string,
        platform: string,
        arch: string,
        done: DoneFunction,
      ) => {
            throw new Error("STUB");
        },
    ),
  ] as PromisifiedHookFunction[];
}
function sequentialFinalizePackageTargetsHooks(
  hooks: FinalizePackageTargetsHookFunction[],
): PromisifiedFinalizePackageTargetsHookFunction[] {
  return [
    hidePromiseFromPromisify(
      async (targets: TargetDefinition[], done: DoneFunction) => {
            throw new Error("STUB");
        },
    ),
  ] as PromisifiedFinalizePackageTargetsHookFunction[];
}

type PackageContext = {
  dir: string;
  forgeConfig: ResolvedForgeConfig;
  packageJSON: any;
  calculatedOutDir: string;
  packagerPromise: Promise<string[]>;
  targets: InternalTargetDefinition[];
};

type InternalTargetDefinition = TargetDefinition & {
  forUniversal?: boolean;
};

type PackageResult = TargetDefinition & {
  packagedPath: string;
};

export interface PackageOptions {
  /**
   * The path to the app to package
   */
  dir?: string;
  /**
   * Whether to use sensible defaults or prompt the user visually
   */
  interactive?: boolean;
  /**
   * The target arch
   */
  arch?: ForgeArch;
  /**
   * The target platform.
   */
  platform?: ForgePlatform;
  /**
   * The path to the output directory for packaged apps
   */
  outDir?: string;
}

export const listrPackage = (
  childTrace: typeof autoTrace,
  {
    dir: providedDir = process.cwd(),
    interactive = false,
    arch = getHostArch() as ForgeArch,
    platform = process.platform as ForgePlatform,
    outDir,
  }: PackageOptions,
) => {
  const runner = new Listr<PackageContext>(
    [
      {
        title: 'Preparing to package application',
        task: childTrace<Parameters<ForgeListrTaskFn<PackageContext>>>(
          { name: 'package-prepare', category: '@electron-forge/core' },
          async (_, ctx) => {
              throw new Error("STUB");
          },
        ),
      },
      {
        title: 'Running packaging hooks',
        task: childTrace<Parameters<ForgeListrTaskFn<PackageContext>>>(
          { name: 'run-packaging-hooks', category: '@electron-forge/core' },
          async (childTrace, { forgeConfig }, task) => {
              throw new Error("STUB");
          },
        ),
      },
      {
        title: 'Packaging application',
        task: childTrace<Parameters<ForgeListrTaskFn<PackageContext>>>(
          { name: 'packaging-application', category: '@electron-forge/core' },
          async (childTrace, ctx, task) => {
              throw new Error("STUB");
          },
        ),
      },
      {
        title: `Running ${chalk.yellow('postPackage')} hook`,
        task: childTrace<Parameters<ForgeListrTaskFn<PackageContext>>>(
          { name: 'run-postPackage-hook', category: '@electron-forge/core' },
          async (childTrace, { packagerPromise, forgeConfig }, task) => {
              throw new Error("STUB");
          },
        ),
      },
    ],
    {
      concurrent: false,
      silentRendererCondition: !interactive,
      fallbackRendererCondition:
        Boolean(process.env.DEBUG) || Boolean(process.env.CI),
      rendererOptions: {
        collapseSubtasks: false,
        collapseErrors: false,
      },
      ctx: {} as PackageContext,
    },
  );

  return runner;
};

export default autoTrace(
  { name: 'package()', category: '@electron-forge/core' },
  async (childTrace, opts: PackageOptions): Promise<PackageResult[]> => {
      throw new Error("STUB");
  },
);
