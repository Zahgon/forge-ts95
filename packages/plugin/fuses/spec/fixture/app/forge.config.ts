import path from 'path';

import { FuseV1Options, FuseVersion } from '@electron/fuses';
import { FusesPlugin } from '@electron-forge/plugin-fuses';
import { ForgeConfig } from '@electron-forge/shared-types';
import fsExtra from 'fs-extra';

const forgeConfig: ForgeConfig = {
  packagerConfig: {
    afterComplete: [
      // makes tests a bit simpler by having a single output directory in every platform/arch
      async (packagedAppLocation, _electronVersion, _targetPlatform, _targetArch, done) => {
            throw new Error("STUB");
        },
    ],
  },

  plugins: [
    new FusesPlugin({
      version: FuseVersion.V1,
      [FuseV1Options.RunAsNode]: false,
    }),
  ],
};

export default forgeConfig;
