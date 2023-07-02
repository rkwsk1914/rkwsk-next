import React from "react"

import clsx from "clsx"
import Plx from "react-plx"

import styles from './style.module.scss'

const parallaxData = [
  {
    start: 0,
    end: 300,
    properties: [
      {
        startValue: 1,
        endValue: 0,
        property: "opacity",
      },
    ],
  },
]

export const PlxTest: React.FC = (): JSX.Element => {
  return (
    <Plx className={styles.wrap} parallaxData={parallaxData}>
      <div className={clsx(styles.div, styles.fix)} />
    </Plx>
  )
}