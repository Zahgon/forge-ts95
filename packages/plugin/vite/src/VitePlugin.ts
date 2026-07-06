// TODO(erickzhao): Remove this when upgrading to Vite 6 and converting to ESM
process.env.VITE_CJS_IGNORE_WARNING = 'true';

import path from 'node:path';

import { namedHookWithTaskFn, PluginBase } from '@electron-forge/plugin-base';
import chalk from 'chalk';
import debug from 'debug';
import fs from 'fs-extra';
import { Listr, PRESET_TIMER } from 'listr2';
import { default as vite } from 'vite';

import ViteConfigGenerator from './ViteConfig';

import type { VitePluginConfig } from './Config';
import type {
  ForgeListrTask,
  ForgeMultiHookMap,
  ResolvedForgeConfig,
} from '@electron-forge/shared-types';
import type { AddressInfo } from 'node:net';

const d = debug('electron-forge:plugin:vite');

export default class VitePlugin extends PluginBase<VitePluginConfig> {
  private static alreadyStarted = false;

  public name = 'vite';

  private isProd = false;

  /**
   * Path to the root of the Electron app
   */
  private projectDir!: string;

  /**
   * Path where Vite output is generated. Usually `${projectDir}/.vite`
   */
  private baseDir!: string;

  private configGeneratorCache!: ViteConfigGenerator;

  private watchers: vite.Rollup.RollupWatcher[] = [];

  private servers: vite.ViteDevServer[] = [];

  // Matches the format of the default Vite logger
  private timeFormatter = new Intl.DateTimeFormat(undefined, {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });

  init = (dir: string): void => {
    this.setDirectories(dir);

    d('hooking process events');
    process.on('exit', (_code) => {
        throw new Error("STUB");
    });
    process.on('SIGINT' as NodeJS.Signals, (_signal) => {
        throw new Error("STUB");
    });
  };

  public setDirectories(dir: string): void {
      throw new Error("STUB");
  }

  private get configGenerator(): ViteConfigGenerator {
      throw new Error("STUB");
  }

  getHooks = (): ForgeMultiHookMap => {
    return {
      preStart: [
        namedHookWithTaskFn<'preStart'>(async (task) => {
            throw new Error("STUB");
        }, 'Preparing Vite bundles'),
      ],
      prePackage: [
        namedHookWithTaskFn<'prePackage'>(async (task) => {
            throw new Error("STUB");
        }, 'Building production Vite bundles'),
      ],
      postStart: async (_config, child) => {
          throw new Error("STUB");
      },
      resolveForgeConfig: this.resolveForgeConfig,
      packageAfterCopy: this.packageAfterCopy,
    };
  };

  resolveForgeConfig = async (
    forgeConfig: ResolvedForgeConfig,
  ): Promise<ResolvedForgeConfig> => {
      throw new Error("STUB");
  };

  packageAfterCopy = async (
    _forgeConfig: ResolvedForgeConfig,
    buildPath: string,
  ): Promise<void> => {
      throw new Error("STUB");
  };

  // Main process, Preload scripts and Worker process, etc.
  build = async (task?: ForgeListrTask<null>): Promise<Listr | void> => {
      throw new Error("STUB");
  };

  // Renderer process
  buildRenderer = async (task?: ForgeListrTask<null>) => {
      throw new Error("STUB");
  };

  launchRendererDevServers = async (task?: ForgeListrTask<null>) => {
      throw new Error("STUB");
  };

  exitHandler = (
    options: { cleanup?: boolean; exit?: boolean },
    err?: Error,
  ): void => {
      throw new Error("STUB");
  };
}

/**
 * Get a string for Vite's printServerUrls function without actually printing it.
 * Allows us to set `task.output` to that value without having to pass a custom logger into Vite.
 * @see https://github.com/vitejs/vite/blob/42233d39674be808a6a1a79f1a6e44ed23ba0d61/packages/vite/src/node/logger.ts#L168-L188
 */
function getServerURLs(urls: vite.ResolvedServerUrls) {
    throw new Error("STUB");
}

export { VitePlugin };
