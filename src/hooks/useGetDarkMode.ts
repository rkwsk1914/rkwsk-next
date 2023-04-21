import { useTheme } from '@mui/material/styles'

export function useGetDarkMode() {
  const theme = useTheme()
  const isDarkMode = theme.palette.mode === 'dark'
  return isDarkMode
}