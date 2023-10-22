import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import { vi } from 'vitest'

import Button from './Button'

describe('Button', () => {
  it('renders children', () => {
    const { getByText } = render(<Button>Content</Button>)

    expect(getByText('Content')).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn()

    const { getByRole } = render(<Button onClick={handleClick}>Content</Button>)
    fireEvent.click(getByRole('button'))

    expect(handleClick).toHaveBeenCalled()
  })

  it('applies the correct styles based on props', () => {
    const { getByRole } = render(
      <Button color="red" radius="sm" size="lg" variant="outlined">
        Styled button
      </Button>
    )

    const button = getByRole('button')
    expect(button).toHaveStyle({
      '--button-height': 'var(--leaf-control-height-lg)',
      '--button-bg': 'var(--leaf-color-red-outlined-bg)',
      '--button-bd': 'var(--leaf-color-red-outlined-bd)',
      '--button-tx': 'var(--leaf-color-red-outlined-tx)',
      '--button-bg-hover': 'var(--leaf-color-red-outlined-bg-hover)',
      '--button-bd-hover': 'var(--leaf-color-red-outlined-bd-hover)',
      '--button-tx-hover': 'var(--leaf-color-red-outlined-tx-hover)',
      '--button-fz': 'var(--leaf-fz-lg)',
      '--button-spacing': 'var(--leaf-spacing-lg)',
      '--button-radius': 'var(--leaf-radius-sm)',
      '--button-justify': 'center',
    })
  })

  it('disables the button when disabled', () => {
    const { getByRole } = render(<Button disabled>Disabled button</Button>)

    const button = getByRole('button')
    expect(button).toBeDisabled()
  })

  it('shows loading icon when loading', () => {
    const { getByRole } = render(<Button loading>Loading button</Button>)

    const button = getByRole('button')
    expect(button).toHaveAttribute('data-loading')
  })

  it('has data-left attribute when leftSection prop is passed', () => {
    const { getByRole } = render(<Button leftSection="left">Left section</Button>)

    const button = getByRole('button')
    expect(button).toHaveAttribute('data-left')
  })

  it('has data-right attribute when rightSection prop is passed', () => {
    const { getByRole } = render(<Button rightSection="right">Right section</Button>)

    const button = getByRole('button')
    expect(button).toHaveAttribute('data-right')
  })

  it('has data-empty attribute when button has no children', () => {
    const { getByRole } = render(<Button />)

    const button = getByRole('button')
    expect(button).toHaveAttribute('data-empty')
  })
})
