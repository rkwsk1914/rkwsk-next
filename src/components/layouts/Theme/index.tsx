import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { darkTheme } from '@/const/DarkTheme';

type Props = {
  children?: React.ReactNode;
};

export const Theme: React.FC<Props> = (
  {children}
): JSX.Element => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
