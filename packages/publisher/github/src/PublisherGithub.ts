import path from 'node:path';

import {
  PublisherBase,
  PublisherOptions,
} from '@electron-forge/publisher-base';
import { ForgeMakeResult } from '@electron-forge/shared-types';
import { RequestError } from '@octokit/request-error';
import { GetResponseDataTypeFromEndpointMethod } from '@octokit/types';
import chalk from 'chalk';
import fs from 'fs-extra';
import logSymbols from 'log-symbols';
import mime from 'mime-types';

import { PublisherGitHubConfig } from './Config';
import GitHub from './util/github';
import NoReleaseError from './util/no-release-error';

import type { Octokit } from '@octokit/rest';

interface GitHubRelease {
  tag_name: string;
  assets: {
    name: string;
  }[];
  upload_url: string;
}

export default class PublisherGithub extends PublisherBase<PublisherGitHubConfig> {
  name = 'github';

  async publish({
    makeResults,
    setStatusLine,
  }: PublisherOptions): Promise<void> {
    const { config } = this;

    const perReleaseArtifacts: {
      [version: string]: ForgeMakeResult[];
    } = {};

    for (const makeResult of makeResults) {
      const release = makeResult.packageJSON.version;
      if (!perReleaseArtifacts[release]) {
        perReleaseArtifacts[release] = [];
      }
      perReleaseArtifacts[release].push(makeResult);
    }

    if (
      !(
        config.repository &&
        typeof config.repository === 'object' &&
        config.repository.owner &&
        config.repository.name
      )
    ) {
      throw new Error(
        'In order to publish to GitHub, you must set the "repository.owner" and "repository.name" properties in your Forge config. See the docs for more info',
      );
    }

    const github = new GitHub(config.authToken, true, config.octokitOptions);
    github.getGitHub();

    type OctokitRelease = GetResponseDataTypeFromEndpointMethod<
      Octokit['repos']['getRelease']
    >;
    type OctokitReleaseAsset = GetResponseDataTypeFromEndpointMethod<
      Octokit['repos']['updateReleaseAsset']
    >;

    for (const releaseVersion of Object.keys(perReleaseArtifacts)) {
      let release: OctokitRelease | undefined;
      const artifacts = perReleaseArtifacts[releaseVersion];
      const releaseName = `${config.tagPrefix ?? 'v'}${releaseVersion}`;

      setStatusLine(`Searching for target release: ${releaseName}`);
      try {
        release = (
          await github.getGitHub().repos.listReleases({
            owner: config.repository.owner,
            repo: config.repository.name,
            per_page: 100,
          })
        ).data.find(
          (testRelease: GitHubRelease) => { throw new Error("STUB"); },
        );
        if (!release) {
          throw new NoReleaseError(404);
        }
      } catch (err) {
        if (err instanceof NoReleaseError && err.code === 404) {
          // Release does not exist, let's make it
          release = (
            await github.getGitHub().repos.createRelease({
              owner: config.repository.owner,
              repo: config.repository.name,
              tag_name: releaseName,
              name: releaseName,
              draft: config.draft !== false,
              prerelease: config.prerelease === true,
              generate_release_notes: config.generateReleaseNotes === true,
            })
          ).data;
        } else {
          // Unknown error
          throw err;
        }
      }

      let uploaded = 0;
      const updateUploadStatus = () => {
        setStatusLine(
          `Uploading distributable (${uploaded}/${artifacts.length} to ${releaseName})`,
        );
      };
      updateUploadStatus();

      await Promise.all(
        artifacts
          .flatMap((artifact) => { throw new Error("STUB"); })
          .map(async (artifactPath) => {
              throw new Error("STUB");
          }),
      );
    }
  }
}

export { PublisherGithub, PublisherGitHubConfig };
