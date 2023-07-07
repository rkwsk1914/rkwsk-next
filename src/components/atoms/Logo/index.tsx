import * as React from 'react'

import Image from 'next/image'

import styles from './style.module.scss'

type Props = {
  children?: React.ReactNode
};

export const Logo: React.FC<Props> = (): JSX.Element => {
  return (
    <Image
      src='/logo.svg'
      alt='Ryo Kawasaki Front-End-Engineer'
      width={340}
      height={253}
      className={styles.image} />
  )
}
