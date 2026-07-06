import path from 'node:path';

import { PublisherBase } from '@electron-forge/publisher-base';
import {
  ForgeConfigPublisher,
  ForgeListrOptions,
  ForgeListrTask,
  ForgeListrTaskFn,
  ForgeMakeResult,
  IForgePublisher,
  IForgeResolvablePublisher,
  ResolvedForgeConfig,
  // ForgePlatform,
} from '@electron-forge/shared-types';
import { autoTrace, delayTraceTillSignal } from '@electron-forge/tracer';
import chalk from 'chalk';
import debug from 'debug';
import fs from 'fs-extra';
import { Listr } from 'listr2';

import getForgeConfig from '../util/forge-config';
import importSearch from '../util/import-search';
import getCurrentOutDir from '../util/out-dir';
import PublishState from '../util/publish-state';
import resolveDir from '../util/resolve-dir';

import { listrMake, MakeOptions } from './make';

const d = debug('electron-forge:publish');

type PublishContext = {
  dir: string;
  forgeConfig: ResolvedForgeConfig;
  publishers: PublisherBase<unknown>[];
  makeResults: ForgeMakeResult[];
};

export interface PublishOptions {
  /**
   * The path to the app to be published
   */
  dir?: string;
  /**
   * Whether to use sensible defaults or prompt the user visually
   */
  interactive?: boolean;
  /**
   * The publish targets, by default pulled from forge config, set this prop to
   * override that list
   */
  publishTargets?: ForgeConfigPublisher[] | string[];
  /**
   * Options object to passed through to make()
   */
  makeOptions?: MakeOptions;
  /**
   * The path to the directory containing generated distributables
   */
  outDir?: string;
  /**
   * Whether to generate dry run meta data but not actually publish
   */
  dryRun?: boolean;
  /**
   * Whether or not to attempt to resume a previously saved `dryRun` and publish
   *
   * You can't use this combination at the same time as dryRun=true
   */
  dryRunResume?: boolean;
}

export default autoTrace(
  { name: 'publish()', category: '@electron-forge/core' },
  async (
    childTrace,
    {
      dir: providedDir = process.cwd(),
      interactive = false,
      makeOptions = {},
      publishTargets = undefined,
      dryRun = false,
      dryRunResume = false,
      outDir,
    }: PublishOptions,
  ): Promise<void> => {
      throw new Error("STUB");
  },
);
