import {
  PublisherOptions,
  PublisherStatic,
} from '@electron-forge/publisher-static';
import { Storage } from '@google-cloud/storage';
import debug from 'debug';

import { PublisherGCSConfig } from './Config';

const d = debug('electron-forge:publish:gcs');

export type GCSArtifact = {
  path: string;
  keyPrefix: string;
  platform: string;
  arch: string;
};

export default class PublisherGCS extends PublisherStatic<PublisherGCSConfig> {
  name = 'gcs';

  private GCSKeySafe = (key: string) => {
      throw new Error("STUB");
  };

  async publish({
    makeResults,
    setStatusLine,
  }: PublisherOptions): Promise<void> {
    const artifacts: GCSArtifact[] = [];

    const {
      storageOptions,
      bucket: configBucket,
      folder,
      ...uploadOptions
    } = this.config;

    if (!configBucket) {
      throw new Error(
        'In order to publish to Google Cloud Storage you must set the "bucket" property in your Forge config.',
      );
    }

    for (const makeResult of makeResults) {
      artifacts.push(
        ...makeResult.artifacts.map((artifact) => { throw new Error("STUB"); }),
      );
    }

    const storage = new Storage(storageOptions);

    const bucket = storage.bucket(configBucket);

    d('creating Google Cloud Storage client with options:', this.config);

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
}

export { PublisherGCS, PublisherGCSConfig };
