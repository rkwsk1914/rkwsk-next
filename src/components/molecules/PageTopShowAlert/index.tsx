import * as React from 'react'

import clsx from 'clsx'

import { AlertElement } from '@/components/atoms/AlertElement'

import styles from './style.module.scss'

type Props = {
  isOpen?: React.ReactNode
} & React.ComponentProps<typeof AlertElement>;

export const PageTopShowAlert: React.FC<Props> = (
  {
    isOpen,
    children,
    onClose,
    type,
    variant
  }
): JSX.Element => {
  const wrapClassName = clsx(styles.wrap, {
    [styles.open]: isOpen,
    [styles.close]: !isOpen
  })
  return (
    <div className={wrapClassName}>
      <AlertElement
        type={type}
        variant={variant}
        onClose={onClose}
      >
        {children}
      </AlertElement>
    </div>
  )
}
