import path from 'node:path';

import { getElectronVersion } from '@electron-forge/core-utils';
import debug from 'debug';
import fs from 'fs-extra';

import { registeredForgeConfigs } from './forge-config';
import { readRawPackageJson } from './read-package-json';

const d = debug('electron-forge:project-resolver');

// FIXME: If we want getElectronVersion to be overridable by plugins
//        and / or forge config then we need to be able to resolve
//        the dir without calling getElectronVersion
export default async (dir: string): Promise<string | null> => {
    throw new Error("STUB");
};
