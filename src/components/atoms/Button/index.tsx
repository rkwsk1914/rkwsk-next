import * as React from 'react'

import clsx from 'clsx'
import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'

import { useGetDarkModeStyleClass } from '@/hooks/useGetDarkModeStyleClass'

import { ICON_DATA } from '@/const/IconData'


import styles from './style.module.scss'


interface BaseProps {
  text: string
  type?: 'prime' | 'dangerous' | 'warning' | 'standard'
  onClick?: () => void
}

interface LinkProps extends BaseProps {
  href?: string
  toId?: never
}

interface ScrollProps extends BaseProps {
  href?: never
  toId?: string
}

type Props = LinkProps | ScrollProps;

export const Button: React.FC<Props> = (
  {
    text,
    type,
    href,
    toId,
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
      {text}<span className={styles.arrow}>{ICON_DATA.arrowRight}</span>
    </Link>
  )

  if (toId) return (
    <ScrollLink className={buttonClassName} to={toId} smooth onClick={onClick}>{text}</ScrollLink>
  )

  return (
    <button className={buttonClassName} onClick={onClick}>{text}</button>
  )
}
