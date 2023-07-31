import * as React from 'react'

import clsx from 'clsx'

import { useGetDarkModeStyleClass } from '@/hooks/useGetDarkModeStyleClass'

import { HistoryListMonthItem } from '@/components/atoms/HistoryListMonthItem'

import styles from './style.module.scss'

import { MonthType } from '@/types/MonthType'



interface MonthlyDateType {
  month?: MonthType,
  content?: React.ReactNode
}


type Props = {
  year: number | '現在' | 'now'
  yearPos: 'right' | 'left'
  isLastItem?: boolean
  monthlyDate: Array<MonthlyDateType>
};

export const HistoryListYearItem: React.FC<Props> = (
  {
    year,
    yearPos,
    isLastItem,
    monthlyDate
  }
): JSX.Element => {
  const liClassName = useGetDarkModeStyleClass(styles.li, styles.dark)
  return (
    <li className={
      clsx(liClassName, {
        [styles.right]: yearPos === 'right',
        [styles.left]: yearPos === 'left',
      })}>
      {!isLastItem && <div className={styles.border} />}
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
