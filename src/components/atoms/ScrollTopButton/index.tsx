
import * as React from 'react'

import { animateScroll } from 'react-scroll'

import { useLanguage } from '@/i18n/LanguageProvider'

import { useGetDarkModeStyleClass } from '@/hooks/useGetDarkModeStyleClass'

import { ICON_DATA } from '@/const/IconData'

import styles from './style.module.scss'

export const ScrollTopButton: React.FC = (): JSX.Element => {
  const { t } = useLanguage()
  const className = useGetDarkModeStyleClass(styles.btn, styles.dark)

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    animateScroll.scrollToTop({
      smooth: true,
      duration: 500,
    })
  }

  return (
    <button className={className} onClick={onClick} aria-label={t('scroll page top button')}>
      {ICON_DATA.circleChevronUp}
    </button>
  )
}
