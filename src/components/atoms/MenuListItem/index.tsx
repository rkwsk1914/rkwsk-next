import { memo } from 'react'

import Link from 'next/link'

import { useGetDarkModeStyleClass } from '@/hooks/useGetDarkModeStyleClass'

import styles from './style.module.scss'

import { MenuDataType } from '@/types/MenuDataType'



type Props = {
  data: MenuDataType
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
};

export const MenuListItem: React.FC<Props> = memo(({
  data,
  onClick
}): JSX.Element => {
  const liClassName = useGetDarkModeStyleClass(styles.li, styles.dark)

  return (
    <li className={liClassName}>
      <Link href={data.href} onClick={onClick}>{data.text}</Link>
    </li>
  )
})

MenuListItem.displayName = 'MenuListItem'
