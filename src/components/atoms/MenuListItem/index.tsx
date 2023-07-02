import { memo } from 'react'

import Link from 'next/link'

import { useGetDarkModeStyleClass } from '@/hooks/useGetDarkModeStyleClass'
import { MenuDataType } from '@/types/MenuDataType'

import styles from './style.module.scss'


type Props = {
  data: MenuDataType
};

export const MenuListItem: React.FC<Props> = memo(({ data }): JSX.Element => {
  const liClassName = useGetDarkModeStyleClass(styles.li, styles.dark)

  return (
    <li className={liClassName}>
      <Link href={data.href}>{data.text}</Link>
    </li>
  )
})

MenuListItem.displayName = 'MenuListItem'
