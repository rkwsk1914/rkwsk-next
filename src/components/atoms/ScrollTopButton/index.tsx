import * as React from 'react'

import { useGetDarkModeStyleClass } from '@/hooks/useGetDarkModeStyleClass'

import { ICON_DATA } from '@/const/IconData'

import styles from './style.module.scss'

type Props = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
};

export const ScrollTopButton: React.FC<Props> = (
  {
    onClick
  }
): JSX.Element => {
  const className = useGetDarkModeStyleClass(styles.btn, styles.dark)
  return (
    <button className={className} onClick={onClick}>
      {ICON_DATA.circleChevronUp}
    </button>
  )
}
