
import * as React from 'react'
import { useMemo, useState } from 'react'

import { useLanguage } from '@/i18n/LanguageProvider'

import { useGetDarkModeStyleClass } from '@/hooks/useGetDarkModeStyleClass'

import { GLOBAL_NAV_DATA } from '@/const/page/GlobalNavData'
import { SKILL_CONTEXTS } from '@/const/page/SkillContexts'

import { SectionContainer } from '@/components/molecules/SectionContainer'

import { formatSkillStart } from './formatSkillStart'
import styles from './style.module.scss'


import { SkillSetDateType, SkillSetItemDataType } from '@/types/SkillSetDateType'

type Props = {
  data: SkillSetDateType
}

type SkillGroup = 'engineering' | 'front' | 'back' | 'tools' | 'design'

type SkillRow = SkillSetItemDataType & {
  id: string
  displayName: string
  group: SkillGroup
  context: string
}

type SkillFilter = 'all' | SkillGroup

const FILTERS: Array<{ label: string, value: SkillFilter }> = [
  { label: 'All Skills', value: 'all' },
  { label: 'Engineering', value: 'engineering' },
  { label: 'Front End', value: 'front' },
  { label: 'Back End', value: 'back' },
  { label: 'Tools', value: 'tools' },
  { label: 'Design / UX', value: 'design' },
]

const GROUP_BY_SOURCE_TITLE: Record<string, SkillGroup> = {
  'FRONT END SKILL': 'front',
  'BACK END SKILL': 'back',
  'DEVELOP SKILL': 'back',
  'USABLE TOOL': 'tools',
  'USABLE OS': 'tools',
  'WORKING SKILL': 'engineering',
}

const CORE_STACK_LABELS = ['TypeScript', 'React', 'Next.js', 'Vue 3', 'NestJS', 'GraphQL', 'GitHub']

const LEARNING_ITEMS = [
  { label: 'AWS SAA-C03', context: '資格取得に向けて学習中' },
  { label: 'Supabase', context: '個人開発・独学' },
  { label: 'MongoDB', context: '個人開発・独学' },
  { label: 'Ruby on Rails', context: '個人開発・独学' },
  { label: 'Laravel', context: '個人開発・独学' },
]

const normalizeLabel = (item: SkillSetItemDataType): string => String(item.label || '').trim()

const getLogoText = (label: string): string => {
  const logoText: Record<string, string> = {
    TypeScript: 'TS',
    'Next.js': 'N',
    JavaScript: 'JS',
    CSS3: '~',
    Sass: 'Sass',
    SCSS: 'SCSS',
    'Node.js': 'JS',
    NestJS: 'N',
    TypeORM: 'ORM',
    PostgreSQL: 'PG',
    'Amazon DynamoDB': 'DB',
    'AWS Amplify': 'AWS',
    GCP: 'GCP',
    GraphQL: 'GQL',
    'Apollo Client': 'A',
    'React Hook Form': 'RHF',
    'React Router': 'RR',
    Storybook: 'SB',
    Jest: 'Jest',
    Playwright: 'PW',
    'Chakra UI': 'C',
    MUI: 'MUI',
    'Radix UI': 'R',
    Vuetify: 'V',
    'Ruby on Rails': 'Rb',
    'Python 3': 'Py',
    'Visual Studio Code': '<>',
    'Adobe XD': 'UX',
    'Adobe Photoshop': 'Ps',
    Illustrator: 'Ai',
    webpack: 'wp',
    gulp: 'gulp',
    'Google Spreadsheet': 'G',
    'Google Apps Script': 'G',
    macOS: '',
  }

  return logoText[label] || label.slice(0, 2).toUpperCase()
}

