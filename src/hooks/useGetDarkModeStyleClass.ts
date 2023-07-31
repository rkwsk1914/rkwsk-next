import { useTheme } from '@mui/material/styles'
import clsx from 'clsx'

export const useGetDarkModeStyleClass = (
  parentClassName: string, styleDark: string
): string => {
  const theme = useTheme()
  const isDarkMode = theme.palette.mode === 'dark'
  const className = clsx(parentClassName, {
    [styleDark]: isDarkMode,
  })
  return className
}
