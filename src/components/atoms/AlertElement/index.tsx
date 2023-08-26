import * as React from 'react'

import Alert from '@mui/material/Alert'
import { AlertColor } from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'

type Props = {
  children?: React.ReactNode
  onClose?: (event: React.SyntheticEvent) => void;
  type: AlertColor
  variant?: 'standard' | 'filled' | 'outlined'
};

export const AlertElement: React.FC<Props> = (
  {
    children,
    onClose,
    type = 'success',
    variant = 'filled'
  }
): JSX.Element => {
  const setTitle = type.charAt(0).toUpperCase() + type.slice(1)

  return (
    <Alert
      severity={type}
      variant={variant}
      onClose={onClose}
    >
      <AlertTitle>{setTitle}</AlertTitle>
      {children}
    </Alert>
  )
}
