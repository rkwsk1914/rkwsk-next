import * as React from 'react'

import Button from '@mui/material/Button'

import { MuiSizeTypes } from '@/types/MuiSize'

type Props = {
  children?: React.ReactNode
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
  variant?: 'contained' | 'outlined' | 'text'
  size?: MuiSizeTypes
  disabled?: boolean
  type?: 'submit' | 'button' | 'reset'
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
};

export const ButtonElement: React.FC<Props> = (
  {
    children,
    color,
    type = 'button',
    variant = 'contained',
    size = 'large',
    disabled,
    onClick
  }
): JSX.Element => {
  return (
    <Button
      type={type}
      color={color}
      variant={variant}
      size={size}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}
