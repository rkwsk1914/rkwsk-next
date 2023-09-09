import * as React from 'react'

import { ErrorPageData } from '@/const/ErrorPageData'

import { SectionContainer } from '@/components/molecules/SectionContainer'
import { MySite } from '@/components/templates/MySite'

type Props = {
  errorId: keyof typeof ErrorPageData
};

export const ErrorPage: React.FC<Props> = ({
  errorId
}): JSX.Element => {
  return (
    <MySite title={ErrorPageData[errorId].title} description={ErrorPageData[errorId].description}>
      <SectionContainer level={1} title={ErrorPageData[errorId].content} isFull />
    </MySite>
  )
}