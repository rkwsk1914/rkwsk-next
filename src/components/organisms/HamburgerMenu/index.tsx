import { useState } from 'react'

import clsx from 'clsx'

import { useGetDarkModeStyleClass } from '@/hooks/useGetDarkModeStyleClass'

import { MenuButton } from '@/components/atoms/MenuButton'
import { MenuList } from '@/components/molecules/MenuList'

import styles from './style.module.scss'

import { MenuDataType } from '@/types/MenuDataType'


type Props = {
  data: Array<MenuDataType>
};

export const HamburgerMenu: React.FC<Props> = (
  {
    data
  }
): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const contentClassName = clsx(styles.content, {
    [styles.open]: isOpen,
  })

  const btnClassName = clsx(styles.btn, {
    [styles.open]: isOpen,
  })

  const navClassName = useGetDarkModeStyleClass(styles.nav, styles.dark)

  return (
    <nav className={navClassName}>
      <div className={contentClassName}>
        <MenuList data={data} onClick={() => {setIsOpen(!isOpen)}}/>
      </div>
      <div className={btnClassName}>
        <MenuButton isOpen={isOpen} callBack={() => setIsOpen(!isOpen)}/>
      </div>
    </nav>
  )
}
