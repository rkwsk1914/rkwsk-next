
import * as React from 'react'

import Link from 'next/link'

import { useLanguage } from '@/i18n/LanguageProvider'

import { useGetDarkModeStyleClass } from '@/hooks/useGetDarkModeStyleClass'

import { GLOBAL_NAV_DATA } from '@/const/page/GlobalNavData'
import { PROJECTS, projectPath } from '@/const/page/ProjectData'
import { SELECTED_PROJECTS } from '@/const/page/ProjectHighlights'

import { SectionContainer } from '@/components/molecules/SectionContainer'
import { HistoryList } from '@/components/organisms/HistoryList'

import styles from './style.module.scss'

type Props = React.ComponentProps<typeof HistoryList>

export const MyHistorySection: React.FC<Props> = ({
  data
}): JSX.Element => {
  const { language, t } = useLanguage()
  const projectLabel = (title: string) => language === 'ja' ? `${title}の詳細を見る` : `View details: ${t(title)}`
  const linksClassName = useGetDarkModeStyleClass(styles.links, styles.dark)
  const selectedClassName = useGetDarkModeStyleClass(styles.selected, styles.dark)
  const linkedHistory = data.map(year => ({
    ...year,
    monthlyDate: year.monthlyDate.map(entry => {
      const projects = PROJECTS.filter(project => project.historyEntries.some(
        position => position.year === year.year && position.month === entry.month
      ))

      return {
        ...entry,
        content: <>
          {entry.content}
          {projects.length > 0 && <span className={linksClassName}>
            {projects.map(project => <Link key={project.slug} href={projectPath(project.slug)} aria-label={projectLabel(project.shortTitle)}>
              <span>{projectLabel(project.shortTitle)}</span><span aria-hidden="true">→</span>
            </Link>)}
          </span>}
        </>,
      }
    }),
  }))

  return (
    <SectionContainer id={GLOBAL_NAV_DATA.history.id} title={GLOBAL_NAV_DATA.history.text}>
      <section id="selected-work" className={selectedClassName} aria-labelledby="selected-work-title">
        <h3 id="selected-work-title">Selected Work</h3>
        <div className={styles.projectGrid}>
          {SELECTED_PROJECTS.map(item => {
            const project = PROJECTS.find(project => project.slug === item.slug)!
            return <article key={item.slug} className={styles.projectCard}>
              <p className={styles.area}>{item.area}</p>
              <h4>{t(item.title)}</h4>
              <p>{t(item.description)}</p>
              <Link href={projectPath(item.slug)}>
                <span>{projectLabel(project.shortTitle)}</span><span aria-hidden="true">→</span>
              </Link>
            </article>
          })}
        </div>
      </section>
      <p className={styles.intro}>{t("各案件のリンクから、担当内容や具体的な取り組みをご覧いただけます。")}</p>
      <HistoryList data={linkedHistory}/>
    </SectionContainer>
  )
}
