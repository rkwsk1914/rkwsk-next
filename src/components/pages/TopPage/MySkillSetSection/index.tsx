import * as React from 'react'

import { Carousel } from '3d-react-carousel-ts'

import { Card } from '@/components/atoms/Card'
import { SectionContainer } from '@/components/molecules/SectionContainer'
import { SkillSetTable } from '@/components/organisms/SkillSetTable'
import { SKILL_SET_DATA } from '@/const/page/SkillSetData'

type Props = {
  data: Array<any>
}

export const MySkillSetSection: React.FC<Props> = ({
  data
}): JSX.Element => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
  }

  const slides = SKILL_SET_DATA.map((item, index) => (
    <Card key={index} title={item.title}>
      <SkillSetTable data={item.data} />
    </Card>
  ))

  return (
    <SectionContainer id={'skills'} title={'Skills'}>
      <Carousel slides={slides} autoplay={true} interval={3000}/>
    </SectionContainer>
  )
}
