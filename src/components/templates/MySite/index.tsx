import * as React from 'react'

import { MyBody } from '@/components/parts/MyBody'
import { MyHead } from '@/components/parts/MyHead'

type Props = {
  children?: React.ReactNode
  title: string
  description: string
};

export const MySite: React.FC<Props> = (
  {
    children,
    title,
    description
  }
): JSX.Element => {
  return (
    <>
      <MyHead title={title} description={description} />
      <MyBody>
        {children}
      </MyBody>
    </>
  )
}
