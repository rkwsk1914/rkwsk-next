import React from "react"

import clsx from "clsx"
import Plx from "react-plx" // docs https://www.npmjs.com/package/react-plx#parallaxdata
import { PlxProps } from "react-plx"

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
    wrapClassName
  }
): JSX.Element => {
  return (
    <Plx
      className={clsx(wrapClassName && wrapClassName)}
      onPlxStart={onPlxStart}
      onPlxEnd={onPlxEnd}
      parallaxData={parallaxData}>
      {children}
    </Plx>
  )
}