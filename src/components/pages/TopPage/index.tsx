import * as React from 'react'

import HISTORY_DATA from '@/const/page/HistoryData'

import { HeaderLogo } from '@/components/molecules/HeaderLogo'
import { SectionContainer } from '@/components/molecules/SectionContainer'
import { MySite } from '@/components/templates/MySite'

import { MyHistorySection } from './MyHistorySection'
import { MySkillSetSection } from './MySkillSetSection'
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
        <MySkillSetSection />
      </SectionContainer>
    </MySite>
  )
}
