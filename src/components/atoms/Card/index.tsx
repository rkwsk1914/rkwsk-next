import * as React from 'react'

import { useGetDarkModeStyleClass } from '@/hooks/useGetDarkModeStyleClass'

import styles from './style.module.scss'

type RefProps = {
  title?: string
  children?: React.ReactNode
  matchHeight?: number | null
};

export const Card = React.forwardRef(
  function RefComponent (
    {
      title,
      children,
      matchHeight
    }: RefProps,
    ref?: React.Ref<HTMLDivElement> | null
  ): JSX.Element {
    const cardClassName = useGetDarkModeStyleClass(styles.card, styles.dark)
    const cardHeight = matchHeight ? `${matchHeight}px` : 'auto'

    return (
      <div className={cardClassName} ref={ref} style={{ minHeight: cardHeight }}>
        {title && <div className={styles.head}>{title}</div>}
        <div className={styles.body}>
          {children}
        </div>
      </div>
    )
  }
)
