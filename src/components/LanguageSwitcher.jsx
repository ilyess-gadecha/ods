import React, { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const USFlag = () => (
  <svg className="w-6 h-6 rounded-sm" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <rect fill="#1e3a8a" width="32" height="32"/>
    <g fill="#fff">
      <rect y="0" width="32" height="2.5"/>
      <rect y="5" width="32" height="2.5"/>
      <rect y="10" width="32" height="2.5"/>
      <rect y="15" width="32" height="2.5"/>
      <rect y="20" width="32" height="2.5"/>
      <rect y="25" width="32" height="2.5"/>
      <rect y="29.5" width="32" height="2.5"/>
    </g>
    <g fill="#dc2626">
      <rect y="2.5" width="32" height="2.5"/>
      <rect y="7.5" width="32" height="2.5"/>
      <rect y="12.5" width="32" height="2.5"/>
      <rect y="17.5" width="32" height="2.5"/>
      <rect y="22.5" width="32" height="2.5"/>
      <rect y="27.5" width="32" height="2.5"/>
    </g>
    <rect fill="#1e3a8a" width="13" height="14"/>
  </svg>
)

const FRFlag = () => (
  <svg className="w-6 h-6 rounded-sm" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <rect fill="#1e3a8a" width="10.67" height="32"/>
    <rect fill="#fff" x="10.67" width="10.67" height="32"/>
    <rect fill="#dc2626" x="21.33" width="10.67" height="32"/>
  </svg>
)

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const languages = [
    { code: 'en', name: 'English', flag: <USFlag /> },
    { code: 'fr', name: 'Français', flag: <FRFlag /> }
  ]

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0]

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setIsOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 border border-gray-200"
      >
        <span className="flex-shrink-0">{currentLanguage.flag}</span>
        <span className="hidden sm:inline text-sm font-medium text-gray-700">
          {currentLanguage.code.toUpperCase()}
        </span>
        <ChevronDown 
          size={16} 
          className={`text-gray-600 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50"
          >
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => changeLanguage(language.code)}
                className={`w-full flex items-center space-x-3 px-4 py-2 hover:bg-gray-50 transition-colors duration-200 ${
                  currentLanguage.code === language.code ? 'bg-primary/5' : ''
                }`}
              >
                <span className="flex-shrink-0">{language.flag}</span>
                <div className="flex flex-col items-start">
                  <span className="text-sm font-medium text-gray-900">
                    {language.name}
                  </span>
                  <span className="text-xs text-gray-500">
                    {language.code.toUpperCase()}
                  </span>
                </div>
                {currentLanguage.code === language.code && (
                  <span className="ml-auto text-primary">✓</span>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default LanguageSwitcher
