import * as React from 'react'

import { HistoryListYearItem } from '@/components/molecules/HistoryListYearItem'

import styles from './style.module.scss'

type Props = {
  data: Array<Omit<React.ComponentProps<typeof HistoryListYearItem>, 'yearPos'>>
};

export const HistoryList: React.FC<Props> = (
  {
    data
  }
): JSX.Element => {
  return (
    <ul className={styles.ul}>
      {data.map((item, index) => {
        return (
          <HistoryListYearItem
            key={index}
            year={item.year}
            monthlyDate={item.monthlyDate}
            isLastItem={data.length === (index + 1)}
            yearPos={(index % 2 === 0) ? 'left' : 'right'}
          />
        )
      })}
    </ul>
  )
}
