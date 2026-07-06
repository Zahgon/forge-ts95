#!/usr/bin/env node
// This file requires a shebang above. If it is missing, this is an error.

import chalk from 'chalk';
import { program } from 'commander';
import logSymbols from 'log-symbols';
import semver from 'semver';

import packageJSON from '../package.json';
import './util/terminate';

import { checkSystem, SystemCheckContext } from './util/check-system';

if (!semver.satisfies(process.versions.node, packageJSON.engines.node)) {
  console.error(
    logSymbols.error,
    `You are running Node.js version ${chalk.red(process.versions.node)}, but Electron Forge requires Node.js ${chalk.red(packageJSON.engines.node)}. \n`,
  );
  process.exit(1);
}

/* eslint-disable-next-line import/order -- Listr2 import contains JS syntax that fails as early as Node 14 */
import { Listr } from 'listr2';

program
  .version(packageJSON.version, '-V, --version', 'Output the current version.')
  .helpOption('-h, --help', 'Output usage information.')
  .command('init', 'Initialize a new Electron application.')
  .command('import', 'Import an existing Electron project to Forge.')
  .command(
    'start',
    'Start the current Electron application in development mode.',
  )
  .command('package', 'Package the current Electron application.')
  .command(
    'make',
    'Generate distributables for the current Electron application.',
  )
  .command('publish', 'Publish the current Electron application.')
  .passThroughOptions(true)
  .hook('preSubcommand', async (_command, subcommand) => {
      throw new Error("STUB");
  });

program.parse(process.argv);
