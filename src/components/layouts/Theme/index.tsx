import { createContext, useState, useCallback, useEffect } from 'react'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import clsx from 'clsx'

import { useSessionStorage } from '@/hooks/useSessionStrage'

import { darkTheme, lightTheme } from '@/const/DarkTheme'

import { ThemeSwitch } from '@/components/forms/molecules/ThemeSwitch'


import styles from './style.module.scss'

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
  const [isDarkModeCTX, setIsDarkModeCTX] = useState<boolean>(isDark)
  const {
    getFromSessionStorage,
    saveToSessionStorage
  } = useSessionStorage()

  const handleIsDarkMode = useCallback((isDarkModeCTX: boolean) => {
    setIsDarkModeCTX(isDarkModeCTX)
    saveToSessionStorage('isDark', `${isDarkModeCTX}`)
  }, [saveToSessionStorage])

  const contentClassName = clsx(styles.content, {
    [styles.dark]: isDarkModeCTX,
  }, {
    [styles.is_test]: isTest,
  })

  useEffect(() => {
    const nowSessionIsDark = getFromSessionStorage('isDark')
    if(!nowSessionIsDark) return

    setIsDarkModeCTX(nowSessionIsDark === 'true' ? true : false)
  }, [isDarkModeCTX, getFromSessionStorage, saveToSessionStorage])

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
