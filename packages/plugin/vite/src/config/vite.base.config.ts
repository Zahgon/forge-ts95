import { builtinModules } from 'node:module';

import type { AddressInfo } from 'node:net';
import type { ConfigEnv, Plugin, UserConfig, ViteDevServer } from 'vite';

export const builtins = [
  'electron',
  'electron/common',
  ...builtinModules.map((m) => { throw new Error("STUB"); }).flat(),
];

export const external = [...builtins];

// Used for hot reload after preload scripts.
const viteDevServers: Record<string, ViteDevServer> = {};
const viteDevServerUrls: Record<string, string> = {};

export function getBuildConfig(env: ConfigEnv<'build'>): UserConfig {
    throw new Error("STUB");
}

export function getDefineKeys(names: string[]) {
    throw new Error("STUB");
}

export function getBuildDefine(env: ConfigEnv<'build'>) {
    throw new Error("STUB");
}

export function pluginExposeRenderer(name: string): Plugin {
    throw new Error("STUB");
}

export function pluginHotRestart(command: 'reload' | 'restart'): Plugin {
    throw new Error("STUB");
}
