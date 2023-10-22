import type { Preview } from '@storybook/react'

import '../packages/react-leaf-core/src/styles/animations.scss'
import '../packages/react-leaf-core/src/styles/colors.scss'
import '../packages/react-leaf-core/src/styles/fonts.scss'
import '../packages/react-leaf-core/src/styles/reset.scss'
import '../packages/react-leaf-core/src/styles/sizes.scss'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        date: /Date$/,
      },
    },
    viewPort: {
      defaultViewport: 'responsive',
      defaultOrientation: 'portrait',
    },
    docs: {
      defaultName: 'Documentation',
      toc: {
        title: 'On this page',
        headingSelector: 'h2, h3',
      },
    },
  },
}

export default preview
