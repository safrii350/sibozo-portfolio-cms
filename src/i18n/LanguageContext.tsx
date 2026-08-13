import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Language = 'de' | 'en'

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const getInitialLanguage = (): Language => localStorage.getItem('language') === 'en' ? 'en' : 'de'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)

  useEffect(() => {
    document.documentElement.lang = language
    localStorage.setItem('language', language)
  }, [language])

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
}

// Provider and hook intentionally share this small module.
// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}
