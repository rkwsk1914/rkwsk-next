import { useState } from 'react'

import { useGetDarkModeStyleClass } from '@/hooks/useGetDarkModeStyleClass'

import { PlxComponent, ParallaxData } from '@/components/libraries/PlxComponent'

import styles from './style.module.scss'

import { MonthType } from '@/types/MonthType'


type Props = {
  month?: MonthType
  children?: React.ReactNode
  endElementClassName: string
};

export const HistoryListMonthItem: React.FC<Props> = (
  {
    children,
    month,
    endElementClassName
  }
): JSX.Element => {
  const boxClassName = useGetDarkModeStyleClass(styles.box, styles.dark)

  const [isFixParallax, setIsFixParallax] = useState(false)

  const parallaxData: ParallaxData[] = [
    {
      start: 'self',
      end: endElementClassName,
      endOffset: '200px',
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: "opacity",
        },
        {
          startValue: 100,
          endValue: 0,
          property: "translateY",
        }
      ],
    },
  ]

  return (
    <PlxComponent
      parallaxData={parallaxData}
      disabled={isFixParallax}
      onPlxEnd={() => { setIsFixParallax(true) }}
      wrapClassName={boxClassName}
    >
      {month && <span className={styles.month}>{month}月</span>}
      <p className={styles.content}>{children}</p>
    </PlxComponent>
  )
}
