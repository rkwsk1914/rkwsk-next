import { useState } from 'react'

import { Theme } from '@/components/layouts/Theme'
import { GlobalNavigation } from '@/components/organisms/GlobalNavigation'
import { GLOBAL_NAV_DATA } from '@/const/GlobalNavData'

import styles from './style.module.scss'

type Props = {
  children?: React.ReactNode
};

export const MyBody: React.FC<Props> = (
  {
    children
  }
): JSX.Element => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  return (
    <Theme isDark={isDarkMode}>
      <body className={styles.content}>
        <div className={styles.nav}>
          <GlobalNavigation
            data={GLOBAL_NAV_DATA}
            isDark={isDarkMode}
            callBack={() => {setIsDarkMode(!isDarkMode)}} />
        </div>
        <main>
          {children}
        </main>
      </body>
    </Theme>
  )
}
