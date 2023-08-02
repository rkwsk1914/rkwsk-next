import * as React from 'react'

import Image from 'next/image'

import { useGetDarkModeStyleClass } from '@/hooks/useGetDarkModeStyleClass'

import styles from './style.module.scss'

type Props =  {
  children?: React.ReactNode
  firstName: string
  lastName: string
  image: Omit<React.ComponentProps<typeof Image>, 'alt' | 'className'>
  sectionLevel: 2 | 3 | 4 | 5 | 6
}

export const ProFileImage: React.FC<Props> = (
  {
    children,
    firstName,
    lastName,
    image,
    sectionLevel
  }
): JSX.Element => {
  const itemClassName = useGetDarkModeStyleClass(styles.item, styles.dark)
  const name = (<>{firstName}<br />{lastName}</>)

  const headingClassName = styles.headingText

  const HeadingTag = () => {
    switch (sectionLevel) {
      case 3: return <h3 className={headingClassName}>{name}</h3>
      case 4: return <h4 className={headingClassName}>{name}</h4>
      case 5: return <h5 className={headingClassName}>{name}</h5>
      case 6: return <h6 className={headingClassName}>{name}</h6>
      default: return <h2 className={headingClassName}>{name}</h2>
    }
  }


  return (
    <div className={itemClassName}>
      <HeadingTag />
      <Image className={styles.image} alt={`${firstName} ${lastName}`} {...image} />
      <span className={styles.backText}>{name}</span>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}
