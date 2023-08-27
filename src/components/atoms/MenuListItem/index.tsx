import React from 'react'
import { memo } from 'react'

import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'

import { useGetDarkModeStyleClass } from '@/hooks/useGetDarkModeStyleClass'


import styles from './style.module.scss'

import { MenuDataType } from '@/types/MenuDataType'

type Props = {
  data: MenuDataType
  onClick?: () => void
};


export const MenuListItem: React.FC<Props> = memo(({
  data,
  onClick
}): JSX.Element => {
  const liClassName = useGetDarkModeStyleClass(styles.li, styles.dark)

  return (
    <li className={liClassName}>
      {data.href ?
        <Link href={data.href} onClick={onClick}>{data.text}</Link> :
        <ScrollLink to={data.id} smooth onClick={onClick}>{data.text}</ScrollLink>
      }
    </li>
  )
})

MenuListItem.displayName = 'MenuListItem'
