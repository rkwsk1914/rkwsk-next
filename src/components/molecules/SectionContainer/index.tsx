import * as React from 'react'

import clsx from 'clsx'

import { SectionTitle } from '@/components/atoms/SectionTitle'

import styles from './style.module.scss'

type Props = {
  children?: React.ReactNode
  title?: React.ReactNode
  level?: 1 | 2 | 3 | 4 | 5 | 6
};

export const SectionContainer: React.FC<Props> = (
  {
    children,
    title,
    level = 2
  }
): JSX.Element => {
  const className = clsx(styles.section, {
    [styles.level1]: level === 1,
    [styles.level2]: level === 2,
    [styles.level3]: level === 3,
    [styles.level4]: level === 4,
    [styles.level5]: level === 5,
    [styles.level6]: level === 6,
  }, {
    [styles.no_title]: !title,
  })

  return (
    <section className={className}>
      {title && <SectionTitle level={level}>{title}</SectionTitle>}
      {children}
    </section>
  )
}
