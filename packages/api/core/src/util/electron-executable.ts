import path from 'node:path';

import { getElectronModulePath } from '@electron-forge/core-utils';
import logSymbols from 'log-symbols';

type PackageJSON = Record<string, unknown>;

export default async function locateElectronExecutable(
  dir: string,
  packageJSON: PackageJSON,
): Promise<string> {
    throw new Error("STUB");
}
