import { create } from '@storybook/theming';

export default create({
  base: 'dark',
  colorPrimary: '#ff7c00',
  colorSecondary: '#6495ed',

  // UI
  appContentBg: '#696969',
  appBorderColor: '#d3d3d3',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#f5f5f5',

  // Toolbar default and active colors
  barTextColor: '#d0c9bc',
  barSelectedColor: '#ff7c00',
  barBg: '#696969',

  // Branding
  brandTitle: 'GDWR Component Library',
  brandUrl: 'https://github.com/gdwr/gdwr-component-library',
  brandImage: 'https://avatars.githubusercontent.com/u/57012020?size=64',
  brandTarget: '_self',
});
