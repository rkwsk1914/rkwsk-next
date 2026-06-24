import * as React from 'react'
import { useMemo, useState } from 'react'

import { GLOBAL_NAV_DATA } from '@/const/page/GlobalNavData'

import { SectionContainer } from '@/components/molecules/SectionContainer'

import styles from './style.module.scss'

import { SkillSetDateType, SkillSetItemDataType } from '@/types/SkillSetDateType'

type Props = {
  data: SkillSetDateType
}

type SkillGroup = 'front' | 'back' | 'tools' | 'design'

type SkillRow = SkillSetItemDataType & {
  id: string
  displayName: string
  group: SkillGroup
  context: string
  confidence: 'High' | 'Medium'
}

type SkillFilter = 'all' | SkillGroup

const FILTERS: Array<{ label: string, value: SkillFilter }> = [
  { label: 'All Skills', value: 'all' },
  { label: 'Front End', value: 'front' },
  { label: 'Back End', value: 'back' },
  { label: 'Tools', value: 'tools' },
  { label: 'Design / UX', value: 'design' },
]

const LEVEL_LABELS: Record<SkillSetItemDataType['value'], string> = {
  0: 'Learning',
  1: 'Beginner',
  2: 'Basic',
  3: 'Intermediate',
  4: 'Advanced',
  5: 'Advanced',
}

const GROUP_BY_SOURCE_TITLE: Record<string, SkillGroup> = {
  'FRONT END SKILL': 'front',
  'BACK END SKILL': 'back',
  'DEVELOP SKILL': 'back',
  'USABLE TOOL': 'tools',
  'USABLE OS': 'tools',
}

const CONTEXT_BY_LABEL: Record<string, string> = {
  React: 'Main Framework',
  TypeScript: 'Daily',
  'Next.js': 'Production',
  HTML5: 'Daily',
  CSS3: 'Daily',
  JavaScript: 'Daily',
  jQuery: 'Legacy UI',
  Shopify: 'EC Frontend',
  WordPress: 'CMS',
  'Node.js': 'API / Backend',
  Docker: 'Dev Environment',
  AWS: 'Hosting / Infra',
  GraphQL: 'API Schema',
  'Ruby on Rails': 'Backend',
  Laravel: 'Backend',
  'Python 3': 'Scripting / Tools',
  'Google Apps Script': 'Automation',
  'Visual Studio Code': 'Editor',
  Figma: 'Design Handoff',
  'Adobe XD': 'UI Design',
  Git: 'Version Control',
  GitHub: 'Version Control',
  'Adobe Photoshop': 'Asset Editing',
  'Google Spreadsheet': 'Operations',
  Windows: 'OS',
  macOS: 'OS',
}

const CORE_STACK_LABELS = ['React', 'TypeScript', 'Next.js', 'CSS3', 'Node.js', 'AWS', 'GitHub']

const LEARNING_ITEMS = [
  { label: 'Go', value: 60 },
  { label: 'GraphQL', value: 40 },
  { label: 'Prisma', value: 30 },
  { label: 'Rust', value: 20 },
]

const normalizeLabel = (item: SkillSetItemDataType): string => String(item.label || '').trim()

const calculateYearsOfExperience = (acquisitionDate?: string): number | null => {
  if (!acquisitionDate) return null

  const datePattern = /^\d{4}-\d{2}-\d{2}$/
  if (!datePattern.test(acquisitionDate)) return null

  const today = new Date()
  const startDay = new Date(acquisitionDate)
  const monthDiff = today.getMonth() - startDay.getMonth()

  if (monthDiff < 0) return today.getFullYear() - 1 - startDay.getFullYear()
  return today.getFullYear() - startDay.getFullYear()
}

const getYearsLabel = (item: SkillSetItemDataType): string => {
  const years = calculateYearsOfExperience(item.acquisitionDate)
  if (years === null) return 'Recently'
  if (years <= 0) return 'Under 1 yr'

  return `${years}+ yrs`
}

const getConfidence = (value: SkillSetItemDataType['value']): SkillRow['confidence'] => value >= 4 ? 'High' : 'Medium'

