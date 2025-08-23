import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Star, Zap, Crown } from 'lucide-react'

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly')

  const plans = [
    {
      name: 'Commission Based',
      description: 'Perfect for small coffees or pop-up venues with low upfront costs',
      price: '2%',
      period: 'per order',
      popular: false,
      icon: Star,
      features: [
        'Standard Commission (2% per order)',
        'All core ODS features included',
        'QR code table management',
        'Order management system',
        'Basic menu management',
        'Standard dashboard reports',
        'Online documentation',
        'Email support',
        'No monthly subscription fees'
      ],
      cta: 'Get Started',
      highlight: false,
      note: 'Reduced Commission (1% per order) available for higher-volume restaurants'
    },
    {
      name: 'Starter',
      description: 'Essential digital ordering for small restaurants',
      price: billingCycle === 'monthly' ? '49' : '490',
      period: billingCycle === 'monthly' ? '/month' : '/year',
      popular: true,
      icon: Zap,
      features: [
        'QR code table management',
        'Basic menu & order management',
        'Standard dashboard reports',
        'Up to 2 employees',
        '1 sector included',
        'Unlimited orders (no commission)',
        'Email support',
        'Online documentation'
      ],
      savings: billingCycle === 'yearly' ? 'Save 2 months' : null,
      cta: 'Start Free Trial',
      highlight: true,
      idealFor: 'Small coffee shops or food trucks'
    },
    {
      name: 'Pro',
      description: 'Complete solution for growing restaurants',
      price: billingCycle === 'monthly' ? '99' : '990',
      period: billingCycle === 'monthly' ? '/month' : '/year',
      popular: false,
      icon: Crown,
      features: [
        'All Starter features included',
        'Inventory management',
        'Purchase orders & suppliers',
        'Waste tracking system',
        'Bookings & reservations',
        'Unlimited menu items',
        'Up to 10 employees',
        'Priority support'
      ],
      savings: billingCycle === 'yearly' ? 'Save 2 months' : null,
      cta: 'Start Free Trial',
      highlight: false,
      idealFor: 'Growing restaurants needing stock control'
    },
    {
      name: 'Enterprise',
      description: 'Full-featured solution for large operations',
      price: billingCycle === 'monthly' ? '199' : '1990',
      period: billingCycle === 'monthly' ? '/month' : '/year',
      popular: false,
      icon: Crown,
      features: [
        'All Pro features included',
        'Marketing automation',
        'Loyalty programs',
        'Custom theme colors',
        'Unlimited employees & sectors',
        'Multi-location support',
        'Dedicated account manager',
        'Custom integrations available',
        'SLA guarantee'
      ],
      savings: billingCycle === 'yearly' ? 'Save 2 months' : null,
      cta: 'Contact Sales',
      highlight: false,
      idealFor: 'Large restaurants or multi-location groups'
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your restaurant's needs. Start free and upgrade as you grow.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <motion.span
                animate={{ x: billingCycle === 'monthly' ? 2 : 22 }}
                transition={{ duration: 0.2 }}
                className="inline-block h-4 w-4 transform rounded-full bg-white shadow-lg"
              />
            </button>
            <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly
              <span className="ml-1 text-xs text-primary font-semibold">(Save 20%)</span>
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
                    Most Popular
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

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 ${
                  plan.highlight
                    ? 'bg-primary text-white hover:bg-primary-dark shadow-lg'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.cta}
              </motion.button>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "Is there a free trial?",
                answer: "Yes! All plans come with a 14-day free trial. No credit card required."
              },
              {
                question: "Can I switch plans anytime?",
                answer: "Absolutely! You can upgrade, downgrade, or change your plan at any time."
              },
              {
                question: "What's included in support?",
                answer: "All plans include email support. Professional and Enterprise get priority support."
              },
              {
                question: "Are there setup fees?",
                answer: "No setup fees ever. We'll help you get started at no additional cost."
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
