import { useContext } from 'react'

import { GLOBAL_NAV_DATA } from '@/const/page/GlobalNavData'

import { ThemeContextProvider, ThemeContext } from '@/components/layouts/Theme'
import { GlobalNavigation } from '@/components/organisms/GlobalNavigation'

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
      <footer></footer>
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
