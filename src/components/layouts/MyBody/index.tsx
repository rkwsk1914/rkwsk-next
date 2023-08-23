import { useContext } from 'react'

import { GLOBAL_NAV_DATA } from '@/const/page/GlobalNavData'

import { ScrollTopButton } from '@/components/atoms/ScrollTopButton'
import { MyFooter } from '@/components/layouts/MyFooter'
import { ThemeContextProvider, ThemeContext } from '@/components/layouts/Theme'
import { GlobalNavigation } from '@/components/organisms/GlobalNavigation'

import styles from './style.module.scss'

import { MenuDataType } from '@/types/MenuDataType'


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

  const getGlobalNavDataArray = (): MenuDataType[] => {
    const keys = Object.keys(GLOBAL_NAV_DATA)

    return keys.map(key => GLOBAL_NAV_DATA[key])
  }

  return (
    <main className={styles.content}>
      <header className={styles.header}>
        <GlobalNavigation
          menu={getGlobalNavDataArray()}
          isDark={isDarkModeCTX}
          callBackChangeTheme={() => {
            handleIsDarkMode(!isDarkModeCTX)
          }} />
      </header>
      <article className={styles.article}>
        {children}
      </article>
      <div className={styles.scrollButton}>
        <ScrollTopButton />
      </div>
      <MyFooter />
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
