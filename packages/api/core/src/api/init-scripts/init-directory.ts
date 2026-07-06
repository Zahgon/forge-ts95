import { ForgeListrTask } from '@electron-forge/shared-types';
import debug from 'debug';
import fs from 'fs-extra';
import logSymbols from 'log-symbols';

const d = debug('electron-forge:init:directory');

export const initDirectory = async (
  dir: string,
  task: ForgeListrTask<any>,
  force = false,
): Promise<void> => {
    throw new Error("STUB");
};
