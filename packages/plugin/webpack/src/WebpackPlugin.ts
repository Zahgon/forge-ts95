import crypto from 'node:crypto';
import http from 'node:http';
import path from 'node:path';
import { pipeline } from 'stream/promises';

import {
  getElectronVersion,
  listrCompatibleRebuildHook,
} from '@electron-forge/core-utils';
import { namedHookWithTaskFn, PluginBase } from '@electron-forge/plugin-base';
import {
  ForgeMultiHookMap,
  ListrTask,
  ResolvedForgeConfig,
} from '@electron-forge/shared-types';
import Logger, { Tab } from '@electron-forge/web-multi-logger';
import chalk from 'chalk';
import debug from 'debug';
import glob from 'fast-glob';
import fs from 'fs-extra';
import { PRESET_TIMER } from 'listr2';
import webpack, { Configuration, Watching } from 'webpack';
// eslint-disable-next-line import/default -- webpack-dev-server v5 uses `export =`; esModuleInterop resolves the default
import WebpackDevServer from 'webpack-dev-server';
import { merge } from 'webpack-merge';

import { WebpackPluginConfig, WebpackPluginRendererConfig } from './Config';
import ElectronForgeLoggingPlugin from './util/ElectronForgeLogging';
import EntryPointPreloadPlugin from './util/EntryPointPreloadPlugin';
import once from './util/once';
import WebpackConfigGenerator from './WebpackConfig';

const d = debug('electron-forge:plugin:webpack');
const DEFAULT_PORT = 3000;
const DEFAULT_LOGGER_PORT = 9000;

type WebpackToJsonOptions = Parameters<webpack.Stats['toJson']>[0];
type WebpackWatchHandler = Parameters<webpack.Compiler['watch']>[1];

type NativeDepsCtx = {
  nativeDeps: Record<string, string[]>;
};

export default class WebpackPlugin extends PluginBase<WebpackPluginConfig> {
  name = 'webpack';

  private isProd = false;

  // The root of the Electron app
  private projectDir!: string;

  // Where the Webpack output is generated. Usually `$projectDir/.webpack`
  private baseDir!: string;

  private _configGenerator!: WebpackConfigGenerator;

  private watchers: Watching[] = [];

  private servers: http.Server[] = [];

  private loggers: Logger[] = [];

  private port = DEFAULT_PORT;

  private loggerPort = DEFAULT_LOGGER_PORT;

  constructor(c: WebpackPluginConfig) {
      throw new Error("STUB");
  }

  private isValidPort = (port: number) => {
      throw new Error("STUB");
  };

  exitHandler = (
    options: { cleanup?: boolean; exit?: boolean },
    err?: Error,
  ): void => {
      throw new Error("STUB");
  };

  async writeJSONStats(
    type: string,
    stats: webpack.Stats | undefined,
    statsOptions: WebpackToJsonOptions,
    suffix: string,
  ): Promise<void> {
      throw new Error("STUB");
  }

  private runWebpack = async (
    options: Configuration[],
    rendererOptions: WebpackPluginRendererConfig | null,
  ): Promise<webpack.MultiStats | undefined> =>
    { throw new Error("STUB"); };

  init = (dir: string): void => {
    this.setDirectories(dir);

    d('hooking process events');
    process.on('exit', (_code) => { throw new Error("STUB"); });
    process.on('SIGINT' as NodeJS.Signals, (_signal) =>
      { throw new Error("STUB"); },
    );
  };

  setDirectories = (dir: string): void => {
      throw new Error("STUB");
  };

  get configGenerator(): WebpackConfigGenerator {
      throw new Error("STUB");
  }

  getHooks(): ForgeMultiHookMap {
    return {
      preStart: [
        namedHookWithTaskFn<'preStart'>(async (task) => {
            throw new Error("STUB");
        }, 'Preparing webpack bundles'),
      ],
      prePackage: [
        namedHookWithTaskFn<'prePackage'>(
          async (task, config, platform, arch) => {
                throw new Error("STUB");
            },
          'Preparing webpack bundles',
        ),
      ],
      postStart: async (_config, child) => {
          throw new Error("STUB");
      },
      resolveForgeConfig: this.resolveForgeConfig,
      packageAfterCopy: [
        async (
          _forgeConfig: ResolvedForgeConfig,
          buildPath: string,
          _electronVersion: string,
          _platform: string,
          pArch: string,
        ): Promise<void> => {
              throw new Error("STUB");
          },
        this.packageAfterCopy,
      ],
    };
  }

  resolveForgeConfig = async (
    forgeConfig: ResolvedForgeConfig,
  ): Promise<ResolvedForgeConfig> => {
      throw new Error("STUB");
  };

  private get allRendererOptions() {
      throw new Error("STUB");
  }

  packageAfterCopy = async (
    _forgeConfig: ResolvedForgeConfig,
    buildPath: string,
  ): Promise<void> => {
      throw new Error("STUB");
  };

  compileMain = async (watch = false, logger?: Logger): Promise<void> => {
      throw new Error("STUB");
  };

  compileRenderers = async (watch = false): Promise<void> => {
      throw new Error("STUB");
  };

  launchRendererDevServers = async (logger: Logger): Promise<void> => {
      throw new Error("STUB");
  };

  devServerOptions(): WebpackDevServer.Configuration {
      throw new Error("STUB");
  }

  private alreadyStarted = false;
}

export { WebpackPlugin, WebpackPluginConfig };
