import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

import { translate } from './translate'

import type { Language, Translator } from './translate'

export const LANGUAGE_STORAGE_KEY = 'rkwsk-language'

const LanguageContext = createContext<{
  language: Language
  isReady: boolean
  setLanguage: (language: Language) => void
  t: Translator
}>({ language: 'ja', isReady: true, setLanguage: () => {}, t: text => translate('ja', text) })

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, updateLanguage] = useState<Language>('ja')
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY)
      if (saved === 'ja' || saved === 'en') updateLanguage(saved)
    } catch {
      // Language switching remains available when browser storage is disabled.
    } finally {
      setIsReady(true)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const setLanguage = useCallback((next: Language) => {
    updateLanguage(next)
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, next)
    } catch {
      // Keep the current in-memory preference even if it cannot be persisted.
    }
  }, [])

  const value = useMemo(() => ({
    language,
    isReady,
    setLanguage,
    t: (text: string) => translate(language, text),
  }), [language, isReady, setLanguage])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => useContext(LanguageContext)
