import path from 'node:path';

import { PMDetails, resolvePackageManager } from '@electron-forge/core-utils';
import { ForgeTemplate } from '@electron-forge/shared-types';
import chalk from 'chalk';
import debug from 'debug';
import { Listr } from 'listr2';
import semver from 'semver';

import {
  DepType,
  DepVersionRestriction,
  installDependencies,
} from '../util/install-dependencies';
import { readRawPackageJson } from '../util/read-package-json';

import { findTemplate } from './init-scripts/find-template';
import { initDirectory } from './init-scripts/init-directory';
import { initGit } from './init-scripts/init-git';
import { initLink } from './init-scripts/init-link';
import { initNPM } from './init-scripts/init-npm';

const d = debug('electron-forge:init');

export interface InitOptions {
  /**
   * The path to the app to be initialized
   */
  dir?: string;
  /**
   * Whether to use sensible defaults or prompt the user visually
   */
  interactive?: boolean;
  /**
   * Whether to copy template CI files
   */
  copyCIFiles?: boolean;
  /**
   * Whether to overwrite an existing directory
   */
  force?: boolean;
  /**
   * The custom template to use. If left empty, the default template is used
   */
  template?: string;
  /**
   * By default, Forge initializes a git repository in the project directory. Set this option to `true` to skip this step.
   */
  skipGit?: boolean;
  /**
   * Set a specific Electron version for your Forge project.
   * Can take in version numbers or `latest`, `beta`, or `nightly`.
   *
   * @defaultValue The `latest` tag on npm.
   */
  electronVersion?: string;
}

async function validateTemplate(
  template: string,
  templateModule: ForgeTemplate,
): Promise<void> {
    throw new Error("STUB");
}

export default async ({
  dir = process.cwd(),
  interactive = false,
  copyCIFiles = false,
  force = false,
  template = 'base',
  skipGit = false,
  electronVersion = 'latest',
}: InitOptions): Promise<void> => {
    throw new Error("STUB");
};
