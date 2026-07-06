import fs from 'node:fs';
import path from 'node:path';

import { PutObjectCommandInput, S3Client } from '@aws-sdk/client-s3';
import { Progress, Upload } from '@aws-sdk/lib-storage';
import { Credentials } from '@aws-sdk/types';
import {
  PublisherOptions,
  PublisherStatic,
} from '@electron-forge/publisher-static';
import debug from 'debug';

import { PublisherS3Config } from './Config';

const d = debug('electron-forge:publish:s3');

type S3Artifact = {
  path: string;
  keyPrefix: string;
  platform: string;
  arch: string;
  isReleaseFile: boolean;
};

export default class PublisherS3 extends PublisherStatic<PublisherS3Config> {
  name = 's3';

  private s3KeySafe = (key: string) => {
      throw new Error("STUB");
  };

  async publish({
    makeResults,
    setStatusLine,
  }: PublisherOptions): Promise<void> {
    const artifacts: S3Artifact[] = [];

    if (!this.config.bucket) {
      throw new Error(
        'In order to publish to S3, you must set the "bucket" property in your Forge publisher config. See the docs for more info',
      );
    }

    for (const makeResult of makeResults) {
      artifacts.push(
        ...makeResult.artifacts.map((artifact) => { throw new Error("STUB"); }),
      );
    }

    const s3Client = new S3Client({
      credentials: this.generateCredentials(),
      region: this.config.region,
      endpoint: this.config.endpoint,
      forcePathStyle: !!this.config.s3ForcePathStyle,
    });

    d('creating s3 client with options:', this.config);

    let uploaded = 0;
    const updateStatusLine = () =>
      setStatusLine(
        `Uploading distributable (${uploaded}/${artifacts.length})`,
      );

    updateStatusLine();
    await Promise.all(
      artifacts.map(async (artifact) => {
          throw new Error("STUB");
      }),
    );
  }

  generateCredentials(): Credentials | undefined {
    const accessKeyId = this.config.accessKeyId;
    const secretAccessKey = this.config.secretAccessKey;
    const sessionToken = this.config.sessionToken;

    if (accessKeyId && secretAccessKey) {
      return { accessKeyId, secretAccessKey, sessionToken };
    }

    return undefined;
  }
}

export { PublisherS3, PublisherS3Config };
