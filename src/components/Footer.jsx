import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin,
  Heart
} from 'lucide-react'
import odsLogo from '../assets/ods-logo.png'

const Footer = () => {
  const { t } = useTranslation()
  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/share/16nyw6E6yQ/?mibextid=wwXIfr' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/ods_solution/' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/ordering-dashboard-solutions-io' }
  ]

  return (
    <footer className="bg-[#1a2332] text-white" role="contentinfo">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            {/* Logo */}
            <a href="/" className="flex items-center justify-center mb-8" aria-label="ODS - Home">
              <img 
                src={odsLogo} 
                alt="ODS - Restaurant Management Platform Logo" 
                className="w-16 h-16 object-contain"
                width="64"
                height="64"
                loading="lazy"
              />
            </a>
            
            <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
              {t('footer.description')}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center justify-center space-x-3 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Mail className="w-5 h-5 text-primary" />
                <a href={`mailto:${t('footer.email')}`} className="text-base">
                  {t('footer.email')}
                </a>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center justify-center space-x-3 text-gray-400"
              >
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800/50 bg-[#0f1419]">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-gray-400 text-sm"
            >
              <span>© 2026 {t('footer.copyright')}</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>{t('footer.forRestaurants')}</span>
            </motion.div>

            {/* Social Links */}
            <motion.nav
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
              aria-label="Social media links"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-800/50 hover:bg-primary border border-gray-700/50 hover:border-primary rounded-lg flex items-center justify-center transition-all duration-300"
                  aria-label={`Follow ODS on ${social.name}`}
                >
                  <social.icon className="w-5 h-5" aria-hidden="true" />
                </motion.a>
              ))}
            </motion.nav>
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-8 mt-8 pt-8 border-t border-gray-800/50 text-sm text-gray-500"
          >
            <div className="flex items-center space-x-2">
              <span className="text-yellow-500">🔒</span>
              <span>{t('footer.security')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-blue-500">🌍</span>
              <span>{t('footer.worldwide')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-500">📱</span>
              <span>{t('footer.mobile')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-purple-500">☁️</span>
              <span>{t('footer.cloud')}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
