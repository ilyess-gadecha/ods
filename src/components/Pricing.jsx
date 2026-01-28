import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Check, Star, Zap, Crown } from 'lucide-react'

const Pricing = () => {
  const { t } = useTranslation()
  const [billingCycle, setBillingCycle] = useState('monthly')

  const plans = [
    {
      name: t('pricing.plans.commission.name'),
      description: t('pricing.plans.commission.description'),
      price: '2%',
      period: t('pricing.plans.commission.period'),
      popular: false,
      icon: Star,
      features: [
        t('pricing.plans.commission.features.standard'),
        t('pricing.plans.commission.features.core'),
        t('pricing.plans.commission.features.qr'),
        t('pricing.plans.commission.features.order'),
        t('pricing.plans.commission.features.menu'),
        t('pricing.plans.commission.features.dashboard'),
        t('pricing.plans.commission.features.docs'),
        t('pricing.plans.commission.features.email'),
        t('pricing.plans.commission.features.noFees')
      ],
      cta: t('pricing.cta.getStarted'),
      highlight: false,
      note: t('pricing.plans.commission.note')
    },
    {
      name: t('pricing.plans.starter.name'),
      description: t('pricing.plans.starter.description'),
      price: billingCycle === 'monthly' ? '49' : '490',
      period: billingCycle === 'monthly' ? t('pricing.period.month') : t('pricing.period.year'),
      popular: true,
      icon: Zap,
      features: [
        t('pricing.plans.starter.features.qr'),
        t('pricing.plans.starter.features.menu'),
        t('pricing.plans.starter.features.dashboard'),
        t('pricing.plans.starter.features.employees'),
        t('pricing.plans.starter.features.sector'),
        t('pricing.plans.starter.features.orders'),
        t('pricing.plans.starter.features.email'),
        t('pricing.plans.starter.features.docs')
      ],
      savings: billingCycle === 'yearly' ? t('pricing.save') : null,
      cta: t('pricing.cta.contactUs'),
      highlight: true,
      idealFor: t('pricing.plans.starter.idealFor')
    },
    {
      name: t('pricing.plans.pro.name'),
      description: t('pricing.plans.pro.description'),
      price: billingCycle === 'monthly' ? '99' : '990',
      period: billingCycle === 'monthly' ? t('pricing.period.month') : t('pricing.period.year'),
      popular: false,
      icon: Crown,
      features: [
        t('pricing.plans.pro.features.starter'),
        t('pricing.plans.pro.features.inventory'),
        t('pricing.plans.pro.features.purchase'),
        t('pricing.plans.pro.features.waste'),
        t('pricing.plans.pro.features.bookings'),
        t('pricing.plans.pro.features.menu'),
        t('pricing.plans.pro.features.employees'),
        t('pricing.plans.pro.features.support')
      ],
      savings: billingCycle === 'yearly' ? t('pricing.save') : null,
      cta: t('pricing.cta.contactUs'),
      highlight: false,
      idealFor: t('pricing.plans.pro.idealFor')
    },
    {
      name: t('pricing.plans.enterprise.name'),
      description: t('pricing.plans.enterprise.description'),
      price: billingCycle === 'monthly' ? '199' : '1990',
      period: billingCycle === 'monthly' ? t('pricing.period.month') : t('pricing.period.year'),
      popular: false,
      icon: Crown,
      features: [
        t('pricing.plans.enterprise.features.pro'),
        t('pricing.plans.enterprise.features.marketing'),
        t('pricing.plans.enterprise.features.loyalty'),
        t('pricing.plans.enterprise.features.theme'),
        t('pricing.plans.enterprise.features.employees'),
        t('pricing.plans.enterprise.features.multiLocation'),
        t('pricing.plans.enterprise.features.manager'),
        t('pricing.plans.enterprise.features.integrations'),
        t('pricing.plans.enterprise.features.sla')
      ],
      savings: billingCycle === 'yearly' ? t('pricing.save') : null,
      cta: t('pricing.cta.contactSales'),
      highlight: false,
      idealFor: t('pricing.plans.enterprise.idealFor')
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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {t('pricing.subtitle')}
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8" role="group" aria-label="Billing cycle selection">
            <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
              {t('pricing.billing.monthly')}
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-pressed={billingCycle === 'yearly'}
              aria-label={`Switch to ${billingCycle === 'monthly' ? 'yearly' : 'monthly'} billing`}
            >
              <motion.span
                animate={{ x: billingCycle === 'monthly' ? 2 : 22 }}
                transition={{ duration: 0.2 }}
                className="inline-block h-4 w-4 transform rounded-full bg-white shadow-lg"
              />
            </button>
            <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
              {t('pricing.billing.yearly')}
              <span className="ml-1 text-xs text-primary font-semibold">({t('pricing.billing.savePercent')})</span>
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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

              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                  plan.highlight ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'
                }`}>
                  <plan.icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-2">
                  {plan.name === 'Commission Based' ? (
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-1">{plan.period}</span>
                    </div>
                  ) : plan.name === 'Enterprise' ? (
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-1">{plan.period}</span>
                    </div>
                  ) : (
                    <div className="flex items-baseline justify-center">
                      <span className="text-lg text-gray-500">$</span>
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-1">{plan.period}</span>
                    </div>
                  )}
                </div>

                {plan.savings && (
                  <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                    {plan.savings}
                  </span>
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
