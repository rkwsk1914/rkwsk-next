import { useState } from 'react'

import clsx from 'clsx'

import { useGetDarkModeStyleClass } from '@/hooks/useGetDarkModeStyleClass'

import { GLOBAL_NAV_DATA } from '@/const/page/GlobalNavData'

import { Button } from '@/components/atoms/Button'
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

  const TextArea = () => {
    return (
      <>
        <p>Hello, My name is Ryo Kawasaki.</p>
        <p>This is my Engineer portfolio site.</p>
        <p>Please feel free to explore at your leisure.</p>

        <div className={styles.btn_wrap}>
          <Button type='prime' toId={GLOBAL_NAV_DATA.skills.id}>{GLOBAL_NAV_DATA.skills.text}</Button>
          <Button type='dangerous' toId={GLOBAL_NAV_DATA.history.id}>{GLOBAL_NAV_DATA.history.text}</Button>
          <Button type='warning' toId={GLOBAL_NAV_DATA.contact.id}>{GLOBAL_NAV_DATA.contact.text}</Button>
        </div>
      </>
    )
  }

  return (
    <SectionContainer id={'hello'}>
      <div className={contentClassName}>
      <h2 className={styles.title}>Welcome My Site</h2>
        <PlxComponent
          parallaxData={parallaxData}
          disabled={isFixParallax}
          onPlxEnd={() => { setIsFixParallax(true) }}
          wrapClassName={clsx(styles.text, styles.large)}
        >
          <TextArea />
        </PlxComponent>
        <div className={clsx(styles.text, styles.medium)}>
          <TextArea />
        </div>
      </div>
      <div className={'hello-end'}></div>
    </SectionContainer>
  )
}
