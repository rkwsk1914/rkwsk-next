import * as React from 'react'

import { DotViewBackGroundSection } from '@/components/atoms/DotViewBackGroundSection'
import { Logo } from '@/components/atoms/Logo'
import { SectionContainer } from '@/components/molecules/SectionContainer'
import { MySite } from '@/components/templates/MySite'

import styles from './style.module.scss'

type Props = {};

export const TopPage: React.FC<Props> = (): JSX.Element => {
  return (
    <MySite title={'rkwsk'} description={'rkwsk'}>
      <SectionContainer>
        <div className={styles.logo}><Logo /></div>
      </SectionContainer>
      <DotViewBackGroundSection imgSrc='/cafe.jpg'>
        <SectionContainer title={'Hello World'} level={1}>
          Hello
        </SectionContainer>
      </DotViewBackGroundSection>
    </MySite>
  )
}
