import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import translationEN from './locales/en.json'
import translationFR from './locales/fr.json'
import translationDE from './locales/de.json'

const resources = {
  en: { translation: translationEN },
  fr: { translation: translationFR },
  de: { translation: translationDE }
}

// Language is encoded in the URL path (/, /fr/, /de/) so each localized page
// is a real, prerendered document. Boot i18n from the path.
export const langFromPath = (pathname = '') => {
  if (pathname.startsWith('/fr')) return 'fr'
  if (pathname.startsWith('/de')) return 'de'
  return 'en'
}

const initialLang =
  typeof window !== 'undefined' ? langFromPath(window.location.pathname) : 'en'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    lng: initialLang,
    debug: false,
    interpolation: {
      escapeValue: false
    }
  })

// Keep language in sync with browser back/forward navigation.
if (typeof window !== 'undefined') {
  window.addEventListener('popstate', () => {
    const lng = langFromPath(window.location.pathname)
    if (i18n.language !== lng) i18n.changeLanguage(lng)
  })
}

export default i18n
