import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { 
  ShoppingCart, 
  BarChart3, 
  Users, 
  Smartphone, 
  Clock, 
  Settings,
  QrCode,
  CreditCard,
  Printer,
  Globe,
  Shield,
  Zap,
  Package,
  DollarSign,
  Calendar
} from 'lucide-react'

const Features = () => {
  const { t } = useTranslation()
  
  const features = [
    {
      icon: ShoppingCart,
      title: t('features.items.orderManagement.title'),
      description: t('features.items.orderManagement.description'),
      benefits: [
        t('features.items.orderManagement.benefits.tracking'),
        t('features.items.orderManagement.benefits.integration'),
        t('features.items.orderManagement.benefits.notifications')
      ],
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: QrCode,
      title: t('features.items.qrOrdering.title'),
      description: t('features.items.qrOrdering.description'),
      benefits: [
        t('features.items.qrOrdering.benefits.contactless'),
        t('features.items.qrOrdering.benefits.tableCodes'),
        t('features.items.qrOrdering.benefits.menuAccess')
      ],
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: BarChart3,
      title: t('features.items.analytics.title'),
      description: t('features.items.analytics.description'),
      benefits: [
        t('features.items.analytics.benefits.sales'),
        t('features.items.analytics.benefits.insights'),
        t('features.items.analytics.benefits.tracking')
      ],
      color: 'bg-purple-50 text-purple-600'
    },
    {
      icon: Users,
      title: t('features.items.staffManagement.title'),
      description: t('features.items.staffManagement.description'),
      benefits: [
        t('features.items.staffManagement.benefits.roleManagement'),
        t('features.items.staffManagement.benefits.metrics'),
        t('features.items.staffManagement.benefits.schedule')
      ],
      color: 'bg-orange-50 text-orange-600'
    },
    {
      icon: Smartphone,
      title: t('features.items.mobileApps.title'),
      description: t('features.items.mobileApps.description'),
      benefits: [
        t('features.items.mobileApps.benefits.customerApp'),
        t('features.items.mobileApps.benefits.staffApp'),
        t('features.items.mobileApps.benefits.offline')
      ],
      color: 'bg-pink-50 text-pink-600'
    },
    {
      icon: Settings,
      title: t('features.items.integrations.title'),
      description: t('features.items.integrations.description'),
      benefits: [
        t('features.items.integrations.benefits.api'),
        t('features.items.integrations.benefits.thirdParty'),
        t('features.items.integrations.benefits.workflows')
      ],
      color: 'bg-indigo-50 text-indigo-600'
    },
    {
      icon: CreditCard,
      title: t('features.items.payment.title'),
      description: t('features.items.payment.description'),
      benefits: [
        t('features.items.payment.benefits.multipleMethods'),
        t('features.items.payment.benefits.secure'),
        t('features.items.payment.benefits.split')
      ],
      color: 'bg-emerald-50 text-emerald-600'
    },
    {
      icon: Printer,
      title: t('features.items.kitchen.title'),
      description: t('features.items.kitchen.description'),
      benefits: [
        t('features.items.kitchen.benefits.display'),
        t('features.items.kitchen.benefits.printing'),
        t('features.items.kitchen.benefits.prioritization')
      ],
      color: 'bg-red-50 text-red-600'
    },
    {
      icon: Globe,
      title: t('features.items.multiLocation.title'),
      description: t('features.items.multiLocation.description'),
      benefits: [
        t('features.items.multiLocation.benefits.centralized'),
        t('features.items.multiLocation.benefits.locationSettings'),
        t('features.items.multiLocation.benefits.reporting')
      ],
      color: 'bg-cyan-50 text-cyan-600'
    },
    {
      icon: Package,
      title: t('features.items.clickCollect.title'),
      description: t('features.items.clickCollect.description'),
      benefits: [
        t('features.items.clickCollect.benefits.qrOrdering'),
        t('features.items.clickCollect.benefits.pickupManagement'),
        t('features.items.clickCollect.benefits.notifications')
      ],
      color: 'bg-yellow-50 text-yellow-600'
    },
    {
      icon: DollarSign,
      title: t('features.items.costManagement.title'),
      description: t('features.items.costManagement.description'),
      benefits: [
        t('features.items.costManagement.benefits.tracking'),
        t('features.items.costManagement.benefits.analytics'),
        t('features.items.costManagement.benefits.profitability')
      ],
      color: 'bg-teal-50 text-teal-600'
    },
    {
      icon: Calendar,
      title: t('features.items.reservations.title'),
      description: t('features.items.reservations.description'),
      benefits: [
        t('features.items.reservations.benefits.qrBooking'),
        t('features.items.reservations.benefits.management'),
        t('features.items.reservations.benefits.reminders')
      ],
      color: 'bg-rose-50 text-rose-600'
    }
  ]

  const highlights = [
    {
      icon: Clock,
      title: t('features.highlights.setup.title'),
      description: t('features.highlights.setup.description')
    },
    {
      icon: Shield,
      title: t('features.highlights.security.title'),
      description: t('features.highlights.security.description')
    },
    {
      icon: Zap,
      title: t('features.highlights.speed.title'),
      description: t('features.highlights.speed.description')
    }
  ]

  return (
    <section id="features" className="py-20 bg-gray-50" aria-labelledby="features-title">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="features-title" className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('features.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {feature.description}
              </p>
              
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Highlights Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-xl"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Why Choose ODS?
            </h3>
            <p className="text-gray-600">
              Built for modern restaurants with enterprise-grade reliability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full mb-4">
                  <highlight.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-600">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
