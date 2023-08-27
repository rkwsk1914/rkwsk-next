import { memo, useLayoutEffect, useState } from 'react'

import clsx from 'clsx'
import Image from 'next/image'


import { useGetDarkModeStyleClass } from '@/hooks/useGetDarkModeStyleClass'

import { LiquidShapeImage } from '@/components/atoms/LiquidShapeImage'


import styles from './style.module.scss'

type Props = {
  image: Omit<React.ComponentProps<typeof Image>, 'alt' | 'className'>
  sectionLevel?: 2 | 3 | 4 | 5 | 6,
  children?: React.ReactNode
}

export const ProFileImage: React.FC<Props> = memo(({
  image,
  sectionLevel = 2,
  children,
}): JSX.Element => {
  const [firstLoad, setFirstLoad] = useState(false)
  const mainContentClassName = useGetDarkModeStyleClass(styles.main_content, styles.dark)
  const myName = (<>{'KAWASAKI'}<br />{'RYO'}</>)

  const headingClassName = clsx(styles.headingText,{
    [styles.replay_avoidance]: firstLoad
  })

  const backTextClassName = clsx(styles.backText,{
    [styles.replay_avoidance]: firstLoad
  })

  const HeadingTag = () => {
    switch (sectionLevel) {
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
            alt='profile'
            image={image} />
        </div>
        <span className={backTextClassName}>{myName}</span>
        <small className={styles.subText}>Front End Engineer</small>
      </div>
      {children && <div className={styles.content}>{children}</div>}
    </>
  )
})

ProFileImage.displayName = 'ProFileImage'