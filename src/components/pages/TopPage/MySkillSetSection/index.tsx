import * as React from 'react'

import Slider from "react-slick"
import { Settings } from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { useMatchHeight } from '@/hooks/useMatchHeight'

import { SKILL_SET_DATA } from '@/const/page/SkillSetData'

import { Card } from '@/components/atoms/Card'
import { SectionContainer } from '@/components/molecules/SectionContainer'
import { SkillSetTable } from '@/components/organisms/SkillSetTable'

type Props = {};

export const MySkillSetSection: React.FC<Props> = ({}): JSX.Element => {
  const dataLength = SKILL_SET_DATA.length
  const {height, refsArray} = useMatchHeight(dataLength)

  const slides = SKILL_SET_DATA.map((item, index) => (
    <Card key={index} title={item.title} ref={refsArray.current[index]} matchHeight={height}>
      <SkillSetTable data={item.data} />
    </Card>
  ))

  const settings: Settings = {
    infinite:true, //to allow the slides to show infinitely
    speed: 300, //this is the speed of slider in ms
    slidesToShow:1, //number of slides to show up on screen
    centerPadding: '50px',
    autoplay: true,
    arrows: true,
    dots: true,
    centerMode: true
  }

  return (
    <SectionContainer id={'skills'} title={'Skills'}>
      <div>
        <Slider {...settings}>
          {slides}
        </Slider>
      </div>
    </SectionContainer>
  )
}
