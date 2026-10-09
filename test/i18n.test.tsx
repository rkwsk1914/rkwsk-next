import { act } from 'react'

import { createRoot } from 'react-dom/client'
import { renderToStaticMarkup } from 'react-dom/server'

import { LanguageProvider, LANGUAGE_STORAGE_KEY, useLanguage } from '@/i18n/LanguageProvider'
import { translate } from '@/i18n/translate'

import { getHistoryData } from '@/const/page/HistoryData'
import { PROJECTS } from '@/const/page/ProjectData'
import { PHILOSOPHY_EXAMPLES, PROJECT_SUMMARIES, SELECTED_PROJECTS } from '@/const/page/ProjectHighlights'
import { SKILL_CONTEXTS } from '@/const/page/SkillContexts'
import { SKILL_SET_DATA } from '@/const/page/SkillSetData'
import { getContactSchema } from '@/const/Schema'

import { formatSkillStart } from '@/components/pages/TopPage/MySkillSetSection/formatSkillStart'
import { AiPhilosophyContent } from '@/components/pages/TopPage/PhilosophySection/AiPhilosophyContent'
import { ChangePhilosophyContent, EssencePhilosophyContent } from '@/components/pages/TopPage/PhilosophySection/PhilosophyContent'

const japaneseText = /[ぁ-んァ-ヶ一-龠]/
const en = (text: string) => translate('en', text)

describe('Translation coverage', () => {
  test('provides bilingual summaries for every project and links examples to real projects', () => {
    const slugs = PROJECTS.map(project => project.slug)
    expect(Object.keys(PROJECT_SUMMARIES).sort()).toEqual([...slugs].sort())
    const strings = Object.values(PROJECT_SUMMARIES).flatMap(summary => Object.values(summary))
    for (const item of SELECTED_PROJECTS) {
      expect(slugs).toContain(item.slug)
      strings.push(item.title, item.description)
    }
    for (const item of Object.values(PHILOSOPHY_EXAMPLES)) {
      expect(slugs).toContain(item.slug)
      strings.push(item.body)
    }
    for (const text of strings) {
      expect(en(text)).not.toMatch(japaneseText)
      expect(translate('ja', text)).toBe(text)
    }
  })

  test('describes the use of every listed skill in both languages', () => {
    for (const item of SKILL_SET_DATA.flatMap(group => group.data)) {
      const context = SKILL_CONTEXTS[item.label!]
      expect(context).toBeTruthy()
      expect(en(context)).not.toMatch(japaneseText)
    }
  })
  test.each(PROJECTS)('translates every section of $slug without changing its source', project => {
    const original = JSON.stringify(project)
    const strings = [project.title, project.shortTitle, project.period,
      ...project.sections.flatMap(section => [section.title, ...section.paragraphs])]
    for (const text of strings) {
      expect(en(text)).not.toMatch(japaneseText)
      expect(translate('ja', text)).toBe(text)
    }
    expect(JSON.stringify(project)).toBe(original)
  })

  test('translates the whole history while retaining its chronology', () => {
    const original = getHistoryData(text => text)
    const translated = getHistoryData(en)
    expect(translated.map(item => item.year)).toEqual(original.map(item => item.year))
    for (const year of translated) {
      for (const entry of year.monthlyDate) {
        expect(renderToStaticMarkup(<>{entry.content}</>)).not.toMatch(japaneseText)
      }
    }
  })

  test('keeps titles and technical names, and localizes the English hero description', () => {
    for (const title of ['Full Stack Engineer', 'Ryo Kawasaki', 'Philosophy', 'History', 'Skills', 'Contact', 'PROJECT DETAIL', '01 — WITH AI']) {
      expect(translate('ja', title)).toBe(title)
      expect(en(title)).toBe(title)
    }
    expect(translate('ja', 'Integrating AI into research, implementation, and code review to build better applications with React, Next.js, and TypeScript.')).toMatch('調査・実装・コードレビュー')
    expect(en('React、TypeScript')).toBe('React, TypeScript')
  })
})

describe('Confirmed dates and experience labels', () => {
  test('shows ongoing participation and the confirmed Shopify work start', () => {
    const parking = PROJECTS.find(project => project.slug === 'parking-reservation')!
    expect(parking.period).toBe('2026年10月～現在')
    expect(en(parking.period)).toBe('October 2026–present')
    const shopify = SKILL_SET_DATA.flatMap(group => group.data).find(item => item.label === 'Shopify')!
    expect(shopify.acquisitionDate).toBe('2022-08-01')
    expect(formatSkillStart(shopify.acquisitionDate, 'ja', text => translate('ja', text))).toBe('2022年8月')
    expect(formatSkillStart(shopify.acquisitionDate, 'en', en)).toBe('Aug 2022')
  })

  test.each([undefined, '', 'unknown', '2025-02-30'])('does not imply recent experience when the start date is absent or invalid: %s', value => {
    expect(formatSkillStart(value, 'en', en)).toBe('Date not recorded')
    expect(formatSkillStart(value, 'ja', text => translate('ja', text))).toBe('年月未記載')
  })
})

