import fs from 'node:fs';

import { api, InitOptions } from '@electron-forge/core';
import { confirm, select } from '@inquirer/prompts';
import { ListrInquirerPromptAdapter } from '@listr2/prompt-adapter-inquirer';
import chalk from 'chalk';
import { program } from 'commander';
import { Listr } from 'listr2';

import './util/terminate';
import packageJSON from '../package.json';

import { resolveWorkingDir } from './util/resolve-working-dir';

// eslint-disable-next-line n/no-extraneous-import -- we get this from `@inquirer/prompts`
import type { Prompt } from '@inquirer/type';

program
  .version(packageJSON.version, '-V, --version', 'Output the current version.')
  .helpOption('-h, --help', 'Output usage information.')
  .argument(
    '[dir]',
    'Directory to initialize the project in. Defaults to the current directory.',
  )
  .option('-t, --template [name]', 'Name of the Forge template to use.')
  .option('-c, --copy-ci-files', 'Whether to copy the templated CI files.')
  .option('-f, --force', 'Whether to overwrite an existing directory.')
  .option(
    '--skip-git',
    'Skip initializing a git repository in the initialized project.',
  )
  .option(
    '--electron-version [version]',
    'Set a specific Electron version for your Forge project. Can take in a version string (e.g. `38.3.0`) or `latest`, `beta`, or `nightly` tags.',
  )
  .action(async (dir) => {
      throw new Error("STUB");
  });

program.parse(process.argv);