const getLogoColorClass = (label: string): string => {
  const colorClassByLabel: Record<string, string> = {
    React: styles.reactLogo,
    TypeScript: styles.typeScriptLogo,
    'Next.js': styles.nextLogo,
    'Vue 3': styles.vueLogo,
    HTML5: styles.htmlLogo,
    CSS3: styles.cssLogo,
    Sass: styles.sassLogo,
    SCSS: styles.sassLogo,
    JavaScript: styles.javaScriptLogo,
    jQuery: styles.jQueryLogo,
    Shopify: styles.shopifyLogo,
    WordPress: styles.wordpressLogo,
    'Node.js': styles.nodeLogo,
    NestJS: styles.nestLogo,
    Docker: styles.dockerLogo,
    AWS: styles.awsLogo,
    'AWS Amplify': styles.awsLogo,
    GCP: styles.googleLogo,
    GraphQL: styles.graphqlLogo,
    'Apollo Client': styles.graphqlLogo,
    'Ruby on Rails': styles.railsLogo,
    Laravel: styles.laravelLogo,
    'Python 3': styles.pythonLogo,
    'Google Apps Script': styles.googleLogo,
    'Visual Studio Code': styles.vscodeLogo,
    Figma: styles.figmaLogo,
    'Adobe XD': styles.xdLogo,
    Illustrator: styles.illustratorLogo,
    Git: styles.gitLogo,
    GitHub: styles.githubLogo,
    'Adobe Photoshop': styles.photoshopLogo,
    'Google Spreadsheet': styles.googleLogo,
    Windows: styles.windowsLogo,
    macOS: styles.appleLogo,
  }

  return colorClassByLabel[label] || styles.defaultLogo
}

const buildRows = (data: SkillSetDateType): SkillRow[] => {
  const rows = data.flatMap((group) => {
    const sourceGroup = GROUP_BY_SOURCE_TITLE[group.title] || 'tools'

    return group.data.map((item) => {
      const displayName = normalizeLabel(item) || String(item.skillName)
      const mappedGroup = displayName === 'Figma' || displayName === 'Adobe XD' || displayName === 'Adobe Photoshop' || displayName === 'Illustrator'
        ? 'design'
        : ['Claude', 'Codex', 'ChatGPT', 'Gemini'].includes(displayName) ? 'engineering' : sourceGroup

      return {
        ...item,
        id: displayName,
        displayName,
        group: mappedGroup,
        context: SKILL_CONTEXTS[displayName] || (item.category === 'work-experience' ? 'Production' : 'Learning'),
      }
    })
  })

  return rows
    .filter((item) => item.displayName)
    .reduce<SkillRow[]>((acc, item) => {
      const existingIndex = acc.findIndex((row) => row.displayName === item.displayName)
      if (existingIndex === -1) return [...acc, item]
      if (item.value > acc[existingIndex].value) {
        const clone = [...acc]
        clone[existingIndex] = item
        return clone
      }

      return acc
    }, [])
    .sort((a, b) => b.value - a.value)
}

