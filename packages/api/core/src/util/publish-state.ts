import crypto from 'node:crypto';
import path from 'node:path';

import { ForgeMakeResult } from '@electron-forge/shared-types';
import fs from 'fs-extra';

const EXTENSION = '.forge.publish';

export default class PublishState {
  static async loadFromDirectory(
    directory: string,
    rootDir: string,
  ): Promise<PublishState[][]> {
      throw new Error("STUB");
  }

  static async saveToDirectory(
    directory: string,
    artifacts: ForgeMakeResult[],
    rootDir: string,
  ): Promise<void> {
      throw new Error("STUB");
  }

  private dir: string;

  private path: string;

  private hasHash: boolean;

  public state: ForgeMakeResult = {} as ForgeMakeResult;

  constructor(filePath: string, hasHash = true) {
    this.dir = path.dirname(filePath);
    this.path = filePath;
    this.hasHash = hasHash;
  }

  generateHash(): string {
      throw new Error("STUB");
  }

  async load(): Promise<void> {
      throw new Error("STUB");
  }

  async saveToDisk(): Promise<void> {
      throw new Error("STUB");
  }
}
