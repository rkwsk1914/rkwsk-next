import * as React from 'react'

import clsx from 'clsx'

import { HistoryListMonthItem } from '@/components/atoms/HistoryListMonthItem'
import { useGetDarkModeStyleClass } from '@/hooks/useGetDarkModeStyleClass'
import { MonthType } from '@/types/MonthType'


import styles from './style.module.scss'

interface MonthlyDateType {
  month?: MonthType,
  content?: React.ReactNode
}


type Props = {
  year: number
  rightOrLeft: 'right' | 'left'
  monthlyDate: Array<MonthlyDateType>
};

export const HistoryListYearItem: React.FC<Props> = (
  {
    year,
    rightOrLeft,
    monthlyDate
  }
): JSX.Element => {
  const liClassName = useGetDarkModeStyleClass(styles.li, styles.dark)
  return (
    <li className={
      clsx(liClassName, {
        [styles.right]: rightOrLeft === 'right',
        [styles.left]: rightOrLeft === 'left'
      })}>
      <div className={styles.year}>
      <span>{year}</span>
      </div>
      <div className={styles.content}>
        {monthlyDate.map((data, index) => (
          <HistoryListMonthItem
            key={index}
            month={data.month}>
            {data.content}
          </HistoryListMonthItem>
        )
      )}

      </div>
    </li>
  )
}
