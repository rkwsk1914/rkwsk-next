import * as React from 'react'

import Image from 'next/image'

import { useGetDarkModeStyleClass } from '@/hooks/useGetDarkModeStyleClass'

import styles from './style.module.scss'

type Props = {
  image: Omit<React.ComponentProps<typeof Image>, 'className' | 'alt'>
  alt: string
};

export const LiquidShapeImage: React.FC<Props> = (
  {
    image,
    alt
  }
): JSX.Element => {
  const classNameContainer = useGetDarkModeStyleClass(styles.container, styles.dark)
  return (
    <div className={classNameContainer}>
      <div className={styles.liquid} />
      <div className={styles.liquid2} />
      <Image className={styles.image} alt={alt} {...image} />
    </div>
  )
}
