import { type ConfigEnv, mergeConfig, type UserConfig } from 'vite';

import { pluginExposeRenderer } from './vite.base.config';

// https://vitejs.dev/config
export function getConfig(
  forgeEnv: ConfigEnv<'renderer'>,
  userConfig: UserConfig = {},
) {
    throw new Error("STUB");
}
