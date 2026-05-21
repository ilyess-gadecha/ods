import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Check, Star, Zap, Crown } from 'lucide-react'
import { ADMIN_REGISTER_URL } from '../constants/links'

const Pricing = () => {
  const { t } = useTranslation()

  const plans = [
    {
      name: t('pricing.plans.monthly.name'),
      description: t('pricing.plans.monthly.description'),
      price: '49',
      period: t('pricing.period.month'),
      popular: false,
      icon: Zap,
      features: [
        // Restaurant Management
        t('pricing.plans.monthly.features.tables'),
        t('pricing.plans.monthly.features.menu'),
        t('pricing.plans.monthly.features.categories'),
        t('pricing.plans.monthly.features.qr'),
        t('pricing.plans.monthly.features.branding'),
        // Order & Operations
        t('pricing.plans.monthly.features.orders'),
        t('pricing.plans.monthly.features.kitchen'),
        t('pricing.plans.monthly.features.payment'),
        // Analytics & Reports
        t('pricing.plans.monthly.features.dashboard'),
        t('pricing.plans.monthly.features.analytics'),
        t('pricing.plans.monthly.features.reports'),
        t('pricing.plans.monthly.features.activityLogs'),
        // Team & Inventory & Cost
        t('pricing.plans.monthly.features.employees'),
        t('pricing.plans.monthly.features.inventory'),
        t('pricing.plans.monthly.features.costTracking'),
        t('pricing.plans.monthly.features.costManagement'),
        // Customer Engagement
        t('pricing.plans.monthly.features.reservations'),
        t('pricing.plans.monthly.features.qrReservations'),
        t('pricing.plans.monthly.features.clickCollect'),
        t('pricing.plans.monthly.features.qrClickCollect'),
        t('pricing.plans.monthly.features.marketing'),
        t('pricing.plans.monthly.features.notifications'),
        // Support & Advanced
        t('pricing.plans.monthly.features.multiLocation'),
        t('pricing.plans.monthly.features.support')
      ],
      cta: t('pricing.cta.getStarted'),
      highlight: false,
      idealFor: t('pricing.plans.monthly.idealFor'),
      billing: t('pricing.plans.monthly.billing')
    },
    {
      name: t('pricing.plans.yearly.name'),
      description: t('pricing.plans.yearly.description'),
      price: '490',
      period: t('pricing.period.year'),
      popular: true,
      icon: Crown,
      features: [
        // Restaurant Management
        t('pricing.plans.yearly.features.tables'),
        t('pricing.plans.yearly.features.menu'),
        t('pricing.plans.yearly.features.categories'),
        t('pricing.plans.yearly.features.qr'),
        t('pricing.plans.yearly.features.branding'),
        // Order & Operations
        t('pricing.plans.yearly.features.orders'),
        t('pricing.plans.yearly.features.kitchen'),
        t('pricing.plans.yearly.features.payment'),
        // Analytics & Reports
        t('pricing.plans.yearly.features.dashboard'),
        t('pricing.plans.yearly.features.analytics'),
        t('pricing.plans.yearly.features.reports'),
        t('pricing.plans.yearly.features.activityLogs'),
        // Team & Inventory & Cost
        t('pricing.plans.yearly.features.employees'),
        t('pricing.plans.yearly.features.inventory'),
        t('pricing.plans.yearly.features.costTracking'),
        t('pricing.plans.yearly.features.costManagement'),
        // Customer Engagement
        t('pricing.plans.yearly.features.reservations'),
        t('pricing.plans.yearly.features.qrReservations'),
        t('pricing.plans.yearly.features.clickCollect'),
        t('pricing.plans.yearly.features.qrClickCollect'),
        t('pricing.plans.yearly.features.marketing'),
        t('pricing.plans.yearly.features.notifications'),
        // Support & Advanced
        t('pricing.plans.yearly.features.multiLocation'),
        t('pricing.plans.yearly.features.prioritySupport')
      ],
      savings: t('pricing.plans.yearly.savings'),
      cta: t('pricing.cta.getStarted'),
      highlight: true,
      idealFor: t('pricing.plans.yearly.idealFor'),
      billing: t('pricing.plans.yearly.billing'),
      discount: t('pricing.plans.yearly.discount')
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-white" aria-labelledby="pricing-title">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="pricing-title" className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            {t('pricing.subtitle')}
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-50 border border-green-200 rounded-full mb-8">
            <Check className="w-5 h-5 text-green-600" />
            <span className="text-green-800 font-semibold">{t('pricing.trial.message')}</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl p-8 ${
                plan.highlight
                  ? 'bg-white border-2 border-primary shadow-xl scale-105'
                  : 'bg-white border border-gray-200 shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {t('pricing.mostPopular')}
                  </span>
                </div>
              )}
              
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                  <Check className="w-3 h-3" />
                  {t('pricing.trial.badge')}
                </span>
              </div>

              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                  plan.highlight ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'
                }`}>
                  <plan.icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-2">
                  <div className="flex items-baseline justify-center">
                    <span className="text-lg text-gray-500">€</span>
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                </div>

                {plan.savings && (
                  <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                    {plan.savings}
                  </span>
                )}

                {plan.discount && (
                  <p className="text-sm text-blue-600 font-medium mt-2">{plan.discount}</p>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.idealFor && (
                <div className="mb-6 p-4 bg-gray-50 rounded-xl">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">{t('pricing.idealFor')}: </span>
                    {plan.idealFor}
                  </p>
                </div>
              )}

              <a
                href={ADMIN_REGISTER_URL}
                className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all ${
                  plan.highlight
                    ? 'bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">{t('pricing.faq.title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: t('pricing.faq.questions.trial.q'),
                answer: t('pricing.faq.questions.trial.a')
              },
              {
                question: t('pricing.faq.questions.switch.q'),
                answer: t('pricing.faq.questions.switch.a')
              },
              {
                question: t('pricing.faq.questions.support.q'),
                answer: t('pricing.faq.questions.support.a')
              },
              {
                question: t('pricing.faq.questions.fees.q'),
                answer: t('pricing.faq.questions.fees.a')
              }
            ].map((faq, index) => (
              <div key={index} className="text-left">
                <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
