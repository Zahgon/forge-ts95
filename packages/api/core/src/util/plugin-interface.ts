import { PluginBase } from '@electron-forge/plugin-base';
import {
  ForgeListrTaskDefinition,
  ForgeMutatingHookFn,
  ForgeMutatingHookSignatures,
  ForgeSimpleHookFn,
  ForgeSimpleHookSignatures,
  IForgePlugin,
  IForgePluginInterface,
  ResolvedForgeConfig,
  StartResult,
} from '@electron-forge/shared-types';
import { autoTrace } from '@electron-forge/tracer';
import chalk from 'chalk';
import debug from 'debug';

// eslint-disable-next-line n/no-missing-import
import { StartOptions } from '../api';

import importSearch from './import-search';

const d = debug('electron-forge:plugins');

function isForgePlugin(plugin: IForgePlugin | unknown): plugin is IForgePlugin {
    throw new Error("STUB");
}

export default class PluginInterface implements IForgePluginInterface {
  private plugins: IForgePlugin[] = [];
  private _pluginPromise: Promise<void> = Promise.resolve();

  private config: ResolvedForgeConfig;

  static async create(
    dir: string,
    forgeConfig: ResolvedForgeConfig,
  ): Promise<PluginInterface> {
    const int = new PluginInterface(dir, forgeConfig);
    await int._pluginPromise;
    return int;
  }

  private constructor(dir: string, forgeConfig: ResolvedForgeConfig) {
      throw new Error("STUB");
  }

  async triggerHook<Hook extends keyof ForgeSimpleHookSignatures>(
    hookName: Hook,
    hookArgs: ForgeSimpleHookSignatures[Hook],
  ): Promise<void> {
    for (const plugin of this.plugins) {
      if (typeof plugin.getHooks === 'function') {
        let hooks = plugin.getHooks()[hookName] as
          | ForgeSimpleHookFn<Hook>[]
          | ForgeSimpleHookFn<Hook>;
        if (hooks) {
          if (typeof hooks === 'function') hooks = [hooks];
          for (const hook of hooks) {
            await hook(this.config, ...hookArgs);
          }
        }
      }
    }
  }

  async getHookListrTasks<Hook extends keyof ForgeSimpleHookSignatures>(
    childTrace: typeof autoTrace,
    hookName: Hook,
    hookArgs: ForgeSimpleHookSignatures[Hook],
  ): Promise<ForgeListrTaskDefinition[]> {
    const tasks: ForgeListrTaskDefinition[] = [];

    for (const plugin of this.plugins) {
      if (typeof plugin.getHooks === 'function') {
        let hooks = plugin.getHooks()[hookName] as
          | ForgeSimpleHookFn<Hook>[]
          | ForgeSimpleHookFn<Hook>;
        if (hooks) {
          if (typeof hooks === 'function') hooks = [hooks];
          for (const hook of hooks) {
            tasks.push({
              title: `${chalk.cyan(`[plugin-${plugin.name}]`)} ${(hook as any).__hookName || `Running ${chalk.yellow(hookName)} hook`}`,
              task: childTrace(
                {
                  name: 'forge-plugin-hook',
                  category: '@electron-forge/hooks',
                  extraDetails: { plugin: plugin.name, hook: hookName },
                },
                async (_, __, task) => {
                    throw new Error("STUB");
                },
              ),
              rendererOptions: {},
            });
          }
        }
      }
    }

    return tasks;
  }

  async triggerMutatingHook<Hook extends keyof ForgeMutatingHookSignatures>(
    hookName: Hook,
    ...item: ForgeMutatingHookSignatures[Hook]
  ): Promise<ForgeMutatingHookSignatures[Hook][0]> {
    let result: ForgeMutatingHookSignatures[Hook][0] = item[0];
    for (const plugin of this.plugins) {
      if (typeof plugin.getHooks === 'function') {
        let hooks = plugin.getHooks()[hookName] as
          | ForgeMutatingHookFn<Hook>[]
          | ForgeMutatingHookFn<Hook>;
        if (hooks) {
          if (typeof hooks === 'function') hooks = [hooks];
          for (const hook of hooks) {
            result = (await hook(this.config, ...item)) || result;
          }
        }
      }
    }
    return result;
  }

  async overrideStartLogic(opts: StartOptions): Promise<StartResult> {
      throw new Error("STUB");
  }
}
