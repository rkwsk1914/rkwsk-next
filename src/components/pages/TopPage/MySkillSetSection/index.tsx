import { useEffect, useState, useRef, useCallback, RefObject } from 'react'

import { Carousel } from '3d-react-carousel-ts'

import { SKILL_SET_DATA } from '@/const/page/SkillSetData'

import { Card } from '@/components/atoms/Card'
import { SectionContainer } from '@/components/molecules/SectionContainer'
import { SkillSetTable } from '@/components/organisms/SkillSetTable'

type Props = {};

export const MySkillSetSection: React.FC<Props> = ({}): JSX.Element => {
  const [cardHeight, setCardHeight] = useState<number | null>(null)
  const refsArray = useRef<RefObject<HTMLDivElement>[]>([])

  const adjustCardHeight = useCallback(() => {
    let maxHeight = 0
    refsArray.current.forEach((ref) => {
      const itemHeight = ref.current?.getBoundingClientRect().height
      if (itemHeight && maxHeight < itemHeight) maxHeight = itemHeight
    })
    if (maxHeight > 0) setCardHeight(maxHeight)
  }, [])

  useEffect(() => {
    adjustCardHeight()
    window.addEventListener('resize', adjustCardHeight)
    return () => {
      window.removeEventListener('resize', adjustCardHeight)
    }
  }, [adjustCardHeight])

  const slides = SKILL_SET_DATA.map((item, index) => (
    <Card key={index} title={item.title} ref={refsArray.current[index]} matchHeight={cardHeight}>
      <SkillSetTable data={item.data} />
    </Card>
  ))

  return (
    <SectionContainer id={'skills'} title={'Skills'}>
      <div>
        <Carousel slides={slides} autoplay={false} />
      </div>
    </SectionContainer>
  )
}
