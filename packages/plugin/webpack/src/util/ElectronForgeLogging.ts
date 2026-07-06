import { Tab } from '@electron-forge/web-multi-logger';
import { Compiler } from 'webpack';

const pluginName = 'ElectronForgeLogging';

export default class LoggingPlugin {
  tab: Tab;

  constructor(tab: Tab) {
    this.tab = tab;
  }

  apply(compiler: Compiler): void {
      throw new Error("STUB");
  }
}
