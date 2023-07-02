import React from "react"

import clsx from "clsx"
import Plx from "react-plx" // docs https://www.npmjs.com/package/react-plx#parallaxdata

type Props = {
  children?: React.ReactNode
  parallaxData: {
    start: number
    end: number
    properties: {
        startValue: number
        endValue: number
        property: string
    }[];
  }[]
  wrapClassName?: string
};

export const PlxComponent: React.FC<Props> = (
  {
    children,
    parallaxData,
    wrapClassName
  }
): JSX.Element => {
  return (
    <Plx className={clsx(wrapClassName && wrapClassName)} parallaxData={parallaxData}>
      {children}
    </Plx>
  )
}