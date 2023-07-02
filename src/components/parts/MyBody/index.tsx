import { useContext } from 'react'

import { ThemeContextProvider, ThemeContext } from '@/components/layouts/Theme'
import { GlobalNavigation } from '@/components/organisms/GlobalNavigation'
import { GLOBAL_NAV_DATA } from '@/const/GlobalNavData'

import styles from './style.module.scss'

type Props = {
  children?: React.ReactNode
};

const Content: React.FC<Props> = (
  {
    children
  }
): JSX.Element => {
  const {
    isDarkModeCTX,
    handleIsDarkMode
  }  = useContext(ThemeContext)

  return (
    <main className={styles.content}>
      <header className={styles.header}>
        <GlobalNavigation
          data={GLOBAL_NAV_DATA}
          isDark={isDarkModeCTX}
          callBackChangeTheme={() => {
            handleIsDarkMode(!isDarkModeCTX)
          }} />
      </header>
      <article className={styles.article}>
        {children}
      </article>
    </main>
  )
}

export const MyBody: React.FC<Props> = (
  {
    children
  }
): JSX.Element => {
  return (
    <ThemeContextProvider>
      <Content>{children}</Content>
    </ThemeContextProvider>
  )
}
