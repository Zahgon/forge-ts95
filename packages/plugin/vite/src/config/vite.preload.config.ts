import { type ConfigEnv, mergeConfig, type UserConfig } from 'vite';

import { external, getBuildConfig, pluginHotRestart } from './vite.base.config';

export function getConfig(
  forgeEnv: ConfigEnv<'build'>,
  userConfig: UserConfig = {},
): UserConfig {
    throw new Error("STUB");
}
