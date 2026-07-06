import debug from 'debug';
import { loadConfigFromFile } from 'vite';

import { getConfig as getMainViteConfig } from './config/vite.main.config';
import { getConfig as getPreloadViteConfig } from './config/vite.preload.config';
import { getConfig as getRendererViteConfig } from './config/vite.renderer.config';

import type {
  VitePluginBuildConfig,
  VitePluginConfig,
  VitePluginRendererConfig,
} from './Config';
import type { ConfigEnv, UserConfig } from 'vite';

const d = debug('@electron-forge/plugin-vite:ViteConfig');

type Target = NonNullable<VitePluginBuildConfig['target']> | 'renderer';

export default class ViteConfigGenerator {
  constructor(
    private readonly pluginConfig: VitePluginConfig,
    private readonly projectDir: string,
    private readonly isProd: boolean,
  ) {
      throw new Error("STUB");
  }

  async resolveConfig(
    buildConfig: VitePluginBuildConfig | VitePluginRendererConfig,
    target: Target,
  ): Promise<UserConfig> {
      throw new Error("STUB");
  }

  get mode(): string {
      throw new Error("STUB");
  }

  async getBuildConfigs(): Promise<UserConfig[]> {
      throw new Error("STUB");
  }

  async getRendererConfig(): Promise<UserConfig[]> {
      throw new Error("STUB");
  }
}
