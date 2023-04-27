import * as React from 'react'

import { Theme } from '@/components/layouts/Theme'

type Props = {
  children?: React.ReactNode
};

export const MyBody: React.FC<Props> = (
  {
    children
  }
): JSX.Element => {
  return (
    <Theme>{children}</Theme>
  )
}
