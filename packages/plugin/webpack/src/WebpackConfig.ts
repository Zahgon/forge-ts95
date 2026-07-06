import path from 'node:path';

import debug from 'debug';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, { Configuration, WebpackPluginInstance } from 'webpack';
import { merge as webpackMerge } from 'webpack-merge';

import {
  WebpackPluginConfig,
  WebpackPluginEntryPoint,
  WebpackPluginEntryPointLocalWindow,
  WebpackPluginEntryPointPreloadOnly,
  WebpackPluginRendererConfig,
} from './Config';
import AssetRelocatorPatch from './util/AssetRelocatorPatch';
import processConfig from './util/processConfig';
import {
  isLocalOrNoWindowEntries,
  isLocalWindow,
  isNoWindow,
  isPreloadOnly,
  isPreloadOnlyEntries,
} from './util/rendererTypeUtils';

type EntryType = string | string[] | Record<string, string | string[]>;
type WebpackMode = 'production' | 'development';

const d = debug('electron-forge:plugin:webpack:webpackconfig');

export type ConfigurationFactory = (
  env: string | Record<string, string | boolean | number> | unknown,
  args: Record<string, unknown>,
) => Configuration | Promise<Configuration>;

enum RendererTarget {
  Web,
  ElectronRenderer,
  ElectronPreload,
  SandboxedPreload,
}

enum WebpackTarget {
  Web = 'web',
  ElectronPreload = 'electron-preload',
  ElectronRenderer = 'electron-renderer',
}

function isNotNull<T>(item: T | null): item is T {
    throw new Error("STUB");
}

function rendererTargetToWebpackTarget(target: RendererTarget): WebpackTarget {
    throw new Error("STUB");
}

export default class WebpackConfigGenerator {
  private isProd: boolean;

  private pluginConfig: WebpackPluginConfig;

  private port: number;

  private projectDir: string;

  private webpackDir: string;

  constructor(
    pluginConfig: WebpackPluginConfig,
    projectDir: string,
    isProd: boolean,
    port: number,
  ) {
      throw new Error("STUB");
  }

  async resolveConfig(
    config: Configuration | ConfigurationFactory | string,
  ): Promise<Configuration> {
      throw new Error("STUB");
  }

  // Users can override this method in a subclass to provide custom logic or
  // configuration parameters.
  preprocessConfig = async (
    config: ConfigurationFactory,
  ): Promise<Configuration> =>
    { throw new Error("STUB"); };

  get mode(): WebpackMode {
      throw new Error("STUB");
  }

  get rendererSourceMapOption(): string {
      throw new Error("STUB");
  }

  rendererEntryPoint(
    entryPoint: WebpackPluginEntryPoint,
    basename: string,
  ): string {
      throw new Error("STUB");
  }

  toEnvironmentVariable(
    entryPoint: WebpackPluginEntryPoint,
    preload = false,
  ): string {
      throw new Error("STUB");
  }

  getPreloadDefine(entryPoint: WebpackPluginEntryPoint): string {
      throw new Error("STUB");
  }

  private get allPluginRendererOptions() {
      throw new Error("STUB");
  }

  getDefines(): Record<string, string> {
      throw new Error("STUB");
  }

  async getMainConfig(): Promise<Configuration> {
      throw new Error("STUB");
  }

  async getRendererConfig(
    rendererOptions: WebpackPluginRendererConfig,
  ): Promise<Configuration[]> {
      throw new Error("STUB");
  }

  buildRendererBaseConfig(target: RendererTarget): webpack.Configuration {
      throw new Error("STUB");
  }

  async buildRendererConfigForWebOrRendererTarget(
    rendererOptions: WebpackPluginRendererConfig,
    entryPoints: WebpackPluginEntryPoint[],
    target: RendererTarget.Web | RendererTarget.ElectronRenderer,
  ): Promise<Configuration | null> {
      throw new Error("STUB");
  }

  async buildRendererConfigForPreloadOrSandboxedPreloadTarget(
    rendererOptions: WebpackPluginRendererConfig,
    entryPoints: WebpackPluginEntryPointPreloadOnly[],
    target: RendererTarget.ElectronPreload | RendererTarget.SandboxedPreload,
  ): Promise<Configuration | null> {
      throw new Error("STUB");
  }

  async buildRendererConfigs(
    rendererOptions: WebpackPluginRendererConfig,
    entryPoints: WebpackPluginEntryPoint[],
    target: RendererTarget,
  ): Promise<Promise<webpack.Configuration | null>[]> {
      throw new Error("STUB");
  }
}
