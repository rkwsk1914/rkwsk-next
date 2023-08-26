import * as React from 'react'

import { HistoryListYearItem } from '@/components/organisms/HistoryListYearItem'

import styles from './style.module.scss'

type Props = {
  data: Array<Omit<React.ComponentProps<typeof HistoryListYearItem>, 'yearPos' | 'endPointClassName' | 'endElementClassName'>>
};

export const HistoryList: React.FC<Props> = (
  {
    data
  }
): JSX.Element => {
  return (
    <>
      <ul className={styles.ul}>
        {data.map((item, index) => {
          return (
            <HistoryListYearItem
              endPointClassName={`history-list-year-item-${index}`}
              endElementClassName={`.history-list-year-item-${(index + 1 === data.length) ? 'end' : index + 1}`}
              key={index}
              year={item.year}
              monthlyDate={item.monthlyDate}
              isLastItem={data.length === (index + 1)}
              yearPos={(index % 2 === 0) ? 'left' : 'right'}
            />
          )
        })}
      </ul>
      <div className='history-list-year-item-end'></div>
    </>
  )
}
