import * as React from 'react'

import { ThemeButton } from '@/components/atoms/ThemeButton'
import { HamburgerMenu } from '@/components/organisms/HamburgerMenu'
import { MenuDataType } from '@/types/MenuDataType'

import styles from './style.module.scss'

type Props = {
  data: Array<MenuDataType>
  isDark: boolean,
  callBack?: (e: React.MouseEvent<HTMLButtonElement>) => void
};

export const GlobalNavigation: React.FC<Props> = (
  {
    data,
    isDark,
    callBack
  }
): JSX.Element => {
  return (
    <div className={styles.header}>
      <div className={styles.menu_btn}>
        <HamburgerMenu data={data}/>
      </div>
      {callBack && (
        <div className={styles.theme_btn}>
          <ThemeButton isDark={isDark} callBack={callBack}/>
        </div>
      )}
    </div>
  )
}
