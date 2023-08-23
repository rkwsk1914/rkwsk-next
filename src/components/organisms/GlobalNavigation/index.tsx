import { useState } from 'react'

import clsx from 'clsx'

import { useGetDarkModeStyleClass } from '@/hooks/useGetDarkModeStyleClass'

import { MenuButton } from '@/components/atoms/MenuButton'
import { ThemeButton } from '@/components/atoms/ThemeButton'
import { MenuList } from '@/components/molecules/MenuList'

import styles from './style.module.scss'

import { MenuDataType } from '@/types/MenuDataType'

type Props = {
  menu: Array<MenuDataType>
  isDark: boolean,
  callBackChangeTheme?: (e: React.MouseEvent<HTMLButtonElement>) => void
  slideInFrom?: 'top' | 'right' | 'bottom' | 'left'
};

type OpenMenuContentProps = {
  isOpen: boolean
  onClick?: () => void,
} & Props;

const OpenMenuContent: React.FC<OpenMenuContentProps> = ({
  isOpen,
  onClick,
  menu,
  isDark,
  slideInFrom,
  callBackChangeTheme
}): JSX.Element => {
  const openContentClassName = useGetDarkModeStyleClass(styles.open_content, styles.dark)

  const contentClassName = clsx(openContentClassName, {
    [styles.open]: isOpen,
    [styles.top]: slideInFrom === 'top',
    [styles.bottom]: slideInFrom === 'bottom',
    [styles.right]: slideInFrom === 'right',
    [styles.left]: slideInFrom === 'left',
  })

  return (
    <div className={contentClassName}>
      <div className={styles.btn_area}>
        {callBackChangeTheme && (
          <div className={styles.menu_btn}>
            <ThemeButton isDark={isDark} callBack={callBackChangeTheme}/>
          </div>
        )}
        <div className={styles.menu_btn}>
          <MenuButton isOpen={isOpen} callBack={onClick}/>
        </div>
      </div>


      <MenuList data={menu} onClick={onClick} type='horizontality'/>
    </div>
  )
}

export const GlobalNavigation: React.FC<Props> = (
  {
    menu,
    isDark,
    callBackChangeTheme,
    slideInFrom = 'top'
  }
): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const navClassName = useGetDarkModeStyleClass(styles.nav, styles.dark)

  return (
    <nav className={navClassName}>
      <div className={styles.large_screen_menu_list}>
        <MenuList data={menu} type='horizontality' />
      </div>
      <OpenMenuContent
        menu={menu}
        isOpen={isOpen}
        isDark={isDark}
        onClick={() => setIsOpen(!isOpen)}
        slideInFrom={slideInFrom}
        callBackChangeTheme={callBackChangeTheme}
      />
      {callBackChangeTheme && (
        <div className={styles.menu_btn}>
          <ThemeButton isDark={isDark} callBack={callBackChangeTheme}/>
        </div>
      )}
      <div className={styles.menu_btn}>
        <MenuButton isOpen={isOpen} callBack={() => setIsOpen(!isOpen)}/>
      </div>
    </nav>
  )
}
