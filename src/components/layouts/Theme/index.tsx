import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { darkTheme } from '@/const/DarkTheme';

type Props = {
  children?: React.ReactNode
  theme?: any
};

export const Theme: React.FC<Props> = (
  {
    children,
    theme = darkTheme
  }
): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
