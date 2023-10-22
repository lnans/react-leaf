import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { HiOutlineAdjustments, HiOutlineArrowSmRight } from 'react-icons/hi'

import Button from './Button'

const icons = {
  Settings: <HiOutlineAdjustments />,
  Arrow: <HiOutlineArrowSmRight />,
}

const meta: Meta<typeof Button> = {
  title: 'Controls/Button',
  component: Button,
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', gap: 12, alignItems: 'flex-end' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    children: { description: 'Button content' },
    variant: {
      description: 'The variant of the button',
      control: 'select',
    },
    color: { description: 'The color of the button', control: 'select' },
    size: { description: 'The size of the button', control: 'select' },
    radius: { description: 'The radius of the button', control: 'select' },
    disabled: { description: 'if `true` the button will be disabled', control: 'boolean' },
    loading: { description: 'if `true` the button will be in loading state' },
    loadingPosition: { description: 'The position of the loading icon', control: 'select' },
    leftSection: {
      options: [undefined, ...Object.keys(icons)],
      mapping: icons,
      description: 'Add element to the left',
      control: {
        type: 'select',
        labels: {
          undefined: 'None',
          Settings: 'Settings',
          Arrow: 'Arrow',
        },
      },
    },
    rightSection: {
      options: [undefined, ...Object.keys(icons)],
      mapping: icons,
      description: 'Add element to the right',
      control: {
        type: 'select',
        labels: {
          undefined: 'None',
          Settings: 'Settings',
          Arrow: 'Arrow',
        },
      },
    },
    fullWidth: { description: 'if `true` the button will be full width' },
    justify: {
      description: 'The justify of the button, define how to display the content of the button',
      control: 'select',
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Button',
  },
}

export const Variants: Story = {
  render: (props) => (
    <>
      <Button {...props} variant="filled">
        Filled
      </Button>
      <Button {...props} variant="outlined">
        Outline
      </Button>
      <Button {...props} variant="ghost">
        Ghost
      </Button>
    </>
  ),
  args: {},
}

export const Sizes: Story = {
  render: (props) => (
    <>
      <Button {...props} size="sm">
        Small
      </Button>
      <Button {...props} size="md">
        Medium
      </Button>
      <Button {...props} size="lg">
        Large
      </Button>
    </>
  ),
  args: {},
}

export const Radius: Story = {
  render: (props) => (
    <>
      <Button {...props} radius="sm">
        Small
      </Button>
      <Button {...props} radius="md">
        Medium
      </Button>
      <Button {...props} radius="lg">
        Large
      </Button>
    </>
  ),
  args: {},
}

export const States: Story = {
  render: (props) => (
    <>
      <Button {...props} disabled>
        Disabled
      </Button>
      <Button {...props} loading>
        Loading
      </Button>
      <Button {...props} loadingPosition="start" loading>
        Loading
      </Button>
      <Button {...props} loadingPosition="end" loading>
        Loading
      </Button>
    </>
  ),
  args: {},
}

export const Colors: Story = {
  render: (props) => (
    <>
      <Button {...props} color="blue">
        Blue
      </Button>
      <Button {...props} color="green">
        Green
      </Button>
      <Button {...props} color="red">
        Red
      </Button>
      <Button {...props} color="orange">
        Orange
      </Button>
      <Button {...props} color="violet">
        Violet
      </Button>
      <Button {...props} color="gray">
        Gray
      </Button>
    </>
  ),
  args: {},
}

export const Icons: Story = {
  render: ({ leftSection, rightSection, ...props }) => (
    <>
      <Button {...props} leftSection={leftSection}>
        Settings
      </Button>
      <Button {...props} leftSection={leftSection} rightSection={rightSection}>
        Settings
      </Button>
      <Button {...props} rightSection={rightSection}>
        Settings
      </Button>
      <Button {...props} leftSection={leftSection} />
    </>
  ),
  args: {
    leftSection: <HiOutlineAdjustments />,
    rightSection: <HiOutlineArrowSmRight />,
  },
}
