import { clsx } from 'clsx'
import React, { ButtonHTMLAttributes, CSSProperties, ReactNode, forwardRef } from 'react'

import { ComponentColor, ComponentSize } from '../../types'

import classes from './Button.module.scss'

type ButtonVariant = 'filled' | 'outlined' | 'ghost'
type ButtonLoadingPosition = 'start' | 'default' | 'end'
type ButtonJustify = 'start' | 'end' | 'center' | 'space-between' | 'space-around'

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> & {
  variant?: ButtonVariant
  color?: ComponentColor
  size?: ComponentSize
  radius?: ComponentSize
  loading?: boolean
  loadingPosition?: ButtonLoadingPosition
  leftSection?: ReactNode
  rightSection?: ReactNode
  fullWidth?: boolean
  justify?: ButtonJustify
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'filled',
      color = 'blue',
      size = 'md',
      radius = 'md',
      loading,
      loadingPosition = 'default',
      leftSection,
      rightSection,
      fullWidth,
      justify = 'center',
      className,
      children,
      style,
      ...props
    },
    ref
  ) => {
    const styles = {
      '--button-height': `var(--leaf-control-height-${size})`,

      '--button-bg': `var(--leaf-color-${color}-${variant}-bg)`,
      '--button-bd': `var(--leaf-color-${color}-${variant}-bd)`,
      '--button-tx': `var(--leaf-color-${color}-${variant}-tx)`,

      '--button-bg-hover': `var(--leaf-color-${color}-${variant}-bg-hover)`,
      '--button-bd-hover': `var(--leaf-color-${color}-${variant}-bd-hover)`,
      '--button-tx-hover': `var(--leaf-color-${color}-${variant}-tx-hover)`,

      '--button-fz': `var(--leaf-fz-${size})`,
      '--button-spacing': `var(--leaf-spacing-${size})`,
      '--button-radius': `var(--leaf-radius-${radius})`,
      '--button-justify': justify,
      ...style,
    } as CSSProperties

    const buttonSpinner = (
      <div className={classes.spinner}>
        <span className={classes.spinner__animate} />
      </div>
    )

    return (
      <button
        className={clsx(classes.root, className)}
        ref={ref}
        style={styles}
        {...(leftSection && { 'data-left': true })}
        {...(rightSection && { 'data-right': true })}
        {...(loading && { 'data-loading': loadingPosition })}
        {...(!children && { 'data-empty': true })}
        {...(fullWidth && { 'data-fullWidth': true })}
        {...props}
      >
        {loading && loadingPosition === 'start' && buttonSpinner}
        {(!loading || loadingPosition !== 'start') && leftSection}

        {loading && loadingPosition === 'default' && buttonSpinner}

        {!!children && <span className={classes.content}>{children}</span>}

        {loading && loadingPosition === 'end' && buttonSpinner}
        {(!loading || loadingPosition !== 'end') && rightSection}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
