import path from 'node:path';

import { resolvePackageManager } from '@electron-forge/core-utils';
import {
  ForgeListrTaskDefinition,
  ForgeTemplate,
  InitTemplateOptions,
} from '@electron-forge/shared-types';
import debug from 'debug';
import fs from 'fs-extra';
import semver from 'semver';

import determineAuthor from './determine-author';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const currentForgeVersion = require('../package.json').version;

const d = debug('electron-forge:template:base');
const tmplDir = path.resolve(__dirname, '../tmpl');

export class BaseTemplate implements ForgeTemplate {
  public templateDir = tmplDir;

  public requiredForgeVersion = currentForgeVersion;

  get dependencies(): string[] {
      throw new Error("STUB");
  }

  get devDependencies(): string[] {
      throw new Error("STUB");
  }

  public async initializeTemplate(
    directory: string,
    { copyCIFiles }: InitTemplateOptions,
  ): Promise<ForgeListrTaskDefinition[]> {
      throw new Error("STUB");
  }

  async copy(source: string, target: string): Promise<void> {
    d(`copying "${source}" --> "${target}"`);
    await fs.copy(source, target);
  }

  async copyTemplateFile(destDir: string, basename: string): Promise<void> {
      throw new Error("STUB");
  }

  async initializePackageJSON(directory: string): Promise<void> {
      throw new Error("STUB");
  }

  async updateFileByLine(
    inputPath: string,
    lineHandler: (line: string) => string,
    outputPath?: string | undefined,
  ): Promise<void> {
      throw new Error("STUB");
  }
}

export default new BaseTemplate();
