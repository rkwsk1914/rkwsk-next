import { useState } from 'react'

import clsx from 'clsx'
import Link from 'next/link'
import { PlxItem } from "react-plx"

import { Logo } from '@/components/atoms/Logo'
import { PlxComponent } from '@/components/organisms/PlxComponent'

import styles from './style.module.scss'

type Props = {};

export const HeaderLogo: React.FC<Props> = ({}): JSX.Element => {
  const [isInHeader, setIsInHeader] = useState(false)

  const parallaxData: PlxItem[] = [
    {
      start: 0,
      end: 500,
      properties: [
        {
          startValue: 1,
          endValue: 0.18,
          property: "scale",
        },
        {
          startValue: 0,
          endValue: -60,
          property: "translateY",
          unit: '%',
        },
      ],
    },
  ]

  const changeToTopLink = () => {
    setIsInHeader(true)
  }

  const changeToImage = () => {
    setIsInHeader(false)
  }

  return (
    <PlxComponent
      parallaxData={parallaxData}
      wrapClassName={clsx(
        styles.logoWrap,
        {
          [styles.over_header]: isInHeader
        },
        {
          [styles.under_header]: !isInHeader
        }
      )}
      onPlxEnd={changeToTopLink}
      onPlxStart={changeToImage}
    >
      {isInHeader ? (
        <Link
          className={styles.logo}
          href="/"
        >
          <Logo />
        </Link>
      ) : (
        <div className={styles.logo}>
          <Logo />
        </div>
      )}

    </PlxComponent>
  )
}
