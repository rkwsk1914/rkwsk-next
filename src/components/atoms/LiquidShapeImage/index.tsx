import * as React from 'react'

import Image from 'next/image'

import { useGetDarkModeStyleClass } from '@/hooks/useGetDarkModeStyleClass'

import styles from './style.module.scss'

type Props = {
  image: Omit<React.ComponentProps<typeof Image>, 'alt' | 'className'>
};

export const LiquidShapeImage: React.FC<Props> = (
  {
    image
  }
): JSX.Element => {
  const className = useGetDarkModeStyleClass(styles.li, styles.dark)
  return (
    <div className={styles.container}>
      <div className={styles.fluid}></div>
      <div className={styles.fluid2}></div>
      <Image className={styles.image} alt={``} {...image} />
    </div>
  )
}
