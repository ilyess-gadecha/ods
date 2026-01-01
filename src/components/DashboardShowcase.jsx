import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { 
  ShoppingCart, 
  BarChart3, 
  Package,
  Calendar,
  TrendingUp,
  Users
} from 'lucide-react'
import ordersImage from '../assets/orders.png'
import inventoryImage from '../assets/inventory.png'
import menuImage from '../assets/menu.png'
import tablesImage from '../assets/tables.png'
import marketingImage from '../assets/marketing.png'
import dashboardImage from '../assets/dashboard.png'

const DashboardShowcase = () => {
  const { t } = useTranslation()
  
  const dashboards = [
    {
      title: t('dashboardShowcase.dashboards.complete.title'),
      description: t('dashboardShowcase.dashboards.complete.description'),
      image: dashboardImage,
      icon: BarChart3,
      color: "from-primary-500 to-primary-600",
      features: [
        t('dashboardShowcase.dashboards.complete.features.analytics'),
        t('dashboardShowcase.dashboards.complete.features.multiLocation'),
        t('dashboardShowcase.dashboards.complete.features.performance'),
        t('dashboardShowcase.dashboards.complete.features.control')
      ]
    },
    {
      title: t('dashboardShowcase.dashboards.orders.title'),
      description: t('dashboardShowcase.dashboards.orders.description'),
      image: ordersImage,
      icon: ShoppingCart,
      color: "from-blue-500 to-blue-600",
      features: [
        t('dashboardShowcase.dashboards.orders.features.notifications'),
        t('dashboardShowcase.dashboards.orders.features.tracking'),
        t('dashboardShowcase.dashboards.orders.features.customerDetails'),
        t('dashboardShowcase.dashboards.orders.features.payment')
      ]
    },
    {
      title: t('dashboardShowcase.dashboards.inventory.title'),
      description: t('dashboardShowcase.dashboards.inventory.description'),
      image: inventoryImage,
      icon: Package,
      color: "from-green-500 to-green-600",
      features: [
        t('dashboardShowcase.dashboards.inventory.features.monitoring'),
        t('dashboardShowcase.dashboards.inventory.features.alerts'),
        t('dashboardShowcase.dashboards.inventory.features.supplier'),
        t('dashboardShowcase.dashboards.inventory.features.cost')
      ]
    },
    {
      title: t('dashboardShowcase.dashboards.menu.title'),
      description: t('dashboardShowcase.dashboards.menu.description'),
      image: menuImage,
      icon: BarChart3,
      color: "from-purple-500 to-purple-600",
      features: [
        t('dashboardShowcase.dashboards.menu.features.pricing'),
        t('dashboardShowcase.dashboards.menu.features.category'),
        t('dashboardShowcase.dashboards.menu.features.availability'),
        t('dashboardShowcase.dashboards.menu.features.nutritional')
      ]
    },
    {
      title: t('dashboardShowcase.dashboards.tables.title'),
      description: t('dashboardShowcase.dashboards.tables.description'),
      image: tablesImage,
      icon: Calendar,
      color: "from-orange-500 to-orange-600",
      features: [
        t('dashboardShowcase.dashboards.tables.features.reservations'),
        t('dashboardShowcase.dashboards.tables.features.capacity'),
        t('dashboardShowcase.dashboards.tables.features.qrCode'),
        t('dashboardShowcase.dashboards.tables.features.seating')
      ]
    },
    {
      title: t('dashboardShowcase.dashboards.marketing.title'),
      description: t('dashboardShowcase.dashboards.marketing.description'),
      image: marketingImage,
      icon: TrendingUp,
      color: "from-red-500 to-red-600",
      features: [
        t('dashboardShowcase.dashboards.marketing.features.sales'),
        t('dashboardShowcase.dashboards.marketing.features.insights'),
        t('dashboardShowcase.dashboards.marketing.features.campaign'),
        t('dashboardShowcase.dashboards.marketing.features.revenue')
      ]
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="gradient-text">{t('dashboardShowcase.title')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('dashboardShowcase.subtitle')}
          </p>
        </motion.div>

        {/* Dashboard Grid */}
        <div className="space-y-32">
          {dashboards.map((dashboard, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${dashboard.color} rounded-xl flex items-center justify-center`}>
                    <dashboard.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">{dashboard.title}</h3>
                </div>
                
                <p className="text-lg text-gray-600 mb-8">
                  {dashboard.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {dashboard.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dashboard Image */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  {/* Floating gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${dashboard.color} rounded-3xl blur-2xl opacity-20 -z-10 transform scale-105`}></div>
                  
                  {/* Main image container */}
                  <div className="bg-white rounded-3xl shadow-strong p-4">
                    <div className="rounded-2xl overflow-hidden">
                      <img 
                        src={dashboard.image}
                        alt={`${dashboard.title} Dashboard`}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Floating indicator */}
                  <motion.div
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-4 -right-4 bg-white rounded-full shadow-medium p-3"
                  >
                    <div className={`w-3 h-3 bg-gradient-to-r ${dashboard.color} rounded-full`}></div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl p-12 text-white">
            <Users size={48} className="mx-auto mb-6 opacity-80" />
            <h3 className="text-3xl font-bold mb-4">
              {t('cta.title')}
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              {t('cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#contact" className="btn bg-white text-primary-600 hover:bg-gray-50 btn-lg">
                {t('cta.contactUs')}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DashboardShowcase
