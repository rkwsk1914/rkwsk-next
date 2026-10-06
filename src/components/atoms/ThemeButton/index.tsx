
import React from 'react'

import LightModeIcon from '@mui/icons-material/LightMode'
import ModeNightIcon from '@mui/icons-material/ModeNight'

import { useLanguage } from '@/i18n/LanguageProvider'

import { useGetDarkModeStyleClass } from '@/hooks/useGetDarkModeStyleClass'

import styles from './style.module.scss'

type Props = {
  children?: React.ReactNode
  isDark?: boolean
  callBack?: (e: React.MouseEvent<HTMLButtonElement>) => void
};

export const ThemeButton: React.FC<Props> = (
  {
    isDark,
    callBack
  }
): JSX.Element => {

  const { t } = useLanguage()
  const className = useGetDarkModeStyleClass(styles.button, styles.dark)
  return (
    <button className={className} onClick={callBack}>
      {(isDark) ? (
        <LightModeIcon />
      ) : (
        <ModeNightIcon />
      )}
      {(isDark) ? (
        <span>{t('to Light')}</span>
      ) : (
        <span>{t('to Night')}</span>
      )}
    </button>
  )
}
