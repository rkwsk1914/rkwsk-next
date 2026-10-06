import { useLanguage } from '@/i18n/LanguageProvider'

import styles from './style.module.scss'

export const LanguageSwitch = () => {
  const { language, isReady, setLanguage } = useLanguage()

  return <div className={styles.switch} role="group" aria-label={language === 'ja' ? '表示言語' : 'Display language'}>
    <button type="button" lang="ja" aria-label="日本語" title="日本語" disabled={!isReady} aria-pressed={language === 'ja'} onClick={() => setLanguage('ja')}>JP</button>
    <span aria-hidden="true">/</span>
    <button type="button" lang="en" aria-label="English" title="English" disabled={!isReady} aria-pressed={language === 'en'} onClick={() => setLanguage('en')}>EN</button>
  </div>
}
