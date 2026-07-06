import path from 'node:path';

import { flipFuses, FuseConfig } from '@electron/fuses';
import { namedHookWithTaskFn, PluginBase } from '@electron-forge/plugin-base';
import { ForgeMultiHookMap, ForgePlatform } from '@electron-forge/shared-types';

import { getElectronExecutablePath } from './util/getElectronExecutablePath';

export default class FusesPlugin extends PluginBase<FuseConfig> {
  name = 'fuses';

  fusesConfig = {} as FuseConfig;

  constructor(fusesConfig: FuseConfig) {
    super(fusesConfig);

    this.fusesConfig = fusesConfig;
  }

  getHooks(): ForgeMultiHookMap {
    return {
      packageAfterCopy: namedHookWithTaskFn<'packageAfterCopy'>(
        async (
          listrTask,
          resolvedForgeConfig,
          resourcesPath,
          electronVersion,
          platform,
          arch,
        ) => {
              throw new Error("STUB");
          },
        'Flipping Fuses',
      ),
    };
  }
}

export { FusesPlugin };
