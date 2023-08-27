import * as React from 'react'
import { useState } from 'react'

import { useMatchHeight } from '@/hooks/useMatchHeight'

import { GLOBAL_NAV_DATA } from '@/const/page/GlobalNavData'

import { Button } from '@/components/atoms/Button'
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
  const [ slideNumber, setSlideNumber ] = useState<number | null>(null)

  const slides = data.map((item, index) => (
    <div key={index} className={styles.cardWrap}>
      <MyCard title={item.title} ref={refsArray.current[index]} matchHeight={height}>
        <SkillSetTable data={item.data} />
      </MyCard>
    </div>
  ))

  const options = data.map((item, index) => (
    <React.Fragment key={index}>
      <Button
        type='outline'
        size='small'
        toId='skill-slider'
        onClick={() => {setSlideNumber(index)}}
        scrollOption={{
          offset: -96
        }}
      >
        {item.title}
      </Button>
    </React.Fragment>
  ))

  const commonSettings = {
    infinite: true,
    speed: 300,
    autoplay: false,
    arrows: true,
    dots: true,
    centerMode: true,
    useCSS: true,
  }

  const settings: OriginalSettings = {
    slidesToShow: 3,
    centerPadding: '150px',
    ...commonSettings,
    responsive: [
      {
        breakpoint: 750, // max-width 749
        settings: {
          slidesToShow: 1,
          centerPadding: '0px',
          ...commonSettings,
        }
      },
      {
        breakpoint: 960, // max-width 960
        settings: {
          slidesToShow: 1,
          centerPadding: '0px',
          ...commonSettings,
        }
      },
      {
        breakpoint: 1200, // max-width 1200
        settings: {
          slidesToShow: 1,
          centerPadding: '150px',
          ...commonSettings,
        }
      }
    ]
  }

  return (
    <SectionContainer id={GLOBAL_NAV_DATA.skills.id} title={GLOBAL_NAV_DATA.skills.text} isFull>
      <div className={styles.options_area}>
        {options}
      </div>
      <div id="skill-slider">
        <SlickSlider settings={settings} externalSlideNumber={slideNumber}>
          {slides}
        </SlickSlider>
      </div>
    </SectionContainer>
  )
}
