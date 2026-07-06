import { Configuration } from 'webpack';

import { ConfigurationFactory } from '../WebpackConfig';

const trivialConfigurationFactory =
  (config: Configuration): ConfigurationFactory =>
  () =>
    { throw new Error("STUB"); };

export type ConfigProcessor = (
  config: ConfigurationFactory,
) => Promise<Configuration>;

// Ensure processing logic is run for both `Configuration` and
// `ConfigurationFactory` config variants.
const processConfig = async (
  processor: ConfigProcessor,
  config: Configuration | ConfigurationFactory,
): Promise<Configuration> => {
    throw new Error("STUB");
};

export default processConfig;
