import { themes } from '@storybook/theming'

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      themes: themes.dark
    }
  },
};

export default preview;
