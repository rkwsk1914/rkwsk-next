import { useState } from 'react'

import clsx from 'clsx'

import { useGetDarkModeStyleClass } from '@/hooks/useGetDarkModeStyleClass'

import { PlxComponent, ParallaxData } from '@/components/libraries/PlxComponent'
import { HistoryListMonthItem } from '@/components/molecules/HistoryListMonthItem'

import styles from './style.module.scss'

import { MonthType } from '@/types/MonthType'



interface MonthlyDateType {
  month?: MonthType,
  content?: React.ReactNode
}


type Props = {
  endElementClassName: string
  endPointClassName: string
  year: number | '現在' | 'now'
  yearPos: 'right' | 'left'
  isLastItem?: boolean
  monthlyDate: Array<MonthlyDateType>
};

export const HistoryListYearItem: React.FC<Props> = (
  {
    endElementClassName,
    endPointClassName,
    year,
    yearPos,
    isLastItem,
    monthlyDate
  }
): JSX.Element => {
  const liClassName = useGetDarkModeStyleClass(styles.li, styles.dark)

  const [isFixParallax, setIsFixParallax] = useState(false)

  const borderParallaxData: ParallaxData[] = [
    {
      start: 'self',
      end: endElementClassName,
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: "scaleY",
        }
      ],
    },
  ]

  const yearParallaxData: ParallaxData[] = [
    {
      start: 'self',
      end: endElementClassName,
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: "scale",
        }
      ],
    },
  ]

  return (
    <li
      className={
      clsx(liClassName,
        endPointClassName,
        {
          [styles.right]: yearPos === 'right',
          [styles.left]: yearPos === 'left',
        }
      )}>
      {!isLastItem && (
        <PlxComponent
          parallaxData={borderParallaxData}
          disabled={isFixParallax}
          onPlxEnd={() => { setIsFixParallax(true) }}
          wrapClassName={styles.border}
        />
      )}

      <PlxComponent
        parallaxData={yearParallaxData}
        disabled={isFixParallax}
        onPlxEnd={() => { setIsFixParallax(true) }}
        wrapClassName={styles.year}
      >
        <span>{year}</span>
      </PlxComponent>
      <div className={styles.content}>
        {monthlyDate.map((data, index) => (
          <HistoryListMonthItem
            key={index}
            endElementClassName={endElementClassName}
            month={data.month}>
            {data.content}
          </HistoryListMonthItem>
        )
      )}

      </div>
    </li>
  )
}
