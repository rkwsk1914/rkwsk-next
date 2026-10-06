
import { memo, useLayoutEffect, useState } from 'react'

import clsx from 'clsx'
import Image from 'next/image'

import { useLanguage } from '@/i18n/LanguageProvider'


import { useGetDarkModeStyleClass } from '@/hooks/useGetDarkModeStyleClass'

import { LiquidShapeImage } from '@/components/atoms/LiquidShapeImage'


import styles from './style.module.scss'

type Props = {
  image: Omit<React.ComponentProps<typeof Image>, 'alt' | 'className'>
  sectionLevel?: 1 | 2 | 3 | 4 | 5 | 6,
  children?: React.ReactNode
}

export const ProfileHero: React.FC<Props> = memo(({
  image,
  sectionLevel = 1,
  children,
}): JSX.Element => {
  const { t } = useLanguage()
  const [firstLoad, setFirstLoad] = useState(false)
  const mainContentClassName = useGetDarkModeStyleClass(styles.main_content, styles.dark)
  const myName = (<>Full Stack Engineer<br /><span className={styles.nameLine}>Ryo Kawasaki</span></>)

  const headingClassName = clsx(styles.headingText,{
    [styles.replay_avoidance]: firstLoad
  })

  const backTextClassName = clsx(styles.backText,{
    [styles.replay_avoidance]: firstLoad
  })

  const HeadingTag = () => {
    switch (sectionLevel) {
      case 1: return <h1 className={headingClassName}>{myName}</h1>
      case 3: return <h3 className={headingClassName}>{myName}</h3>
      case 4: return <h4 className={headingClassName}>{myName}</h4>
      case 5: return <h5 className={headingClassName}>{myName}</h5>
      case 6: return <h6 className={headingClassName}>{myName}</h6>
      default: return <h2 className={headingClassName}>{myName}</h2>
    }
  }

  useLayoutEffect(() => {
    setTimeout(() => {
      setFirstLoad(true)
    }, 3000)
  }, [firstLoad, setFirstLoad])

  return (
    <>
      <div className={mainContentClassName}>
        <HeadingTag />
        <div className={styles.image_wrap}>
          <LiquidShapeImage
            alt={t('profile')}
            image={image} />
        </div>
        <span aria-hidden="true" className={backTextClassName}>{myName}</span>
      </div>
      <div className={styles.content}>
        <p className={styles.description}>{t('Integrating AI into research, implementation, and code review to build better applications with React, Next.js, and TypeScript.')}</p>
        <a className={styles.workLink} href="#selected-work">{t('代表案件を見る')} <span aria-hidden="true">→</span></a>
        {children}
      </div>
    </>
  )
})

ProfileHero.displayName = 'ProfileHero'
