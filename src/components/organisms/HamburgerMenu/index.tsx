import { useState } from 'react'

import clsx from 'clsx'

import { MenuButton } from '@/components/atoms/MenuButton'
import { MenuList } from '@/components/molecules/MenuList'
import { useGetDarkModeStyleClass } from '@/hooks/useGetDarkModeStyleClass'
import { MenuDataType } from '@/types/MenuDataType'

import styles from './style.module.scss'

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

  const navClassName = useGetDarkModeStyleClass(styles.nav, styles.dark)

  return (
    <nav className={navClassName}>
      <div className={contentClassName}>
        <MenuList data={data}/>
      </div>
      <div className={styles.btn}>
        <MenuButton isOpen={isOpen} callBack={() => setIsOpen(!isOpen)}/>
      </div>
    </nav>
  )
}
