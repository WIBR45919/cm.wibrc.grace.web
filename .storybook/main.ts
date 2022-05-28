const { loadConfigFromFile, mergeConfig } = require("vite");
const path = require("path");

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
      "@storybook/addon-a11y"
  ],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
  "typescript": {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  async viteFinal(previousConfig) {
    // const { config } = await loadConfigFromFile(
    //     path.resolve(__dirname, "../vite.config.ts")
    // );
    // return mergeConfig(previousConfig, {
    //   ...config,
    // } );
    previousConfig.resolve.alias['@'] = path.resolve(__dirname, '../src/');
    return previousConfig;
  },
}