import * as cp from 'node:child_process';
import * as path from 'node:path';

import { RebuildOptions } from '@electron/rebuild';
import {
  ForgeArch,
  ForgeListrTask,
  ForgePlatform,
} from '@electron-forge/shared-types';

export const listrCompatibleRebuildHook = async <Ctx = never>(
  buildPath: string,
  electronVersion: string,
  platform: ForgePlatform,
  arch: ForgeArch,
  config: Partial<RebuildOptions> = {},
  task: ForgeListrTask<Ctx>,
  taskTitlePrefix = '',
): Promise<void> => {
  task.title = `${taskTitlePrefix}Preparing native dependencies`;

  const options: RebuildOptions = {
    ...config,
    buildPath,
    electronVersion,
    arch,
  };

  const child = cp.fork(
    path.resolve(__dirname, 'remote-rebuild.js'),
    [JSON.stringify(options)],
    {
      stdio: ['pipe', 'pipe', 'pipe', 'ipc'],
    },
  );

  let pendingError: Error;
  let found = 0;
  let done = 0;

  const redraw = () => {
    task.title = `${taskTitlePrefix}Preparing native dependencies: ${done} / ${found}`;
  };

  child.stdout?.on('data', (chunk) => {
      throw new Error("STUB");
  });
  child.stderr?.on('data', (chunk) => {
      throw new Error("STUB");
  });

  child.on(
    'message',
    (message: { msg: string; err: { message: string; stack: string } }) => {
        throw new Error("STUB");
    },
  );

  await new Promise<void>((resolve, reject) => {
      throw new Error("STUB");
  });
};
