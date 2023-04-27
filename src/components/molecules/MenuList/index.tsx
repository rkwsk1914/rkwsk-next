import { memo } from 'react'


import { MenuListItem } from '@/components/atoms/MenuListItem'
import { MenuDataType } from '@/types/MenuDataType'

import styles from './style.module.scss'


type Props = {
  data: Array<MenuDataType>
};

export const MenuList: React.FC<Props> = memo(({ data }): JSX.Element => {

  return (
    <ul className={styles.ul}>
      {data.map((item, index) => (
        <MenuListItem key={index} data={item}/>
      ))}
    </ul>
  )
})

MenuList.displayName = 'MenuList'
