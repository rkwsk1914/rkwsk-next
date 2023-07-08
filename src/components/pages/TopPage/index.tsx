import * as React from 'react'

import { HeaderLogo } from '@/components/molecules/HeaderLogo'
import { SectionContainer } from '@/components/molecules/SectionContainer'
import { MySite } from '@/components/templates/MySite'
import HISTORY_DATA from '@/const/page/HistoryData'

import { MyHistorySection } from './MyHistorySection'
import styles from './style.module.scss'

type Props = {};

export const TopPage: React.FC<Props> = (): JSX.Element => {


  return (
    <MySite title={'rkwsk'} description={'rkwsk'}>
      <SectionContainer level={1}>
        <HeaderLogo />
        <SectionContainer>
          <div className={styles.firstViewBg} />
        </SectionContainer>
        <MyHistorySection data={HISTORY_DATA} />
      </SectionContainer>
    </MySite>
  )
}
