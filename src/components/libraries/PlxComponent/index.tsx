import React from "react"

import clsx from "clsx"
import Plx from "react-plx" // docs https://www.npmjs.com/package/react-plx#parallaxdata
import { PlxProps, PlxItem } from "react-plx"

import styles from './style.module.scss'

export type ParallaxData = PlxItem

interface Props extends PlxProps {
  children?: React.ReactNode
  wrapClassName?: string
}

export const PlxComponent: React.FC<Props> = (
  {
    children,
    parallaxData,
    onPlxStart,
    onPlxEnd,
    wrapClassName,
    disabled,
    tagName
  }
): JSX.Element => {
  return (
    <Plx
      className={clsx(styles.for_safari,
        wrapClassName && wrapClassName,
      )}
      onPlxStart={onPlxStart}
      onPlxEnd={onPlxEnd}
      parallaxData={parallaxData}
      disabled={disabled}
      tagName={tagName}
    >
      {children}
    </Plx>
  )
}