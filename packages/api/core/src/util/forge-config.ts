import path from 'node:path';

import { ForgeConfig, ResolvedForgeConfig } from '@electron-forge/shared-types';
import { Eta } from 'eta';
import fs from 'fs-extra';
import * as interpret from 'interpret';
import { createJiti } from 'jiti';
import * as rechoir from 'rechoir';

// eslint-disable-next-line n/no-missing-import
import { dynamicImportMaybe } from '../../helper/dynamic-import.js';

import { runMutatingHook } from './hook';
import PluginInterface from './plugin-interface';
import { readRawPackageJson } from './read-package-json';

const underscoreCase = (str: string) =>
  str
    .replace(/(.)([A-Z][a-z]+)/g, '$1_$2')
    .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
    .toUpperCase();

// Why: needs access to Object methods and also needs to be able to match any interface.
type ProxiedObject = object;

/* eslint-disable @typescript-eslint/no-explicit-any */
function isBuildIdentifierConfig(
  value: any,
): value is BuildIdentifierConfig<any> {
  return (
    value && typeof value === 'object' && value.__isMagicBuildIdentifierMap
  );
}

const proxify = <T extends ProxiedObject>(
  buildIdentifier: string | (() => string),
  proxifiedObject: T,
  envPrefix: string,
): T => {
  let newObject: T = {} as any;
  if (Array.isArray(proxifiedObject)) {
    newObject = [] as any;
  }

  for (const [key, val] of Object.entries(proxifiedObject)) {
    if (
      typeof val === 'object' &&
      (val.constructor === Object || val.constructor === Array) &&
      key !== 'pluginInterface' &&
      !(val instanceof RegExp)
    ) {
      (newObject as any)[key] = proxify(
        buildIdentifier,
        (proxifiedObject as any)[key],
        `${envPrefix}_${underscoreCase(key)}`,
      );
    } else {
      (newObject as any)[key] = (proxifiedObject as any)[key];
    }
  }

  return new Proxy<T>(newObject, {
    get(target, name, receiver) {
      // eslint-disable-next-line no-prototype-builtins
      if (!target.hasOwnProperty(name) && typeof name === 'string') {
        const envValue = process.env[`${envPrefix}_${underscoreCase(name)}`];
        if (envValue) return envValue;
      }
      const value = Reflect.get(target, name, receiver);

      if (isBuildIdentifierConfig(value)) {
        const identifier =
          typeof buildIdentifier === 'function'
            ? buildIdentifier()
            : buildIdentifier;
        return value.map[identifier];
      }
      return value;
    },
    getOwnPropertyDescriptor(target, name) {
      const envValue =
        process.env[`${envPrefix}_${underscoreCase(name as string)}`];
      // eslint-disable-next-line no-prototype-builtins
      if (target.hasOwnProperty(name)) {
        return Reflect.getOwnPropertyDescriptor(target, name);
      }

      if (envValue) {
        return {
          writable: true,
          enumerable: true,
          configurable: true,
          value: envValue,
        };
      }

      return undefined;
    },
  });
};
/* eslint-enable @typescript-eslint/no-explicit-any */

export const registeredForgeConfigs: Map<string, ForgeConfig> = new Map();
export function registerForgeConfigForDirectory(
  dir: string,
  config: ForgeConfig,
): void {
    throw new Error("STUB");
}
export function unregisterForgeConfigForDirectory(dir: string): void {
    throw new Error("STUB");
}

export type BuildIdentifierMap<T> = Record<string, T | undefined>;
export type BuildIdentifierConfig<T> = {
  map: BuildIdentifierMap<T>;
  __isMagicBuildIdentifierMap: true;
};

export function fromBuildIdentifier<T>(
  map: BuildIdentifierMap<T>,
): BuildIdentifierConfig<T> {
    throw new Error("STUB");
}

export async function forgeConfigIsValidFilePath(
  dir: string,
  forgeConfig: string | ForgeConfig,
): Promise<boolean> {
    throw new Error("STUB");
}

const eta = new Eta({ useWith: true, autoEscape: false, autoTrim: false });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function renderConfigTemplate(
  dir: string,
  templateObj: any,
  obj: any,
): void {
    throw new Error("STUB");
}

type MaybeESM<T> = T | { default: T };
type AsyncForgeConfigGenerator = () => Promise<ForgeConfig>;

export default async (dir: string): Promise<ResolvedForgeConfig> => {
    throw new Error("STUB");
};
