import { useContext } from 'react'

import { Theme } from '@/components/layouts/Theme'
import { GlobalNavigation } from '@/components/organisms/GlobalNavigation'
import { GLOBAL_NAV_DATA } from '@/const/GlobalNavData'
import { ThemeContext } from '@/stores/ThemeContext'

import styles from './style.module.scss'

type Props = {
  children?: React.ReactNode
};

export const MyBody: React.FC<Props> = (
  {
    children
  }
): JSX.Element => {
  const {
    isDarkModeCTX,
    handleIsDarkMode
  }  = useContext(ThemeContext)

  return (
    <body className={styles.content}>
      <Theme isDark={isDarkModeCTX}>
        <div className={styles.nav}>
          <GlobalNavigation
            data={GLOBAL_NAV_DATA}
            isDark={isDarkModeCTX}
            callBack={() => {handleIsDarkMode(!isDarkModeCTX)}} />
        </div>

      </Theme>
    </body>
  )
}