export const MySkillSetSection: React.FC<Props> = ({
  data
}): JSX.Element => {
  const { language, t } = useLanguage()
  const skillsShellClassName = useGetDarkModeStyleClass(styles.skillsShell, styles.dark)
  const [activeFilter, setActiveFilter] = useState<SkillFilter>('all')
  const [openFilters, setOpenFilters] = useState<SkillGroup[]>(['engineering'])
  const rows = useMemo(() => buildRows(data), [data])
  const accordionFilters = activeFilter === 'all'
    ? FILTERS.filter((filter) => filter.value !== 'all')
    : FILTERS.filter((filter) => filter.value === activeFilter)
  const coreStack = CORE_STACK_LABELS
    .map((label) => rows.find((item) => item.displayName === label))
    .filter((item): item is SkillRow => Boolean(item))

  const renderLogo = (item: SkillRow): React.ReactNode => (
    <span className={`${styles.skillLogo} ${getLogoColorClass(item.displayName)}`} aria-hidden="true">
      {item.icon || <span className={styles.logoFallback}>{getLogoText(t(item.displayName))}</span>}
    </span>
  )

  const renderStart = (item: SkillRow) => (
    <div className={styles.skillStart}>
      <span>{formatSkillStart(item.acquisitionDate, language, t)}</span>
      <small>{t(item.category === 'work-experience' ? '実務経験' : item.category === 'self-studying' ? '個人開発・学習' : '区分未記載')}</small>
    </div>
  )

  return (
    <SectionContainer id={GLOBAL_NAV_DATA.skills.id} title={GLOBAL_NAV_DATA.skills.text}>
      <div className={skillsShellClassName}>
        <p className={styles.sub_text}>
          {t("Webサービス・業務システム開発で使用している技術・ツールをまとめています。")}<br />
          {t("実務経験と個人開発・学習を区別し、具体的な担当・用途を記載しています。")}<br />
          {t("使用開始は、その技術に初めて取り組んだ年月です。継続した実務年数や累計の使用期間ではありません。")}<br />
          {t("2026年10月6日時点。")}
        </p>
        <div className={styles.contentGrid}>
          <div className={styles.tableArea}>
            <nav className={styles.filterTabs} aria-label={t("Skill categories")}>
              {FILTERS.map((filter) => (
                <button
                  key={filter.value}
                  type="button"
                  className={activeFilter === filter.value ? styles.active : ''}
                  aria-pressed={activeFilter === filter.value}
                  onClick={() => {
                    setActiveFilter(filter.value)
                    setOpenFilters(filter.value === 'all' ? ['engineering'] : [filter.value])
                  }}
                >
                  {filter.value === 'all' ? t(filter.label) : filter.label}
                </button>
              ))}
            </nav>
            <div className={styles.tableCard}>
              <div className={styles.skillGroups}>
                <div className={styles.accordionTableHeader} aria-hidden="true">
                  <span>{t('Skill')}</span>
                  <span>{t('担当・用途')}</span>
                  <span>{t('使用開始・区分')}</span>
                </div>
                {accordionFilters.map((filter) => {
                  const filterValue = filter.value as SkillGroup
                  const groupRows = rows.filter((item) => item.group === filterValue)
                  const isOpen = openFilters.includes(filterValue)

                  return (
                    <section key={filter.value} className={styles.accordionItem}>
                      <button
                        type="button"
                        className={styles.accordionButton}
                        aria-expanded={isOpen}
                        onClick={() => {
                          setOpenFilters((current) => (
                            isOpen
                              ? current.filter((value) => value !== filterValue)
                              : [...current, filterValue]
                          ))
                        }}
                      >
                        <span>{filter.value === 'all' ? t(filter.label) : filter.label}</span>
                        <span className={styles.accordionMeta}>
                          {groupRows.length}{language === 'ja' ? '項目' : ' Skills'}
                          <span>{isOpen ? '⌃' : '⌄'}</span>
                        </span>
                      </button>
                      {isOpen && (
                        <div className={styles.accordionPanel}>
                          {groupRows.map((item) => (
                            <article key={`${item.group}-${item.displayName}`} className={styles.mobileSkillRow}>
                              <div className={styles.mobileSkillName}>
                                {renderLogo(item)}
                                <strong>{t(item.displayName)}</strong>
                              </div>
                              <p className={styles.skillScope}>{t(item.context)}</p>
                              {renderStart(item)}
                            </article>
                          ))}
                        </div>
                      )}
                    </section>
                  )
                })}
              </div>
            </div>
          </div>
          <aside className={styles.sidePanel}>
            <section className={styles.infoCard}>
              <span className={styles.bookmark}></span>
              <h3>Core Stack</h3>
              <div className={styles.coreList}>
                {coreStack.map((item) => (
                  <div key={item.displayName} className={styles.coreItem}>
                    {renderLogo(item)}
                    <strong>{t(item.displayName)}</strong>
                    <span>{t(item.context)}</span>
                  </div>
                ))}
              </div>
            </section>
            <section className={styles.infoCard}>
              <h3>Currently Learning</h3>
              <div className={styles.learningList}>
                {LEARNING_ITEMS.map((item) => (
                  <div key={item.label} className={styles.learningItem}>
                    <span>{item.label}</span>
                    <small>{t(item.context)}</small>
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </div>
    </SectionContainer>
  )
}
