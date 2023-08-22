import * as React from 'react'

import { animateScroll } from 'react-scroll'

import { useGetDarkModeStyleClass } from '@/hooks/useGetDarkModeStyleClass'

import { ICON_DATA } from '@/const/IconData'

import styles from './style.module.scss'

export const ScrollTopButton: React.FC = (): JSX.Element => {
  const className = useGetDarkModeStyleClass(styles.btn, styles.dark)

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    animateScroll.scrollToTop({
      smooth: true
    })
  }

  return (
    <button className={className} onClick={onClick}>
      {ICON_DATA.circleChevronUp}
    </button>
  )
}
