import * as React from 'react'

import { useLanguage } from '@/i18n/LanguageProvider'


import { GLOBAL_NAV_DATA } from '@/const/page/GlobalNavData'

import { ContactForm } from '@/components/forms/templates/ContactForm'
import { SectionContainer } from '@/components/molecules/SectionContainer'


import styles from './style.module.scss'

type Props = {}

export const ContactSection: React.FC<Props> = ({}): JSX.Element => {
  const { t } = useLanguage()
  return (
    <SectionContainer id={GLOBAL_NAV_DATA.contact.id} title={GLOBAL_NAV_DATA.contact.text}>
      <p className={styles.sub_text}>{t("Webアプリケーション開発、既存システムの改修、設計・品質改善のご相談を承っています。")}<br />{t("職務経歴書をご希望の方も、こちらのフォームからお問い合わせください。")}</p>
      <ContactForm />
    </SectionContainer>
  )
}
