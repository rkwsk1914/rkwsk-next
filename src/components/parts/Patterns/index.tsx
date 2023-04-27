import * as React from 'react'

import { useGetDarkModeStyleClass } from '@/hooks/useGetDarkModeStyleClass'

import styles from './style.module.scss'

type Props = {
  children?: React.ReactNode
};

export const Patterns: React.FC<Props> = (
  {
    children
  }
): JSX.Element => {
  const className = useGetDarkModeStyleClass(styles.color_pattern_box, styles.dark)
  return (
    <div className={className}>
      <h1>Color Patterns</h1>
      <p><span>accent text color</span></p>
      <div className={styles.main}></div>
    </div>
  )
}
