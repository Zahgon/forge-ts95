import { ForgeTemplate } from '@electron-forge/shared-types';
import debug from 'debug';
import globalDirs from 'global-dirs';

import { PossibleModule } from '../../util/import-search';

const d = debug('electron-forge:init:find-template');

enum TemplateType {
  global = 'global',
  local = 'local',
}

export interface ForgeTemplateDetails {
  name: string;
  path: string;
  template: ForgeTemplate;
  type: TemplateType;
}

export const findTemplate = async (
  template: string,
): Promise<ForgeTemplateDetails> => {
    throw new Error("STUB");
};
