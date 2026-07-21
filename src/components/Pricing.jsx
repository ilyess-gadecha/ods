import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Check, Zap, Crown, CreditCard, ArrowRight } from 'lucide-react'
import { ADMIN_REGISTER_URL } from '../constants/links'

const FEATURE_KEYS = [
  // Restaurant Management
  'tables', 'menu', 'categories', 'qr', 'branding',
  // Order & Operations
  'orders', 'kitchen', 'payment',
  // Analytics & Reports
  'dashboard', 'analytics', 'reports', 'activityLogs',
  // Team & Inventory & Cost
  'employees', 'inventory', 'costTracking', 'costManagement',
  // Customer Engagement
  'reservations', 'qrReservations', 'clickCollect', 'qrClickCollect', 'marketing', 'notifications',
  // Support & Advanced
  'multiLocation'
]

const Pricing = () => {
  const { t } = useTranslation()

  // Feature lists reuse the existing translated keys; the two plans differ only
  // in their final support line.
  const featuresBase = FEATURE_KEYS.map((k) => t(`pricing.plans.monthly.features.${k}`))

  const plans = [
    {
      key: 'free',
      name: t('pricing.plans.free.name'),
      badge: t('pricing.plans.free.badge'),
      description: t('pricing.plans.free.description'),
      price: '0',
      period: t('pricing.period.month'),
      icon: Zap,
      highlight: true,
      popular: true,
      features: [...featuresBase, t('pricing.plans.monthly.features.support')],
      idealFor: t('pricing.plans.free.idealFor'),
      priceNote: t('pricing.plans.free.priceNote'),
      cta: t('pricing.cta.getStarted'),
      ctaHref: ADMIN_REGISTER_URL
    },
    {
      key: 'custom',
      name: t('pricing.plans.custom.name'),
      badge: t('pricing.plans.custom.badge'),
      description: t('pricing.plans.custom.description'),
      custom: true,
      priceLabel: t('pricing.plans.custom.priceLabel'),
      icon: Crown,
      highlight: false,
      features: [...featuresBase, t('pricing.plans.yearly.features.prioritySupport')],
      idealFor: t('pricing.plans.custom.idealFor'),
      priceNote: t('pricing.plans.custom.priceNote'),
      cta: t('pricing.cta.priceCenter'),
      ctaHref: '#contact'
    }
  ]

  const faqs = ['cost', 'trial', 'payments', 'switch', 'support', 'fees'].map((k) => ({
    question: t(`pricing.faq.questions.${k}.q`),
    answer: t(`pricing.faq.questions.${k}.a`)
  }))

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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            {t('pricing.subtitle')}
          </p>

          {/* Headline model: free at 500+ orders/month */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-50 border border-green-200 rounded-full mb-4">
            <Check className="w-5 h-5 text-green-600" />
            <span className="text-green-800 font-semibold">{t('pricing.headline')}</span>
          </div>

          {/* Pay-first / customer payments banner */}
          <div className="max-w-3xl mx-auto flex items-start gap-4 rounded-2xl border border-primary/15 bg-primary/[0.04] p-5 text-left mt-4">
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{t('pricing.payFirst.title')}</h3>
              <p className="text-sm text-gray-600 mt-1">{t('pricing.payFirst.text')}</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col rounded-2xl p-8 ${
                plan.highlight
                  ? 'bg-white border-2 border-primary shadow-xl md:scale-105'
                  : 'bg-white border border-gray-200 shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                    {t('pricing.mostPopular')}
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                  plan.highlight ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'
                }`}>
                  <plan.icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>

                <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold mb-4 ${
                  plan.highlight ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-600'
                }`}>
                  {plan.badge}
                </span>

                <p className="text-gray-600 mb-6 min-h-[3rem]">{plan.description}</p>

                <div className="min-h-[80px] flex flex-col justify-center">
                  {plan.custom ? (
                    <div className="text-3xl font-bold text-gray-900">{plan.priceLabel}</div>
                  ) : (
                    <div className="flex items-baseline justify-center">
                      <span className="text-lg text-gray-500">€</span>
                      <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-1">{plan.period}</span>
                    </div>
                  )}
                  {plan.priceNote && (
                    <p className="text-sm text-gray-500 mt-2">{plan.priceNote}</p>
                  )}
                </div>
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
                href={plan.ctaHref}
                className={`mt-auto flex items-center justify-center gap-2 w-full text-center py-3 px-6 rounded-xl font-semibold transition-all ${
                  plan.highlight
                    ? 'bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
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
            {faqs.map((faq, index) => (
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
