import { createTheme } from '@mui/material/styles'

import { colors } from './../../tailwind/colors'


export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: colors.darkBg
    }
  },
})

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: colors.lightBg
    }
  },
})
