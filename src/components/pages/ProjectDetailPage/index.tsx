
import { useEffect } from 'react'

import Link from 'next/link'

import { useLanguage } from '@/i18n/LanguageProvider'

import { useGetDarkModeStyleClass } from '@/hooks/useGetDarkModeStyleClass'

import { PROJECTS, projectPath } from '@/const/page/ProjectData'
import type { Project } from '@/const/page/ProjectData'
import { PROJECT_SUMMARIES } from '@/const/page/ProjectHighlights'

import { MySite } from '@/components/templates/MySite'

import styles from './style.module.scss'


type Props = { project: Project }

export const ProjectDetailPage = ({ project }: Props) => {
  const { t } = useLanguage()
  const pageClassName = useGetDarkModeStyleClass(styles.page, styles.dark)
  const summary = PROJECT_SUMMARIES[project.slug]
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [project.slug])

  const position = PROJECTS.findIndex(item => item.slug === project.slug)
  const adjacent = [
    { label: '前の案件', project: PROJECTS[position + 1], isPrevious: true },
    { label: '次の案件', project: PROJECTS[position - 1], isPrevious: false },
  ].filter(item => item.project)

  return (
    <MySite title={`${t(project.shortTitle)} | Ryo Kawasaki`} description={t(project.sections[0].paragraphs[0])}>
      <div className={pageClassName}>
        <Link className={styles.backLink} href="/#history">{t("← Historyに戻る")}</Link>
        <header className={styles.hero}>
          <p className={styles.eyebrow}>PROJECT DETAIL</p>
          <h1>{t(project.title)}</h1>
        </header>

        <dl className={styles.metadata}>
          <div><dt>{t("参画期間")}</dt><dd>{t(project.period)}</dd></div>
        </dl>

        {summary && <section className={styles.summary} aria-label={t('案件の要点')}>
          <dl>
            <div><dt>{t('課題と背景')}</dt><dd>{t(summary.context)}</dd></div>
            <div><dt>{t('担当したこと')}</dt><dd>{t(summary.role)}</dd></div>
            <div><dt>{t('変えたこと')}</dt><dd>{t(summary.impact)}</dd></div>
          </dl>
        </section>}

        {project.sections.map((section, index) => <section key={section.title} className={styles.section} aria-labelledby={`project-section-${index}`}>
          <h2 id={`project-section-${index}`}>{t(section.title)}</h2>
          <div className={styles.sectionContent}>
            {section.paragraphs.map((paragraph, paragraphIndex) => {
              if (paragraph.startsWith('≪') || paragraph.startsWith('◆')) {
                return <h3 key={paragraphIndex}>{t(paragraph)}</h3>
              }

              return <p key={paragraphIndex} className={paragraph.startsWith('・') ? styles.bullet : undefined}>
                {/^https?:\/\//.test(paragraph)
                  ? <a href={paragraph} target="_blank" rel="noopener noreferrer">{paragraph}</a>
                  : t(paragraph)}
              </p>
            })}
          </div>
        </section>)}

        <nav className={styles.related} aria-label={t("他の案件")}>
          {adjacent.map(item => <Link key={item.project.slug} href={projectPath(item.project.slug)} className={item.isPrevious ? styles.previous : styles.next}>
            <span className={styles.relatedLabel}>{t(item.label)}</span>
            <strong>{t(item.project.shortTitle)}</strong>
            <span className={styles.relatedPeriod}>{t(item.project.period)}</span>
            <span className={item.isPrevious ? styles.arrowLeft : styles.arrow} aria-hidden="true">{item.isPrevious ? '←' : '→'}</span>
          </Link>)}
        </nav>
        <Link className={styles.backLink} href="/#history">{t("← Historyに戻る")}</Link>
      </div>
    </MySite>
  )
}
