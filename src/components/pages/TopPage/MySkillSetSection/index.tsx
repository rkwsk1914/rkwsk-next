import * as React from 'react'

import { useMatchHeight } from '@/hooks/useMatchHeight'

import { GLOBAL_NAV_DATA } from '@/const/page/GlobalNavData'

import { MyCard } from '@/components/atoms/MyCard'
import { SlickSlider, OriginalSettings } from '@/components/libraries/SlickSlider'
import { SectionContainer } from '@/components/molecules/SectionContainer'
import { SkillSetTable } from '@/components/organisms/SkillSetTable'

import styles from './style.module.scss'

import { SkillSetDateType } from '@/types/SkillSetDateType'

type Props = {
  data: SkillSetDateType
}

export const MySkillSetSection: React.FC<Props> = ({
  data
}): JSX.Element => {
  const dataLength = data.length
  const {height, refsArray} = useMatchHeight(dataLength)

  const slides = data.map((item, index) => (
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
    autoplay: false,
    arrows: true,
    dots: true,
    centerMode: true,
    useCSS: true,
    responsive: [
      {
        breakpoint: 750, // min-width 749
        settings: {
          infinite:true,
          speed: 300,
          slidesToShow:1,
          centerPadding: '0px',
          autoplay: false,
          arrows: true,
          dots: true,
          centerMode: true,
          useCSS: true
        }
      }
    ]
  }

  return (
    <SectionContainer id={GLOBAL_NAV_DATA.skills.id} title={GLOBAL_NAV_DATA.skills.text} isFull>
      <SlickSlider settings={settings}>
        {slides}
      </SlickSlider>
    </SectionContainer>
  )
}
