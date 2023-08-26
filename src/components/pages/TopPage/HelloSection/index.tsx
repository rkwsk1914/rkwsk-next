import { useState } from 'react'

import { useGetDarkModeStyleClass } from '@/hooks/useGetDarkModeStyleClass'

import { PlxComponent, ParallaxData } from '@/components/libraries/PlxComponent'
import { SectionContainer } from '@/components/molecules/SectionContainer'



import styles from './style.module.scss'

type Props = {}

export const HelloSection: React.FC<Props> = ({}): JSX.Element => {
  const contentClassName = useGetDarkModeStyleClass(styles.content, styles.dark)

  const [isFixParallax, setIsFixParallax] = useState(false)

  const parallaxData: ParallaxData[] = [
    {
      start: 'self',
      end: '.hello-end',
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: "opacity",
        },
        {
          startValue: 100,
          endValue: 0,
          property: "translateY",
        }
      ],
    },
  ]

  return (
    <SectionContainer id={'hello'}>
      <div className={contentClassName}>
      <h2 className={styles.title}>Welcome My Site</h2>
        <PlxComponent
          parallaxData={parallaxData}
          disabled={isFixParallax}
          onPlxEnd={() => { setIsFixParallax(true) }}
          wrapClassName={styles.text}
        >
          <p>Hello, My name is Ryo Kawasaki.</p>
          <p>This is my Engineer portfolio site.</p>
          <p>See relax please.</p>
        </PlxComponent>
      </div>
      <div className={'hello-end'}></div>
    </SectionContainer>
  )
}
