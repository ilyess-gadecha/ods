import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { SEO_CONTENT, LOCALE_PATHS, OG_LOCALES, BASE_URL } from '../seo/seoContent'

const setMeta = (selector, value) => {
  const el = document.querySelector(selector)
  if (el) el.setAttribute('content', value)
}

const SEOHead = () => {
  const { i18n } = useTranslation()
  const currentLang = i18n.language || 'en'

  const content = SEO_CONTENT[currentLang] || SEO_CONTENT.en
  const currentUrl = LOCALE_PATHS[currentLang] || `${BASE_URL}/`

  useEffect(() => {
    document.title = content.title
    document.documentElement.lang = currentLang

    setMeta('meta[name="description"]', content.description)
    setMeta('meta[name="keywords"]', content.keywords)

    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) canonical.setAttribute('href', currentUrl)

    setMeta('meta[property="og:title"]', content.title)
    setMeta('meta[property="og:description"]', content.description)
    setMeta('meta[property="og:url"]', currentUrl)
    setMeta('meta[property="og:locale"]', OG_LOCALES[currentLang] || 'en_US')

    setMeta('meta[name="twitter:title"]', content.title)
    setMeta('meta[name="twitter:description"]', content.description)
    setMeta('meta[name="twitter:url"]', currentUrl)
  }, [currentLang, content, currentUrl])

  // This component doesn't render anything visible
  return null
}

export default SEOHead
