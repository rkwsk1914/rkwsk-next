import type { Language, Translator } from '@/i18n/translate'

export const formatSkillStart = (date: string | undefined, language: Language, t: Translator): string => {
  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) return t('年月未記載')
  const parsed = new Date(`${date}T00:00:00Z`)
  if (Number.isNaN(parsed.getTime()) || parsed.toISOString().slice(0, 10) !== date) return t('年月未記載')
  return new Intl.DateTimeFormat(language === 'ja' ? 'ja-JP' : 'en-US', {
    year: 'numeric', month: language === 'ja' ? 'long' : 'short', timeZone: 'UTC',
  }).format(parsed)
}
