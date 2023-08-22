import React from 'react'
import { memo } from 'react'

import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'

import { useGetDarkModeStyleClass } from '@/hooks/useGetDarkModeStyleClass'


import styles from './style.module.scss'

import { MenuDataType } from '@/types/MenuDataType'

type Props = {
  data: MenuDataType
};

export const MenuListItem: React.FC<Props> = memo(({
  data,
}): JSX.Element => {
  const liClassName = useGetDarkModeStyleClass(styles.li, styles.dark)

  const isScrollLink = (href: string): boolean => {
    const regex = /^#.*/
    return regex.test(href)
  }

  return (
    <li className={liClassName}>
      {isScrollLink(data.href) ?
        <ScrollLink to={data.href} smooth>{data.text}</ScrollLink> :
        <Link href={data.href}>{data.text}</Link>
      }
    </li>
  )
})

MenuListItem.displayName = 'MenuListItem'
