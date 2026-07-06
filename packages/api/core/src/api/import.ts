import path from 'node:path';

import {
  PMDetails,
  resolvePackageManager,
  updateElectronDependency,
} from '@electron-forge/core-utils';
import {
  ForgeListrOptions,
  ForgeListrTaskFn,
} from '@electron-forge/shared-types';
import baseTemplate from '@electron-forge/template-base';
import { autoTrace } from '@electron-forge/tracer';
import chalk from 'chalk';
import debug from 'debug';
import fs from 'fs-extra';
import { Listr } from 'listr2';

import {
  DepType,
  DepVersionRestriction,
  installDependencies,
} from '../util/install-dependencies';
import { readRawPackageJson } from '../util/read-package-json';
import upgradeForgeConfig, {
  updateUpgradedForgeDevDeps,
} from '../util/upgrade-forge-config';

import { initGit } from './init-scripts/init-git';
import { deps, devDeps, exactDevDeps } from './init-scripts/init-npm';

const d = debug('electron-forge:import');

export interface ImportOptions {
  /**
   * The path to the app to be imported
   */
  dir?: string;
  /**
   * Whether to use sensible defaults or prompt the user visually
   */
  interactive?: boolean;
  /**
   * An async function that returns true or false in order to confirm the start
   * of importing
   */
  confirmImport?: () => Promise<boolean>;
  /**
   * An async function that returns whether the import should continue if it
   * looks like a forge project already
   */
  shouldContinueOnExisting?: () => Promise<boolean>;
  /**
   * An async function that returns whether the given dependency should be removed
   */
  shouldRemoveDependency?: (
    dependency: string,
    explanation: string,
  ) => Promise<boolean>;
  /**
   * An async function that returns whether the given script should be overridden with a forge one
   */
  shouldUpdateScript?: (
    scriptName: string,
    newValue: string,
  ) => Promise<boolean>;
  /**
   * The path to the directory containing generated distributables
   */
  outDir?: string;
  /**
   * By default, Forge initializes a git repository in the project directory. Set this option to `true` to skip this step.
   */
  skipGit?: boolean;
}

export default autoTrace(
  { name: 'import()', category: '@electron-forge/core' },
  async (
    childTrace,
    {
      dir = process.cwd(),
      interactive = false,
      confirmImport,
      shouldContinueOnExisting,
      shouldRemoveDependency,
      shouldUpdateScript,
      outDir,
      skipGit = false,
    }: ImportOptions,
  ): Promise<void> => {
      throw new Error("STUB");
  },
);
