module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)", "../src/**/*.stories.mdx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-viewport",
    "@storybook/addon-knobs",
  ],
};
