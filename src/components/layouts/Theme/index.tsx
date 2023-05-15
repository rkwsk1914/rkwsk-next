import { useContext } from 'react'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import clsx from 'clsx'

import { ThemeSwitch } from '@/components/forms/molecules/ThemeSwitch'
import { darkTheme, lightTheme } from '@/const/DarkTheme'
import { ThemeContext } from '@/stores/ThemeContext'

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
  const {
    isDarkModeCTX,
    handleIsDarkMode
  }  = useContext(ThemeContext)

  const className = clsx(styles.content, {
    [styles.dark]: isDarkModeCTX,
  })

  return (
    <ThemeProvider theme={isDarkModeCTX ? darkTheme : lightTheme}>
    <CssBaseline />
      {isTest ?
        <div className={className}>
          <ThemeSwitch checked={isDarkModeCTX} onChange={() => handleIsDarkMode(!isDarkModeCTX)} />
          {children}
        </div> :
        <>{children}</>
      }
  </ThemeProvider>
  )
}
