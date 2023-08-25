import * as React from 'react'

import styles from './style.module.scss'

type Props = {
  children?: React.ReactNode
  scrollPxLength?: number
};

export const SAMPLE_END_ELEMENT_CLASS_NAME = '.end'

export const ScrollWrap: React.FC<Props> = (
  {
    children,
    scrollPxLength = 1000
  }
): JSX.Element => {
  return (
    <div className={styles.inner} style={{ height: `${scrollPxLength}px` }}>
      {children}
      <div className='end'></div>
    </div>
  )
}
