import '@/styles/globals.css'

import { ThemeContextProvider } from '@/components/layouts/Theme'

import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider isDark={true}>
      <Component {...pageProps} />
    </ThemeContextProvider>
  )
}
