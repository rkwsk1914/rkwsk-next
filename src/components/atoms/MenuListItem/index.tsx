import * as React from 'react'

import Link from 'next/link'

import { MenuDataType } from '@/types/MenuDataType'

import styles from './style.module.scss'


type Props = {
  data: MenuDataType
};

const content: React.FC<Props> = (
  {data}
): JSX.Element => {
  return (
    <li className={styles.li}>
      <Link href={data.href}>{data.text}</Link>
    </li>
  )
}

export const MenuListItem =  React.memo(content)
