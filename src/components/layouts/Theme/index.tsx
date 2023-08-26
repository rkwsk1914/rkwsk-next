import { createContext, useState, useCallback } from 'react'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import clsx from 'clsx'

import { useSessionStorage } from '@/hooks/useSessionStorage'

import { darkTheme, lightTheme } from '@/const/DarkTheme'

import { ThemeSwitch } from '@/components/forms/molecules/ThemeSwitch'

import styles from './style.module.scss'

import { SessionStorageDataValueType } from '@/types/SessionStorageDataType'
import { ThemeContextType } from '@/types/ThemeContext'


export const ThemeContext = createContext<ThemeContextType>({
  isDarkModeCTX: false,
  handleIsDarkMode: (isDarkModeCTX: boolean) => {}
})

type Props = {
  children?: React.ReactNode
  isDark?: boolean
  isTest?: boolean
};

export const ThemeContextProvider: React.FC<Props> = ({
  children,
  isDark = false,
  isTest
}) => {
  const {
    setSessionStorage,
    getSessionStorage
  } = useSessionStorage()

  const initThemeMode = () => {
    if (isTest) return isDark

    const value: SessionStorageDataValueType['themeMode'] = getSessionStorage('themeMode')
    if (!value) return isDark

    return (value === 'dark') ? true : false
  }

  const [isDarkModeCTX, setIsDarkModeCTX] = useState<boolean>(initThemeMode())

  const handleIsDarkMode = useCallback((isDarkModeCTX: boolean) => {
    setIsDarkModeCTX(isDarkModeCTX)
    setSessionStorage('themeMode', isDarkModeCTX)
  }, [setSessionStorage])

  const contentClassName = clsx(styles.content, {
    [styles.dark]: isDarkModeCTX,
  }, {
    [styles.is_test]: isTest,
  })

  return (
    <ThemeContext.Provider value={{
      isDarkModeCTX,
      handleIsDarkMode
    }
    }>
      <ThemeProvider theme={isDarkModeCTX ? darkTheme : lightTheme}>
        <CssBaseline />
        <div className={contentClassName}>
          {isTest &&
            <ThemeSwitch
              checked={isDarkModeCTX}
              onChange={() => handleIsDarkMode(!isDarkModeCTX)} />
          }
          {children}
        </div>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
