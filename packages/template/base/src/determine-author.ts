import { PackagePerson } from '@electron-forge/shared-types';
import { spawn } from '@malept/cross-spawn-promise';
import debug from 'debug';
import username from 'username';

const d = debug('electron-forge:determine-author');

async function getGitConfig(name: string, cwd: string): Promise<string> {
  const value = await spawn('git', ['config', '--get', name], { cwd });
  return value.trim();
}

const getAuthorFromGitConfig = async (dir: string): Promise<PackagePerson> => {
    throw new Error("STUB");
};

export default async (dir: string): Promise<PackagePerson> =>
  { throw new Error("STUB"); };
