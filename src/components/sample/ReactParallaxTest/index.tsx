import React from 'react'

import { Parallax } from 'react-parallax'

import styles from './style.module.scss'

type Props = {
  children?: React.ReactNode
}

export const ReactParallaxTest: React.FC<Props> = (): JSX.Element => {
  return (
    <div className={styles.wrap}>
    <Parallax blur={10} bgImage="/cafe.jpg" bgImageAlt="the cat" strength={200}>
        Content goes here. Parallax height grows with content height.
    </Parallax>
    </div>
  )
}
