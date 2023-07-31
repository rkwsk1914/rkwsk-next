import * as React from 'react'

import Image from 'next/image'

import styles from './style.module.scss'


type Props = {
  children?: React.ReactNode
  imgSrc: string
};

export const DotViewBackGroundSection: React.FC<Props> = ({
  children,
  imgSrc
}): JSX.Element => {
  return (
    <section className={styles.wrap}>
      <div className={styles.content}>{children}</div>
      <div className={styles.bg_dot}></div>
      <Image
        src={imgSrc}
        alt='background-image'
        width={500}
        height={500}
        className={styles.image} />
    </section>
  )
}
