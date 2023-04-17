import { createContext, useState, useCallback } from 'react'

import { ThemeContextType } from '@/types/ThemeContext'

export const ThemeContext = createContext<ThemeContextType>({
  isDarkModeCTX: false,
  handleIsDarkMode: (isDarkModeCTX: boolean) => {}
})

type Props = {
  children?: React.ReactNode
  defaultMode: 'light' | 'dark'
};

export const ThemeContextProvider: React.FC<Props> = ({
  children,
  defaultMode
}) => {
  const [isDarkModeCTX, setIsDarkModeCTX] = useState<boolean>(defaultMode === 'dark')

  const handleIsDarkMode = useCallback((isDarkModeCTX: boolean) => {
    console.log('IN')
    setIsDarkModeCTX(isDarkModeCTX)
  }, [])

  return (
    <ThemeContext.Provider value={{
      isDarkModeCTX,
      handleIsDarkMode
    }
    }>
      {children}
    </ThemeContext.Provider>
  )
}
