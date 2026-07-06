import { PluginBase } from '@electron-forge/plugin-base';
import { ForgeHookFn, ForgeHookMap } from '@electron-forge/shared-types';
import fs from 'fs-extra';

import { LocalElectronPluginConfig } from './Config';

export default class LocalElectronPlugin extends PluginBase<LocalElectronPluginConfig> {
  name = 'local-electron';

  constructor(c: LocalElectronPluginConfig) {
    super(c);

    this.getHooks = this.getHooks.bind(this);
  }

  get enabled(): boolean {
      throw new Error("STUB");
  }

  getHooks(): ForgeHookMap {
    return {
      preStart: this.preStart,
      packageAfterExtract: this.afterExtract,
    };
  }

  private checkPlatform = (platform: string) => {
      throw new Error("STUB");
  };

  private checkArch = (arch: string) => {
      throw new Error("STUB");
  };

  private preStart: ForgeHookFn<'preStart'> = async () => {
      throw new Error("STUB");
  };

  private afterExtract: ForgeHookFn<'packageAfterExtract'> = async (
    _config,
    buildPath,
    _electronVersion,
    platform,
    arch,
  ) => {
      throw new Error("STUB");
  };
}

export { LocalElectronPlugin, LocalElectronPluginConfig };
