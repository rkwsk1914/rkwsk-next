import * as React from 'react'

import { useMatchHeight } from '@/hooks/useMatchHeight'

import { SKILL_SET_DATA } from '@/const/page/SkillSetData'

import { MyCard } from '@/components/atoms/MyCard'
import { SlickSlider, OriginalSettings } from '@/components/atoms/SlickSlider'
import { SectionContainer } from '@/components/molecules/SectionContainer'
import { SkillSetTable } from '@/components/organisms/SkillSetTable'

import styles from './style.module.scss'

export const MySkillSetSection: React.FC = (): JSX.Element => {
  const dataLength = SKILL_SET_DATA.length
  const {height, refsArray} = useMatchHeight(dataLength)

  const slides = SKILL_SET_DATA.map((item, index) => (
    <div key={index} className={styles.cardWrap}>
      <MyCard title={item.title} ref={refsArray.current[index]} matchHeight={height}>
        <SkillSetTable data={item.data} />
      </MyCard>
    </div>
  ))

  const settings: OriginalSettings = {
    infinite:true,
    speed: 300,
    slidesToShow:1,
    centerPadding: '150px',
    autoplay: true,
    arrows: true,
    dots: true,
    centerMode: true,
    useCSS: true
  }

  return (
    <SectionContainer id={'skills'} title={'Skills'}>
      <SlickSlider settings={settings}>
        {slides}
      </SlickSlider>
    </SectionContainer>
  )
}
