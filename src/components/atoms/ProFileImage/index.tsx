import * as React from 'react'

import Image from 'next/image'

import { useGetDarkModeStyleClass } from '@/hooks/useGetDarkModeStyleClass'

import styles from './style.module.scss'

type NameType = {
  firstName: string
  lastName: string
}
interface BaseProps {
  children?: React.ReactNode
  name: NameType
  image: Omit<React.ComponentProps<typeof Image>, 'alt' | 'className'>
  sectionLevel?: 2 | 3 | 4 | 5 | 6
}
interface WithButton extends BaseProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  buttonText?: string
}
interface WithoutButton extends BaseProps {
  onClick?: never
  buttonText?: never
}

type Props = WithButton | WithoutButton

export const ProFileImage: React.FC<Props> = (
  {
    children,
    name,
    image,
    sectionLevel = 2,
    buttonText,
    onClick,
  }
): JSX.Element => {
  const itemClassName = useGetDarkModeStyleClass(styles.item, styles.dark)
  const myName = (<>{name.firstName}<br />{name.lastName}</>)

  const headingClassName = styles.headingText

  const HeadingTag = () => {
    switch (sectionLevel) {
      case 3: return <h3 className={headingClassName}>{myName}</h3>
      case 4: return <h4 className={headingClassName}>{myName}</h4>
      case 5: return <h5 className={headingClassName}>{myName}</h5>
      case 6: return <h6 className={headingClassName}>{myName}</h6>
      default: return <h2 className={headingClassName}>{myName}</h2>
    }
  }


  return (
    <div className={itemClassName}>
      <HeadingTag />
      <div className={styles.imageWrap}>
        <Image className={styles.image} alt={`${name.firstName} ${name.lastName}`} {...image} />
        {buttonText && (
          <div className={styles.buttonWrap}>
            <button className={styles.button} onClick={onClick}>{buttonText}</button>
          </div>
        )}
      </div>
      <span className={styles.backText}>{myName}</span>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}
