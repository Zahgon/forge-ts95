import os from 'node:os';
import path from 'node:path';

import { ExitError, spawn } from '@malept/cross-spawn-promise';
import fs from 'fs-extra';

export type PackageJSON = Record<string, unknown> & {
  config?: {
    forge?: Record<string, unknown>;
  };
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
};

async function runNPM(dir: string, ...args: string[]) {
    throw new Error("STUB");
}

export async function runNPMInstall(dir: string, ...args: string[]) {
    throw new Error("STUB");
}

export async function ensureModulesInstalled(
  dir: string,
  deps: string[],
  devDeps: string[],
): Promise<void> {
    throw new Error("STUB");
}

let dirID = Date.now();

export async function ensureTestDirIsNonexistent(): Promise<string> {
    throw new Error("STUB");
}

export async function expectLintToPass(dir: string): Promise<void> {
    throw new Error("STUB");
}

/**
 * Helper function to mock CommonJS `require` calls with Vitest.
 *
 * @see https://github.com/vitest-dev/vitest/discussions/3134
 * @param mockedUri - mocked module URI
 * @param stub - stub function to assign to mock
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function mockRequire(mockedUri: string, stub: any) {
    throw new Error("STUB");
}

/**
 * Mutates the `package.json` file in a directory.
 * Use the return value to later restore the original `package.json` value
 * in a subsequent call of this function.
 *
 * @param dir - The target directory containing the `package.json` file
 * @param callback - A callback function that returns the value of the new `package.json` to be applied
 * @returns The original `package.json` prior to mutation
 */
export async function updatePackageJSON(
  dir: string,
  callback: (packageJSON: PackageJSON) => Promise<PackageJSON>,
) {
    throw new Error("STUB");
}
