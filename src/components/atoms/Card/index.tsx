import * as React from 'react'


import { useGetDarkModeStyleClass } from '@/hooks/useGetDarkModeStyleClass'

import styles from './style.module.scss'

type Props = {
  title?: string
  children?: React.ReactNode
};

export const Card: React.FC<Props> = ({
  title,
  children
}): JSX.Element => {
  const cardClassName = useGetDarkModeStyleClass(styles.card, styles.dark)
  return (
    <div className={cardClassName}>
      {title && <div className={styles.head}>{title}</div>}
      <div className={styles.body}>
        {children}
      </div>
    </div>
  )
}
