import * as React from 'react'

import { SectionContainer } from '@/components/molecules/SectionContainer'
import { HistoryList } from '@/components/organisms/HistoryList'

type Props = React.ComponentProps<typeof HistoryList>

export const MyHistorySection: React.FC<Props> = ({
  data
}): JSX.Element => {
  return (
    <SectionContainer level={2} title={'Back Ground'}>
      <HistoryList data={data}/>
    </SectionContainer>
  )
}
