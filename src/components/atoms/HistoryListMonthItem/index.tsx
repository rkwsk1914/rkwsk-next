import * as React from 'react'

import { useGetDarkModeStyleClass } from '@/hooks/useGetDarkModeStyleClass'
import { MonthType } from '@/types/MonthType'

import styles from './style.module.scss'

type Props = {
  month?: MonthType
  children?: React.ReactNode
};

export const HistoryListMonthItem: React.FC<Props> = (
  {
    children,
    month
  }
): JSX.Element => {
  const boxClassName = useGetDarkModeStyleClass(styles.box, styles.dark)
  return (
    <div className={boxClassName}>
      {month && <span className={styles.month}>{month}月</span>}
      <p className={styles.content}>{children}</p>
    </div>
  )
}
