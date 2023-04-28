import * as React from 'react'

import { HamburgerMenu } from '@/components/organisms/HamburgerMenu'
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
  return (
    <body className={styles.content}>
      <div className={styles.nav}>
        <HamburgerMenu data={GLOBAL_NAV_DATA} />
      </div>
      <main>
        {children}
      </main>
    </body>
  )
}
