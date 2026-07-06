import { exec } from 'node:child_process';

import debug from 'debug';

const d = debug('electron-forge:init:git');

export const initGit = async (dir: string): Promise<void> => {
    throw new Error("STUB");
};
