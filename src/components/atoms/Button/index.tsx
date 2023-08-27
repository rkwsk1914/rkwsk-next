import * as React from 'react'

import clsx from 'clsx'
import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'

import { useGetDarkModeStyleClass } from '@/hooks/useGetDarkModeStyleClass'

import { ICON_DATA } from '@/const/IconData'


import styles from './style.module.scss'


interface BaseProps {
  children: string
  type?: 'prime' | 'dangerous' | 'warning' | 'standard' | 'outline'
  onClick?: () => void
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'
}

interface SubmitProps extends BaseProps {
  href?: string
  toId?: never
  submit?: boolean
  scrollOption?: never
}

interface LinkProps extends BaseProps {
  href?: string
  toId?: never
  submit?: never
  scrollOption?: never
}

interface ScrollProps extends BaseProps {
  href?: never
  toId?: string
  submit?: never
  scrollOption?: Omit<React.ComponentProps<typeof ScrollLink>, 'to' | 'smooth' | 'ref'>
}

type Props = LinkProps | ScrollProps | SubmitProps;

export const Button: React.FC<Props> = (
  {
    children,
    type,
    href,
    toId,
    submit,
    disabled,
    scrollOption,
    size = 'medium',
    onClick
  }
): JSX.Element => {
  const darkClassName = useGetDarkModeStyleClass(styles.button, styles.dark)
  const buttonClassName = clsx(darkClassName, {
    [styles.prime]: type === 'prime',
    [styles.dangerous]: type === 'dangerous',
    [styles.warning]: type === 'warning',
    [styles.standard]: type === 'standard',
    [styles.outline]: type === 'outline',
    [styles.small]: size === 'small',
    [styles.medium]: size === 'medium',
    [styles.large]: size === 'large',
    [styles.disabled]: disabled,
  })

  const submitWrapClassName = clsx(styles.submit_wrap, {
    [styles.disabled]: disabled,
  })

  if (href) return (
    <Link className={buttonClassName} href={href}>
      {children}<span className={styles.arrow}>{ICON_DATA.arrowRight}</span>
    </Link>
  )

  if (toId) return (
    <ScrollLink
      className={buttonClassName}
      to={toId}
      smooth
      {...scrollOption}
      onClick={onClick}>{children}</ScrollLink>
  )

  if (submit) return (
    <div className={submitWrapClassName}>
      <input className={buttonClassName} type="submit" value={children} />
    </div>
  )

  return (
    <button className={buttonClassName} onClick={onClick}>{children}</button>
  )
}
