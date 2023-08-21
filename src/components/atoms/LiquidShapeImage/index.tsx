import * as React from 'react'

import Image from 'next/image'

import { useGetDarkModeStyleClass } from '@/hooks/useGetDarkModeStyleClass'

import styles from './style.module.scss'

type Props = {
  image: Omit<React.ComponentProps<typeof Image>, 'className'>
};

export const LiquidShapeImage: React.FC<Props> = (
  {
    image,
  }
): JSX.Element => {
  const classNameContainer = useGetDarkModeStyleClass(styles.container, styles.dark)
  return (
    <div className={classNameContainer}>
      <div className={styles.fluid} />
      <div className={styles.fluid2} />
      <Image className={styles.image} {...image} />
    </div>
  )
}
