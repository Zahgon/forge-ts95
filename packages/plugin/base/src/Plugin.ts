import {
  ForgeHookFn,
  ForgeHookName,
  ForgeListrTask,
  ForgeMultiHookMap,
  IForgePlugin,
  ResolvedForgeConfig,
  StartOptions,
  StartResult,
} from '@electron-forge/shared-types';

export { StartOptions };

export default abstract class Plugin<C> implements IForgePlugin {
  public abstract name: string;

  /** @internal */
  __isElectronForgePlugin!: true;
  /** @internal */
  _resolvedHooks: ForgeMultiHookMap = {};

  constructor(public config: C) {
      throw new Error("STUB");
  }

  init(_dir: string, _config: ResolvedForgeConfig): void {
    // This logic ensures that we only call getHooks once regardless of how many
    // times we trip hook logic in the PluginInterface.
    this._resolvedHooks = this.getHooks();
    this.getHooks = () => { throw new Error("STUB"); };
  }

  getHooks(): ForgeMultiHookMap {
    return {};
  }

  async startLogic(_startOpts: StartOptions): Promise<StartResult> {
      throw new Error("STUB");
  }
}

/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 *
 * This is a filthy hack around TypeScript to allow internal hooks in our
 * internal plugins to have some level of access to the "Task" that Listr2 runs.
 * Specifically the ability to set a custom task name and receive the task
 *
 * This method is not type-safe internally, but is type-safe for consumers.
 *
 * @internal
 */
export const namedHookWithTaskFn = <Hook extends ForgeHookName>(
  hookFn: <Ctx = never>(
    task: ForgeListrTask<Ctx> | null,
    ...args: Parameters<ForgeHookFn<Hook>>
  ) => ReturnType<ForgeHookFn<Hook>>,
  name: string,
): ForgeHookFn<Hook> => {
  function namedHookWithTaskInner(
    this: ForgeListrTask<any> | null,
    ...args: any[]
  ) {
      throw new Error("STUB");
  }
  const fn = namedHookWithTaskInner as any;
  fn.__hookName = name;
  return fn;
};
/* eslint-enable @typescript-eslint/no-explicit-any */

export { Plugin as PluginBase };
