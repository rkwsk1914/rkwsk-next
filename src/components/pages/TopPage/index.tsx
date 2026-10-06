import * as React from 'react'

import { useLanguage } from '@/i18n/LanguageProvider'


import { getHistoryData } from '@/const/page/HistoryData'
import { SKILL_SET_DATA } from '@/const/page/SkillSetData'

import { SectionContainer } from '@/components/molecules/SectionContainer'
import { MySite } from '@/components/templates/MySite'

import { ContactSection } from './ContactSection'
import { MyHistorySection } from './MyHistorySection'
import { MySkillSetSection } from './MySkillSetSection'
import { PhilosophySection } from './PhilosophySection'
import { ProfileSection } from './ProfileSection'
//import styles from './style.module.scss'

type Props = {};

export const TopPage: React.FC<Props> = (): JSX.Element => {
  const { t } = useLanguage()
  return (
    <MySite title="Ryo Kawasaki | Full Stack Engineer" description={t('川﨑亮のポートフォリオ。React・Next.js・TypeScriptを軸に、画面・API・認証認可の設計と実装、テスト自動化、AIを活用した開発・レビューに取り組むフルスタックエンジニア。')}>
      <SectionContainer level={1} isFull>
        <ProfileSection />
        <PhilosophySection />
        <MyHistorySection data={getHistoryData(t)} />
        <MySkillSetSection data={SKILL_SET_DATA} />
        <ContactSection />
      </SectionContainer>
    </MySite>
  )
}
