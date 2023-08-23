import * as React from 'react'

import { GLOBAL_NAV_DATA } from '@/const/page/GlobalNavData'

import { SectionContainer } from '@/components/molecules/SectionContainer'
import { HistoryList } from '@/components/organisms/HistoryList'


type Props = React.ComponentProps<typeof HistoryList>

export const MyHistorySection: React.FC<Props> = ({
  data
}): JSX.Element => {
  return (
    <SectionContainer id={GLOBAL_NAV_DATA.history.id} title={GLOBAL_NAV_DATA.history.text}>
      <HistoryList data={data}/>
    </SectionContainer>
  )
}
