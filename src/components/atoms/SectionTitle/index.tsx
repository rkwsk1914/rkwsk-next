import * as React from 'react'

import { useGetDarkModeStyleClass } from '@/hooks/useGetDarkModeStyleClass'

import styles from './style.module.scss'

type Props = {
  children?: React.ReactNode
  level?: 1 | 2 | 3 | 4 | 5 | 6
};

export const SectionTitle: React.FC<Props> = (
  {
    children,
    level = 2
  }
): JSX.Element => {
  const className = useGetDarkModeStyleClass(styles.title, styles.dark)

  switch (level) {
    case 1: return <h1 className={className}>{children}</h1>
    case 3: return <h3 className={className}>{children}</h3>
    case 4: return <h4 className={className}>{children}</h4>
    case 5: return <h5 className={className}>{children}</h5>
    case 6: return <h6 className={className}>{children}</h6>
    default: return <h2 className={className}>{children}</h2>
  }
}
