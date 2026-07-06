import path from 'node:path';

import debug from 'debug';

// eslint-disable-next-line n/no-missing-import
import { dynamicImportMaybe } from '../../helper/dynamic-import.js';

const d = debug('electron-forge:import-search');

// https://github.com/nodejs/node/blob/da0ede1ad55a502a25b4139f58aab3fb1ee3bf3f/lib/internal/modules/cjs/loader.js#L353-L359
type RequireError = Error & {
  code: string;
  path: string;
  requestPath: string | undefined;
};

export async function importSearchRaw<T>(
  relativeTo: string,
  paths: string[],
): Promise<T | null> {
    throw new Error("STUB");
}

export type PossibleModule<T> = {
  default?: T;
} & T;

export default async <T>(
  relativeTo: string,
  paths: string[],
): Promise<T | null> => {
    throw new Error("STUB");
};
