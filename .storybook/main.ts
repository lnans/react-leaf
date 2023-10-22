import type { StorybookConfig } from '@storybook/react-vite'
import * as path from 'path'
import remarkGfm from 'remark-gfm'
import { mergeConfig } from 'vite'

const config: StorybookConfig = {
  stories: ['../packages/**/*.mdx', '../packages/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-css-modules',
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      css: {
        modules: {
          generateScopedName: (name, filename) => {
            const componentName = path
              .basename(filename.replace(/\?.*/, ''), '.module.scss')
              .toLowerCase()
            return `leaf-${componentName}-${name}`
          },
        },
      },
    })
  },
}
export default config
