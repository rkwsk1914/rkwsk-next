import * as React from 'react'


import { MenuListItem } from '@/components/atoms/MenuListItem'
import { useGetDarkModeStyleClass } from '@/hooks/useGetDarkModeStyleClass'
import { MenuDataType } from '@/types/MenuDataType'

import styles from './style.module.scss'


type Props = {
  data: Array<MenuDataType>
};

export const MenuList: React.FC<Props> = ({ data }): JSX.Element => {
  const className = useGetDarkModeStyleClass(styles.ul, styles.dark)

  return (
    <ul className={className}>
      {data.map((item, index) => (
        <MenuListItem key={index} data={item}/>
      ))}
    </ul>
  )
}
