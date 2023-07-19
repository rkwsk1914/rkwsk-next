import * as React from 'react'

import { Carousel } from '3d-react-carousel-ts'

import { SKILL_SET_DATA } from '@/const/page/SkillSetData'

import { Card } from '@/components/atoms/Card'
import { SectionContainer } from '@/components/molecules/SectionContainer'
import { SkillSetTable } from '@/components/organisms/SkillSetTable'

type Props = {}

export const MySkillSetSection: React.FC<Props> = ({}): JSX.Element => {
  const slides = SKILL_SET_DATA.map((item, index) => (
    <Card key={index} title={item.title}>
      <SkillSetTable data={item.data} />
    </Card>
  ))

  return (
    <SectionContainer id={'skills'} title={'Skills'}>
      <Carousel slides={slides} autoplay={false} interval={3000}/>
    </SectionContainer>
  )
}
