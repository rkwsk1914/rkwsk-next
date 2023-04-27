import { useState } from 'react'

import clsx from 'clsx'

import { MenuButton } from '@/components/atoms/MenuButton'
import { MenuList } from '@/components/molecules/MenuList'
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

  const contentClass = clsx(styles.content, {
    [styles.open]: isOpen,
  })

  return (
    <nav className={styles.nav}>
      <div className={contentClass}>
        { (isOpen) ? <MenuList data={data}/> : <></> }
      </div>
      <MenuButton isOpen={isOpen} callBack={() => setIsOpen(!isOpen)}/>
    </nav>
  )
}
