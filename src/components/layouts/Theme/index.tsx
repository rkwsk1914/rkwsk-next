import { useState } from 'react'


import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import clsx from 'clsx'

import { ThemeSwitch } from '@/components/forms/molecules/ThemeSwitch'
import { darkTheme, lightTheme } from '@/const/DarkTheme'

import styles from './style.module.scss'


type Props = {
  children?: React.ReactNode
  isDark?: boolean
  isTest?: boolean
};

export const Theme: React.FC<Props> = (
  {
    children,
    isDark = false,
    isTest
  }
): JSX.Element => {
  const [isDarkMode, setIsDarkMode] = useState(isDark)
  const className = clsx(styles.content, {
    [styles.dark]: isDarkMode,
  })

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
        {isTest ?
          <div className={className}>
            <ThemeSwitch checked={isDarkMode} onChange={() => setIsDarkMode(!isDarkMode)} />
            {children}
          </div> :
          <>{children}</>
        }
    </ThemeProvider>
  )
}
