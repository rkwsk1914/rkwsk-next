import * as React from 'react'

import { DotViewBackGroundSection } from '@/components/atoms/DotViewBackGroundSection'
import { HeaderLogo } from '@/components/molecules/HeaderLogo'
import { SectionContainer } from '@/components/molecules/SectionContainer'
import { MySite } from '@/components/templates/MySite'

import styles from './style.module.scss'

type Props = {};

export const TopPage: React.FC<Props> = (): JSX.Element => {
  return (
    <MySite title={'rkwsk'} description={'rkwsk'}>
      <HeaderLogo />
      <div className={styles.firstViewBg} />
      <DotViewBackGroundSection imgSrc='/cafe.jpg'>
        <SectionContainer title={'Hello World'} level={2}>
          Hello
        </SectionContainer>
      </DotViewBackGroundSection>
      <DotViewBackGroundSection imgSrc='/cafe.jpg'>
        <SectionContainer title={'Hello World'} level={2}>
          Hello
        </SectionContainer>
      </DotViewBackGroundSection>
      <DotViewBackGroundSection imgSrc='/cafe.jpg'>
        <SectionContainer title={'Hello World'} level={2}>
          Hello
        </SectionContainer>
      </DotViewBackGroundSection>
      <DotViewBackGroundSection imgSrc='/cafe.jpg'>
        <SectionContainer title={'Hello World'} level={2}>
          Hello
        </SectionContainer>
      </DotViewBackGroundSection>
      <DotViewBackGroundSection imgSrc='/cafe.jpg'>
        <SectionContainer title={'Hello World'} level={2}>
          Hello
        </SectionContainer>
      </DotViewBackGroundSection>
    </MySite>
  )
}
