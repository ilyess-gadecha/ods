import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const SEOHead = () => {
  const { i18n } = useTranslation()
  const currentLang = i18n.language || 'en'
  
  // Dynamic SEO content based on language
  const seoContent = {
    en: {
      title: 'ODS - #1 Restaurant Management Platform | QR Code Ordering & Analytics',
      description: 'Modernize your restaurant with ODS - the all-in-one ordering dashboard solution. QR code menus, real-time order management, inventory tracking, and powerful analytics. Start your free trial today!',
      keywords: 'restaurant management software, QR code ordering, restaurant POS system, order management, restaurant analytics, menu management, inventory management, table management, restaurant dashboard, contactless ordering, restaurant technology, food service software, hospitality software, restaurant operations, digital menu, online ordering system'
    },
    fr: {
      title: 'ODS - Plateforme #1 de Gestion de Restaurant | Commande QR Code & Analytique',
      description: 'Modernisez votre restaurant avec ODS - la solution de tableau de bord de commandes tout-en-un. Menus QR code, gestion des commandes en temps réel, suivi des stocks et analyses puissantes. Commencez votre essai gratuit!',
      keywords: 'logiciel de gestion de restaurant, commande QR code, système POS restaurant, gestion des commandes, analytique restaurant, gestion de menu, gestion des stocks, gestion des tables, tableau de bord restaurant, commande sans contact, technologie restaurant, logiciel de restauration, logiciel hôtellerie, opérations restaurant, menu numérique, système de commande en ligne'
    }
  }
  
  const content = seoContent[currentLang] || seoContent.en
  const baseUrl = 'https://ordering-dashboard-solution.com'
  const currentUrl = currentLang === 'fr' ? `${baseUrl}/fr/` : `${baseUrl}/`

  useEffect(() => {
    // Update document title
    document.title = content.title
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLang
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', content.description)
    }
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute('content', content.keywords)
    }
    
    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) {
      canonical.setAttribute('href', currentUrl)
    }
    
    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', content.title)
    
    let ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) ogDescription.setAttribute('content', content.description)
    
    let ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) ogUrl.setAttribute('href', currentUrl)
    
    let ogLocale = document.querySelector('meta[property="og:locale"]')
    if (ogLocale) ogLocale.setAttribute('content', currentLang === 'fr' ? 'fr_FR' : 'en_US')
    
    // Update Twitter tags
    let twitterTitle = document.querySelector('meta[name="twitter:title"]')
    if (twitterTitle) twitterTitle.setAttribute('content', content.title)
    
    let twitterDescription = document.querySelector('meta[name="twitter:description"]')
    if (twitterDescription) twitterDescription.setAttribute('content', content.description)
    
  }, [currentLang, content, currentUrl])

  // This component doesn't render anything visible
  return null
}

export default SEOHead
