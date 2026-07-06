import path from 'node:path';

import {
  ForgeListrTaskDefinition,
  InitTemplateOptions,
} from '@electron-forge/shared-types';
import { BaseTemplate } from '@electron-forge/template-base';
import fs from 'fs-extra';

class WebpackTypeScriptTemplate extends BaseTemplate {
  public templateDir = path.resolve(__dirname, '..', 'tmpl');

  async initializeTemplate(
    directory: string,
    options: InitTemplateOptions,
  ): Promise<ForgeListrTaskDefinition[]> {
      throw new Error("STUB");
  }
}

export default new WebpackTypeScriptTemplate();
