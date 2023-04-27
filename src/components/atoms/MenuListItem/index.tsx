import { memo } from 'react'

import Link from 'next/link'

import { MenuDataType } from '@/types/MenuDataType'

import styles from './style.module.scss'


type Props = {
  data: MenuDataType
};

export const MenuListItem: React.FC<Props> = memo(({ data }): JSX.Element => {
  return (
    <li className={styles.li}>
      <Link href={data.href}>{data.text}</Link>
    </li>
  )
})

MenuListItem.displayName = 'MenuListItem'
