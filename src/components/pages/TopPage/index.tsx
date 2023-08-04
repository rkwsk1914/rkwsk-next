import * as React from 'react'

import HISTORY_DATA from '@/const/page/HistoryData'
import { SKILL_SET_DATA } from '@/const/page/SkillSetData'

import { HeaderLogo } from '@/components/molecules/HeaderLogo'
import { SectionContainer } from '@/components/molecules/SectionContainer'
import { MySite } from '@/components/templates/MySite'

import { ContactSection } from './ContactSection'
import { MyHistorySection } from './MyHistorySection'
import { MySkillSetSection } from './MySkillSetSection'
import { ProfileSection } from './ProfileSection'
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
        <ProfileSection />
        <MyHistorySection data={HISTORY_DATA} />
        <MySkillSetSection data={SKILL_SET_DATA} />
        <ContactSection />
      </SectionContainer>
    </MySite>
  )
}
