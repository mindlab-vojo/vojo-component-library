module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-viewport/register',
    '@storybook/preset-create-react-app',
    '@storybook/addon-knobs/register',
    '@storybook/addon-a11y/register',
    '@storybook/addon-actions',
    '@storybook/addon-links',
  ],
};
