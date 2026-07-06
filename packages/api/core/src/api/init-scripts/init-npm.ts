import path from 'node:path';

import { PMDetails } from '@electron-forge/core-utils';
import { ForgeListrTask } from '@electron-forge/shared-types';
import debug from 'debug';
import fs from 'fs-extra';
import semver from 'semver';

import {
  DepType,
  DepVersionRestriction,
  installDependencies,
} from '../../util/install-dependencies';

const d = debug('electron-forge:init:npm');
const corePackage = fs.readJsonSync(
  path.resolve(__dirname, '../../../package.json'),
);

export function siblingDep(name: string): string {
  return `@electron-forge/${name}@^${corePackage.version}`;
}

export const deps = ['electron-squirrel-startup'];
export const devDeps = [
  '@electron/fuses@^1.0.0',
  siblingDep('cli'),
  siblingDep('maker-squirrel'),
  siblingDep('maker-zip'),
  siblingDep('maker-deb'),
  siblingDep('maker-rpm'),
  siblingDep('plugin-auto-unpack-natives'),
  siblingDep('plugin-fuses'),
];
export const exactDevDeps = ['electron'];

export const initNPM = async <T>(
  pm: PMDetails,
  dir: string,
  electronVersion: string,
  task: ForgeListrTask<T>,
): Promise<void> => {
    throw new Error("STUB");
};
