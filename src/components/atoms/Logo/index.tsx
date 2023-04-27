import * as React from 'react'

import Image from 'next/image'

import { useGetDarkModeStyleClass } from '@/hooks/useGetDarkModeStyleClass'

import styles from './style.module.scss'

type Props = {
  children?: React.ReactNode
};

export const Logo: React.FC<Props> = (): JSX.Element => {
  const className = useGetDarkModeStyleClass(styles.image, styles.dark)
  return (
    <Image
      src='/logo.png'
      alt='Ryo Kawasaki Front-End-Engineer'
      width={500}
      height={500}
      className={className} />
  )
}
