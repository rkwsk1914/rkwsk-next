import { memo } from 'react'

import clsx from 'clsx'

import { MenuListItem } from '@/components/atoms/MenuListItem'

import styles from './style.module.scss'

import { MenuDataType } from '@/types/MenuDataType'



type Props = {
  data: Array<MenuDataType>
  onClick?: () => void
  type?: 'vertical' | 'horizontality'
};

export const MenuList: React.FC<Props> = memo(({
  data,
  onClick,
  type = 'vertical'
}): JSX.Element => {

  const ulClassName = clsx(styles.ul, {
    [styles.horizontality]: type === 'horizontality',
  })

  return (
    <ul className={ulClassName}>
      {data.map((item, index) => (
        <MenuListItem key={index} data={item} onClick={onClick} />
      ))}
    </ul>
  )
})

MenuList.displayName = 'MenuList'
