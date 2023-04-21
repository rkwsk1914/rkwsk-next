import * as React from 'react'

import Link from 'next/link'

import { useGetDarkModeStyleClass } from '@/hooks/useGetDarkModeStyleClass'
import { MenuDataType } from '@/types/MenuDataType'

import styles from './style.module.scss'


type Props = {
  data: MenuDataType
};

const Content: React.FC<Props> = ({ data }): JSX.Element => {
  const className = useGetDarkModeStyleClass(styles.li, styles.dark)
  return (
    <li className={className}>
      <Link href={data.href}>{data.text}</Link>
    </li>
  )
}

export const MenuListItem =  React.memo(Content)
