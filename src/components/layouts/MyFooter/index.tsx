import * as React from 'react'

import { useGetDarkModeStyleClass } from '@/hooks/useGetDarkModeStyleClass'

import styles from './style.module.scss'

type Props = {
  children?: React.ReactNode
};

export const MyFooter: React.FC<Props> = (
  {
    children
  }
): JSX.Element => {
  const footerClassName = useGetDarkModeStyleClass(styles.footer, styles.dark)
  return (
    <footer className={footerClassName}></footer>
  )
}
