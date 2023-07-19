import { memo } from 'react'


import { MenuListItem } from '@/components/atoms/MenuListItem'

import styles from './style.module.scss'

import { MenuDataType } from '@/types/MenuDataType'



type Props = {
  data: Array<MenuDataType>
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
};

export const MenuList: React.FC<Props> = memo(({
  data,
  onClick
}): JSX.Element => {

  return (
    <ul className={styles.ul}>
      {data.map((item, index) => (
        <MenuListItem key={index} data={item} onClick={onClick} />
      ))}
    </ul>
  )
})

MenuList.displayName = 'MenuList'