describe('Language preference', () => {
  let container: HTMLDivElement
  let root: ReturnType<typeof createRoot>

  beforeEach(() => {
    (globalThis as typeof globalThis & { IS_REACT_ACT_ENVIRONMENT: boolean }).IS_REACT_ACT_ENVIRONMENT = true
    localStorage.clear()
    container = document.createElement('div')
    document.body.appendChild(container)
    root = createRoot(container)
  })

  afterEach(async () => {
    await act(async () => root.unmount())
    container.remove()
    localStorage.clear()
    jest.restoreAllMocks()
  })

  const Controls = () => {
    const { language, setLanguage, t } = useLanguage()
    return <><output>{language}: {t('送信')}</output><button onClick={() => setLanguage('en')}>English</button><button onClick={() => setLanguage('ja')}>日本語</button></>
  }

  test('defaults to Japanese and saves language across page content changes and remounts', async () => {
    await act(async () => root.render(<LanguageProvider><Controls /></LanguageProvider>))
    expect(container.querySelector('output')?.textContent).toBe('ja: 送信')
    await act(async () => container.querySelector('button')?.click())
    expect(localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe('en')
    expect(document.documentElement.lang).toBe('en')
    await act(async () => root.render(<LanguageProvider><Controls /><p>Another page</p></LanguageProvider>))
    expect(container.querySelector('output')?.textContent).toBe('en: Send message')
    await act(async () => root.unmount())
    root = createRoot(container)
    await act(async () => root.render(<LanguageProvider><Controls /></LanguageProvider>))
    expect(container.querySelector('output')?.textContent).toBe('en: Send message')
    await act(async () => container.querySelectorAll('button')[1].click())
    expect(localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe('ja')
    expect(document.documentElement.lang).toBe('ja')
  })

  test('works with an invalid saved value and unavailable storage', async () => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, 'unknown')
    await act(async () => root.render(<LanguageProvider><Controls /></LanguageProvider>))
    expect(document.documentElement.lang).toBe('ja')
    jest.spyOn(Storage.prototype, 'setItem').mockImplementation(() => { throw new Error('Storage disabled') })
    await act(async () => container.querySelector('button')?.click())
    expect(container.querySelector('output')?.textContent).toBe('en: Send message')
  })

  test('translates all three Philosophy articles, including inline emphasis and the tool table', async () => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, 'en')
    await act(async () => root.render(<LanguageProvider><AiPhilosophyContent /><EssencePhilosophyContent /><ChangePhilosophyContent /></LanguageProvider>))
    expect(container.textContent).not.toMatch(japaneseText)
    expect(container.textContent).toContain('CLAUDE.md and AGENTS.md')
    expect(container.textContent).toContain('I believe the questions we ask matter.')
    expect(container.querySelectorAll('h3')).toHaveLength(12)
    expect(container.querySelectorAll('table tbody tr')).toHaveLength(5)
  })
})

describe('Contact validation by language', () => {
  const inquiry = {
    firstName: 'Smith', lastName: 'Alex', firstKanaName: '', lastKanaName: '',
    email: 'alex@example.com', tel: '+14155552671', contact: 'I would like to discuss an application development project.',
  }

  test('accepts international names and phone numbers without kana in English', () => {
    expect(getContactSchema('en').safeParse(inquiry).success).toBe(true)
    expect(getContactSchema('ja').safeParse(inquiry).success).toBe(false)
  })

  test('keeps Japanese form requirements and accepts a Japanese inquiry', () => {
    const japaneseInquiry = { ...inquiry, firstName: '山田', lastName: '太郎', firstKanaName: 'やまだ', lastKanaName: 'たろう', tel: '09012345678' }
    expect(getContactSchema('ja').safeParse(japaneseInquiry).success).toBe(true)
    expect(getContactSchema('ja').safeParse({ ...japaneseInquiry, firstKanaName: '' }).success).toBe(false)
  })

  test.each([{ firstName: ' ' }, { email: 'invalid' }, { tel: 'abc' }, { contact: '' }, { contact: 'x'.repeat(501) }])('rejects invalid English inquiries: %j', invalid => {
    expect(getContactSchema('en').safeParse({ ...inquiry, ...invalid }).success).toBe(false)
  })
})