const getLogoText = (label: string): string => {
  const logoText: Record<string, string> = {
    TypeScript: 'TS',
    'Next.js': 'N',
    JavaScript: 'JS',
    CSS3: '~',
    'Node.js': 'JS',
    'Ruby on Rails': 'Rb',
    'Python 3': 'Py',
    'Visual Studio Code': '<>',
    'Adobe XD': 'UX',
    'Adobe Photoshop': 'Ps',
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
    HTML5: styles.htmlLogo,
    CSS3: styles.cssLogo,
    JavaScript: styles.javaScriptLogo,
    jQuery: styles.jQueryLogo,
    Shopify: styles.shopifyLogo,
    WordPress: styles.wordpressLogo,
    'Node.js': styles.nodeLogo,
    Docker: styles.dockerLogo,
    AWS: styles.awsLogo,
    GraphQL: styles.graphqlLogo,
    'Ruby on Rails': styles.railsLogo,
    Laravel: styles.laravelLogo,
    'Python 3': styles.pythonLogo,
    'Google Apps Script': styles.googleLogo,
    'Visual Studio Code': styles.vscodeLogo,
    Figma: styles.figmaLogo,
    'Adobe XD': styles.xdLogo,
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
      const mappedGroup = displayName === 'Figma' || displayName === 'Adobe XD' || displayName === 'Adobe Photoshop'
        ? 'design'
        : sourceGroup

      return {
        ...item,
        id: displayName,
        displayName,
        group: mappedGroup,
        context: CONTEXT_BY_LABEL[displayName] || (item.category === 'work-experience' ? 'Production' : 'Learning'),
        confidence: getConfidence(item.value),
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
  const [activeFilter, setActiveFilter] = useState<SkillFilter>('all')
  const [openFilters, setOpenFilters] = useState<SkillGroup[]>(['front'])
  const rows = useMemo(() => buildRows(data), [data])
  const visibleRows = activeFilter === 'all' ? rows : rows.filter((item) => item.group === activeFilter)
  const accordionFilters = activeFilter === 'all'
    ? FILTERS.filter((filter) => filter.value !== 'all')
    : FILTERS.filter((filter) => filter.value === activeFilter)
  const coreStack = CORE_STACK_LABELS
    .map((label) => rows.find((item) => item.displayName === label))
    .filter((item): item is SkillRow => Boolean(item))

  const renderLogo = (item: SkillRow): React.ReactNode => (
    <span className={`${styles.skillLogo} ${getLogoColorClass(item.displayName)}`} aria-hidden="true">
      {item.icon || <span className={styles.logoFallback}>{getLogoText(item.displayName)}</span>}
    </span>
  )

  const renderSegments = (item: SkillRow): React.ReactNode => (
    <div className={styles.experienceMeter}>
      <div className={styles.segments} aria-label={`${LEVEL_LABELS[item.value]} experience`}>
        {Array.from({ length: 6 }).map((_, index) => (
          <span key={index} className={index < item.value ? styles.filled : ''}></span>
        ))}
      </div>
      <span>{LEVEL_LABELS[item.value]}</span>
    </div>
  )

  const renderConfidence = (item: SkillRow): React.ReactNode => (
    <div className={styles.confidence}>
      <span className={item.confidence === 'High' ? styles.highDot : styles.mediumDot}></span>
      {item.confidence}
    </div>
  )

  return (
    <SectionContainer id={GLOBAL_NAV_DATA.skills.id} title={GLOBAL_NAV_DATA.skills.text}>
      <div className={styles.skillsShell}>
        <p className={styles.sub_text}>
          WEB制作で使用している技術・ツールをまとめています。<br />
          実務経験や習熟度の目安としてご覧ください。
        </p>
        <div className={styles.contentGrid}>
          <div className={styles.tableArea}>
            <nav className={styles.filterTabs} aria-label="Skill categories">
              {FILTERS.map((filter) => (
                <button
                  key={filter.value}
                  type="button"
                  className={activeFilter === filter.value ? styles.active : ''}
                  aria-pressed={activeFilter === filter.value}
                  onClick={() => {
                    setActiveFilter(filter.value)
                    setOpenFilters(filter.value === 'all' ? ['front'] : [filter.value])
                  }}
                >
                  {filter.label}
                </button>
              ))}
            </nav>
            <div className={styles.tableCard}>
              {activeFilter !== 'all' && (
                <table className={styles.skillTable}>
                  <thead>
                    <tr>
                      <th>Skill</th>
                      <th>Experience</th>
                      <th>Years / Context</th>
                      <th>Confidence</th>
                    </tr>
                  </thead>
                  <tbody>
                    {visibleRows.map((item) => (
                      <tr key={`${item.group}-${item.displayName}`}>
                        <th>
                          <span className={styles.skillCell}>
                            {renderLogo(item)}
                            <span>{item.displayName}</span>
                          </span>
                        </th>
                        <td>{renderSegments(item)}</td>
                        <td>
                          <div className={styles.yearsContext}>
                            <span>{getYearsLabel(item)}</span>
                            <small>{item.context}</small>
                          </div>
                        </td>
                        <td>{renderConfidence(item)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              <div className={`${styles.mobileAccordion} ${activeFilter === 'all' ? styles.desktopAccordion : ''}`}>
                <div className={styles.accordionTableHeader}>
                  <span>Skill</span>
                  <span>Experience</span>
                  <span>Years / Context</span>
                  <span>Confidence</span>
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
                        <span>{filter.label}</span>
                        <span className={styles.accordionMeta}>
                          {groupRows.length} Skills
                          <span>{isOpen ? '⌃' : '⌄'}</span>
                        </span>
                      </button>
                      {isOpen && (
                        <div className={styles.accordionPanel}>
                          {groupRows.map((item) => (
                            <article key={`${item.group}-${item.displayName}`} className={styles.mobileSkillRow}>
                              <div className={styles.mobileSkillName}>
                                {renderLogo(item)}
                                <strong>{item.displayName}</strong>
                              </div>
                              <div className={styles.mobileSkillExperience}>
                                {renderSegments(item)}
                              </div>
                              <div className={styles.yearsContext}>
                                <span>{getYearsLabel(item)}</span>
                                <small>{item.context}</small>
                              </div>
                              <div className={styles.mobileConfidence}>{renderConfidence(item)}</div>
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
            <section className={`${styles.infoCard} ${styles.coreCard}`}>
              <span className={styles.bookmark}></span>
              <h3>Core Stack</h3>
              <div className={styles.coreList}>
                {coreStack.map((item) => (
                  <div key={item.displayName} className={styles.coreItem}>
                    {renderLogo(item)}
                    <strong>{item.displayName}</strong>
                    <span>{item.context}</span>
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
                    <div>
                      <span style={{ width: `${item.value}%` }}></span>
                    </div>
                    <small>{item.value}%</small>
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
