import { createContext, useState, useCallback } from 'react'

import { Theme } from '@/components/layouts/Theme'
import { ThemeContextType } from '@/types/ThemeContext'

export const ThemeContext = createContext<ThemeContextType>({
  isDarkModeCTX: false,
  handleIsDarkMode: (isDarkModeCTX: boolean) => {}
})

type Props = {
  children?: React.ReactNode
  defaultMode: 'light' | 'dark'
  isTest?: boolean
};

export const ThemeContextProvider: React.FC<Props> = ({
  children,
  defaultMode,
  isTest
}) => {
  const [isDarkModeCTX, setIsDarkModeCTX] = useState<boolean>(defaultMode === 'dark')

  const handleIsDarkMode = useCallback((isDarkModeCTX: boolean) => {
    setIsDarkModeCTX(isDarkModeCTX)
  }, [])

  return (
    <ThemeContext.Provider value={{
      isDarkModeCTX,
      handleIsDarkMode
    }
    }>
      <Theme isDark={isDarkModeCTX} isTest={isTest}>
        {children}
      </Theme>
    </ThemeContext.Provider>
  )
}
