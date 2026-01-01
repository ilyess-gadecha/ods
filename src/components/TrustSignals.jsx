import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const TrustSignals = () => {
  const { t } = useTranslation()
  const partners = [
    {
      name: 'Restaurant Chain A',
      logo: '/api/placeholder/120/60',
      alt: 'Restaurant Chain A Logo'
    },
    {
      name: 'Hotel Group B',
      logo: '/api/placeholder/120/60',
      alt: 'Hotel Group B Logo'
    },
    {
      name: 'Coffee Brand C',
      logo: '/api/placeholder/120/60',
      alt: 'Coffee Brand C Logo'
    },
    {
      name: 'Fast Food D',
      logo: '/api/placeholder/120/60',
      alt: 'Fast Food D Logo'
    },
    {
      name: 'Fine Dining E',
      logo: '/api/placeholder/120/60',
      alt: 'Fine Dining E Logo'
    },
    {
      name: 'Cafe Chain F',
      logo: '/api/placeholder/120/60',
      alt: 'Cafe Chain F Logo'
    }
  ]

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            {t('trustSignals.title')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('trustSignals.subtitle')}
          </p>
        </motion.div>

        {/* Platform Capabilities Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {[
            { number: '10+', label: t('trustSignals.stats.features'), prefix: '', suffix: '+' },
            { number: '4', label: t('trustSignals.stats.models'), prefix: '', suffix: '' },
            { number: '24/7', label: t('trustSignals.stats.uptime'), prefix: '', suffix: '' },
            { number: '∞', label: t('trustSignals.stats.orders'), prefix: '', suffix: '' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          {/* Scrolling Animation */}
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: [0, -50] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
              className="flex items-center space-x-12 lg:space-x-16"
              style={{ width: 'calc(200% + 4rem)' }}
            >
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                >
                  {/* Placeholder for logo - replace with actual logos */}
                  <div className="w-24 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-xs text-gray-500 font-medium">
                      {partner.name.split(' ')[0]}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Trust Badges - Removed compliance badges */}
      </div>
    </section>
  )
}

export default TrustSignals
