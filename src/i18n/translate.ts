import content from './content.en.json'
import history from './history.en.json'
import philosophy from './philosophy.en.json'
import projects from './projects.en.json'
import english from './ui.en.json'
import japanese from './ui.ja.json'

export type Language = 'ja' | 'en'
export type Translator = (text: string) => string

const messages: Record<Language, Record<string, string>> = {
  ja: japanese,
  en: { ...history, ...philosophy, ...projects, ...english, ...content },
}

export const translate = (language: Language, text: string): string => {
  const translated = messages[language][text]
  if (translated !== undefined) return translated
  // Technology lists retain their names; only their separators change in English.
  return language === 'en' ? text.replaceAll('、', ', ').replaceAll('／', ' / ') : text
}
