import Link from 'next/link'

import { useLanguage } from '@/i18n/LanguageProvider'

import { PROJECTS, projectPath } from '@/const/page/ProjectData'
import { PHILOSOPHY_EXAMPLES } from '@/const/page/ProjectHighlights'

import styles from './style.module.scss'

export const PhilosophyExample = ({ kind }: { kind: keyof typeof PHILOSOPHY_EXAMPLES }) => {
  const { language, t } = useLanguage()
  const example = PHILOSOPHY_EXAMPLES[kind]
  const project = PROJECTS.find(project => project.slug === example.slug)!

  return <aside className={styles.example} aria-label={t('実践例')}>
    <p><strong>{t('実践例')}</strong></p>
    <p>{t(example.body)}</p>
    <Link href={projectPath(example.slug)}>
      {language === 'ja' ? `${project.shortTitle}の詳細を見る` : `View details: ${t(project.shortTitle)}`} <span aria-hidden="true">→</span>
    </Link>
  </aside>
}
