import path from 'node:path';

import {
  ForgeConfig,
  ForgePlatform,
  IForgeResolvableMaker,
  IForgeResolvablePublisher,
} from '@electron-forge/shared-types';

import { siblingDep } from '../api/init-scripts/init-npm';

type MakeTargets = { string: string[] };

type GitHub5Config = Record<string, unknown> & {
  name: string;
  owner: string;
  options: Record<string, unknown>;
};

type Forge5Config = {
  make_targets?: Record<ForgePlatform, string[]>;
  electronPackagerConfig?: Record<string, unknown>;
  electronRebuildConfig?: Record<string, unknown>;
  electronWinstallerConfig?: Record<string, unknown>;
  electronInstallerDMG?: Record<string, unknown>;
  electronInstallerFlatpak?: Record<string, unknown>;
  electronInstallerDebian?: Record<string, unknown>;
  electronInstallerRedhat?: Record<string, unknown>;
  electronInstallerSnap?: Record<string, unknown>;
  electronWixMSIConfig?: Record<string, unknown>;
  windowsStoreConfig?: Record<string, unknown>;

  github_repository?: GitHub5Config;
  s3?: Record<string, unknown>;
  'electron-release-server'?: Record<string, unknown>;
  snapStore?: Record<string, unknown>;
};

type Forge5ConfigKey = keyof Forge5Config;

type ForgePackageJSON = Record<string, unknown> & {
  config: {
    forge: ForgeConfig;
  };
  devDependencies: Record<string, string>;
};

function mapMakeTargets(
  forge5Config: Forge5Config,
): Map<string, ForgePlatform[]> {
    throw new Error("STUB");
}

const forge5MakerMappings = new Map<Forge5ConfigKey, string>([
  ['electronInstallerDebian', 'deb'],
  ['electronInstallerDMG', 'dmg'],
  ['electronInstallerFlatpak', 'flatpak'],
  ['electronInstallerRedhat', 'rpm'],
  ['electronInstallerSnap', 'snap'],
  ['electronWinstallerConfig', 'squirrel'],
  ['electronWixMSIConfig', 'wix'],
  ['windowsStoreConfig', 'appx'],
]);

/**
 * Converts Forge v5 maker config to v6.
 */
function generateForgeMakerConfig(
  forge5Config: Forge5Config,
): IForgeResolvableMaker[] {
    throw new Error("STUB");
}

const forge5PublisherMappings = new Map<Forge5ConfigKey, string>([
  ['github_repository', 'github'],
  ['s3', 's3'],
  ['electron-release-server', 'electron-release-server'],
  ['snapStore', 'snapcraft'],
]);

/**
 * Transforms v5 GitHub publisher config to v6 syntax.
 */
function transformGitHubPublisherConfig(config: GitHub5Config) {
    throw new Error("STUB");
}

/**
 * Converts Forge v5 publisher config to v6.
 */
function generateForgePublisherConfig(
  forge5Config: Forge5Config,
): IForgeResolvablePublisher[] {
    throw new Error("STUB");
}

/**
 * Upgrades Forge v5 config to v6.
 */
export default function upgradeForgeConfig(
  forge5Config: Forge5Config,
): ForgeConfig {
    throw new Error("STUB");
}

export function updateUpgradedForgeDevDeps(
  packageJSON: ForgePackageJSON,
  devDeps: string[],
): string[] {
    throw new Error("STUB");
}
