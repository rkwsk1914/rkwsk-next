import * as React from 'react'

import clsx from 'clsx'
import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'

import { useGetDarkModeStyleClass } from '@/hooks/useGetDarkModeStyleClass'

import { ICON_DATA } from '@/const/IconData'


import styles from './style.module.scss'


interface BaseProps {
  children: string
  type?: 'prime' | 'dangerous' | 'warning' | 'standard'
  onClick?: () => void
}

interface SubmitProps extends BaseProps {
  href?: string
  toId?: never
  submit?: boolean
}

interface LinkProps extends BaseProps {
  href?: string
  toId?: never
  submit?: never
}

interface ScrollProps extends BaseProps {
  href?: never
  toId?: string
  submit?: never
}

type Props = LinkProps | ScrollProps | SubmitProps;

export const Button: React.FC<Props> = (
  {
    children,
    type,
    href,
    toId,
    submit,
    onClick
  }
): JSX.Element => {
  const darkClassName = useGetDarkModeStyleClass(styles.button, styles.dark)
  const buttonClassName = clsx(darkClassName, {
    [styles.prime]: type === 'prime',
    [styles.dangerous]: type === 'dangerous',
    [styles.warning]: type === 'warning',
    [styles.standard]: type === 'standard',
  })

  if (href) return (
    <Link className={buttonClassName} href={href}>
      {children}<span className={styles.arrow}>{ICON_DATA.arrowRight}</span>
    </Link>
  )

  if (toId) return (
    <ScrollLink className={buttonClassName} to={toId} smooth onClick={onClick}>{children}</ScrollLink>
  )

  if (submit) return (
    <input className={buttonClassName} type="submit" value={children} />
  )

  return (
    <button className={buttonClassName} onClick={onClick}>{children}</button>
  )
}
