import * as React from 'react'

import clsx from 'clsx'
import { PlxItem } from "react-plx"

import { Logo } from '@/components/atoms/Logo'
import { PlxComponent } from '@/components/atoms/PlxComponent'

import styles from './style.module.scss'

type Props = {};

export const HeaderLogo: React.FC<Props> = ({}): JSX.Element => {
  const parallaxData: PlxItem[] = [
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
