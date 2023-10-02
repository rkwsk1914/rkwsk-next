import { useContext } from 'react'

import { useRouter } from "next/router"

import { GLOBAL_NAV_DATA, GLOBAL_TOP_NAV_DATA } from '@/const/page/GlobalNavData'

import { ScrollTopButton } from '@/components/atoms/ScrollTopButton'
import { MyFooter } from '@/components/layouts/MyFooter'
import { ThemeContext } from '@/components/layouts/Theme'
import { GlobalNavigation } from '@/components/organisms/GlobalNavigation'

import styles from './style.module.scss'

import { MenuDataType } from '@/types/MenuDataType'

type ContentProps = {
  children?: React.ReactNode
};

type Props = {
  children?: React.ReactNode
};

const Content: React.FC<ContentProps> = (
  {
    children
  }
): JSX.Element => {
  const {
    isDarkModeCTX,
    handleIsDarkMode
  }  = useContext(ThemeContext)

  const router = useRouter()
  const a = ""

  const getGlobalNavDataArray = (): MenuDataType[] => {
    const data = (router.pathname === '/') ? GLOBAL_TOP_NAV_DATA : GLOBAL_NAV_DATA
    const keys = Object.keys(data)

    return keys.map(key => data[key])
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
    children,
  }
): JSX.Element => {
  return (
    <Content>{children}</Content>
  )
}
