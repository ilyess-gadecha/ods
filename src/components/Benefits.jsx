import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { 
  TrendingUp, 
  Clock, 
  Users, 
  DollarSign, 
  Star, 
  Target,
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import { ADMIN_REGISTER_URL } from '../constants/links'

const Benefits = () => {
  const { t } = useTranslation()
  
  const mainBenefits = [
    {
      icon: TrendingUp,
      title: t('benefits.main.revenue.title'),
      description: t('benefits.main.revenue.description'),
      stats: [
        { label: t('benefits.main.revenue.stats.increase'), value: '35%' },
        { label: t('benefits.main.revenue.stats.speed'), value: '3x' },
        { label: t('benefits.main.revenue.stats.retention'), value: '+45%' }
      ],
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Clock,
      title: t('benefits.main.time.title'),
      description: t('benefits.main.time.description'),
      stats: [
        { label: t('benefits.main.time.stats.saved'), value: '15+ hrs' },
        { label: t('benefits.main.time.stats.reduced'), value: '80%' },
        { label: t('benefits.main.time.stats.efficiency'), value: '+60%' }
      ],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Users,
      title: t('benefits.main.experience.title'),
      description: t('benefits.main.experience.description'),
      stats: [
        { label: t('benefits.main.experience.stats.satisfaction'), value: '98%' },
        { label: t('benefits.main.experience.stats.accuracy'), value: '99.5%' },
        { label: t('benefits.main.experience.stats.waitTime'), value: '50%' }
      ],
      color: 'from-purple-500 to-pink-600'
    }
  ]

  const additionalBenefits = [
    {
      icon: DollarSign,
      title: t('benefits.additional.costs.title'),
      description: t('benefits.additional.costs.description'),
      percentage: '25%'
    },
    {
      icon: Star,
      title: t('benefits.additional.accuracy.title'),
      description: t('benefits.additional.accuracy.description'),
      percentage: '99.5%'
    },
    {
      icon: Target,
      title: t('benefits.additional.decisions.title'),
      description: t('benefits.additional.decisions.description'),
      percentage: '100%'
    }
  ]

  const successMetrics = [
    { number: '2M+', label: t('benefits.metrics.orders'), icon: '📦' },
    { number: '98%', label: t('benefits.metrics.satisfaction'), icon: '⭐' },
    { number: '35%', label: t('benefits.metrics.revenue'), icon: '📈' },
    { number: '15hrs', label: t('benefits.metrics.timeSaved'), icon: '⏰' }
  ]

  return (
    <section id="benefits" className="py-20 bg-white" aria-labelledby="benefits-title">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="benefits-title" className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('benefits.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('benefits.subtitle')}
          </p>
        </motion.div>

        {/* Main Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {mainBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-xl mb-6`}>
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {benefit.description}
              </p>
              
              {/* Stats */}
              <div className="space-y-3">
                {benefit.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="text-sm text-gray-600">{stat.label}</span>
                    <span className="font-bold text-primary">{stat.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 mb-20 border border-gray-100"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t('benefits.proven.title')}
            </h3>
            <p className="text-gray-600">
              {t('benefits.proven.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl mb-3">{metric.icon}</div>
                <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">
                  {metric.number}
                </div>
                <div className="text-gray-600 font-medium">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {additionalBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary/20 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold gradient-text">
                  {benefit.percentage}
                </div>
              </div>
              
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h4>
              
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-primary/5 to-primary-light/5 rounded-2xl p-8 border border-primary/10"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t('benefits.cta.title')}
            </h3>
            <p className="text-gray-600 mb-6">
              {t('benefits.cta.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href={ADMIN_REGISTER_URL}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary px-8 py-3 flex items-center space-x-2"
              >
                <span>{t('pricing.cta.getStarted')}</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>{t('benefits.cta.noCredit')}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Benefits
