import * as React from 'react'

import { ThemeButton } from '@/components/atoms/ThemeButton'
import { HamburgerMenu } from '@/components/organisms/HamburgerMenu'

import styles from './style.module.scss'

import { MenuDataType } from '@/types/MenuDataType'


type Props = {
  data: Array<MenuDataType>
  isDark: boolean,
  callBackChangeTheme?: (e: React.MouseEvent<HTMLButtonElement>) => void
};

export const GlobalNavigation: React.FC<Props> = (
  {
    data,
    isDark,
    callBackChangeTheme
  }
): JSX.Element => {
  return (
    <div className={styles.header}>
      <div className={styles.menu_btn}>
        <HamburgerMenu data={data}/>
      </div>
      {callBackChangeTheme && (
        <div className={styles.theme_btn}>
          <ThemeButton isDark={isDark} callBack={callBackChangeTheme}/>
        </div>
      )}
    </div>
  )
}
