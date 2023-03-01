import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { darkTheme, lightTheme } from '@/const/DarkTheme';

type Props = {
  children?: React.ReactNode
  isDark?: boolean
};

export const Theme: React.FC<Props> = (
  {
    children,
    isDark
  }
): JSX.Element => {
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
