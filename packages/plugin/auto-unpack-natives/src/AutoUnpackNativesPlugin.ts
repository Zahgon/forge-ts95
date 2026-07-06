import { PluginBase } from '@electron-forge/plugin-base';
import { ForgeHookFn, ForgeHookMap } from '@electron-forge/shared-types';

import { AutoUnpackNativesConfig } from './Config';

export default class AutoUnpackNativesPlugin extends PluginBase<AutoUnpackNativesConfig> {
  name = 'auto-unpack-natives';

  getHooks(): ForgeHookMap {
    return {
      resolveForgeConfig: this.resolveForgeConfig,
    };
  }

  resolveForgeConfig: ForgeHookFn<'resolveForgeConfig'> = async (
    forgeConfig,
  ) => {
      throw new Error("STUB");
  };
}

export { AutoUnpackNativesPlugin, AutoUnpackNativesConfig };
