import * as React from 'react'

import clsx from 'clsx'

import { Logo } from '@/components/atoms/Logo'
import { PlxComponent } from '@/components/atoms/PlxComponent'
import { useGetDarkModeStyleClass } from '@/hooks/useGetDarkModeStyleClass'


import styles from './style.module.scss'

type Props = {
  children?: React.ReactNode
};

export const HeaderLogo: React.FC<Props> = (
  {
    children
  }
): JSX.Element => {
  const className = useGetDarkModeStyleClass(styles.li, styles.dark)
  const parallaxData = [
    {
      start: 0,
      end: 500,
      properties: [
        {
          startValue: 1,
          endValue: 0.18,
          property: "scale",
        },
        {
          startValue: 0,
          endValue: -60,
          property: "translateY",
          unit: '%',
        },
      ],
    },
  ]

  return (
    <PlxComponent
      parallaxData={parallaxData}
      wrapClassName={clsx(styles.logoWrap)}>
      <div className={styles.logo}>
        <Logo />
      </div>
    </PlxComponent>
  )
}
