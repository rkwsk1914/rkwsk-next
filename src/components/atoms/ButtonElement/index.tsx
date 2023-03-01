import * as React from 'react';

import Button from '@mui/material/Button';

type Props = {
  children?: React.ReactNode
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
  variant?: 'contained' | 'outlined' | 'text'
  size?: 'small' | 'medium' | 'large'
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
  );
}
