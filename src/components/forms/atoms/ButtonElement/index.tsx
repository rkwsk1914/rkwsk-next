import * as React from 'react'

import Button from '@mui/material/Button'

import { MuiSizeTypes } from '@/types/MuiSize'

type Props = {
  children?: React.ReactNode
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
  variant?: 'contained' | 'outlined' | 'text'
  size?: MuiSizeTypes
  disabled?: boolean
};

export const ButtonElement: React.FC<Props> = (
  {
    children,
    color,
    variant,
    size,
    disabled
  }
): JSX.Element => {
  return (
    <Button
      color={color}
      variant={variant}
      size={size}
      disabled={disabled}
    >
      {children}
    </Button>
  )
}
