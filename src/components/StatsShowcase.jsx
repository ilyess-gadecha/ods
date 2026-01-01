import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { 
  TrendingUp, 
  Clock, 
  Users, 
  DollarSign, 
  Star, 
  CheckCircle,
  ArrowUpRight,
  BarChart3
} from 'lucide-react'

const StatsShowcase = () => {
  const { t } = useTranslation()
  
  const stats = [
    {
      number: t('statsShowcase.stats.ready.number'),
      label: t('statsShowcase.stats.ready.label'),
      description: t('statsShowcase.stats.ready.description'),
      icon: Users,
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "100%",
      label: t('statsShowcase.stats.dedicated.label'),
      description: t('statsShowcase.stats.dedicated.description'),
      icon: BarChart3,
      color: "from-green-500 to-green-600"
    },
    {
      number: "24/7",
      label: t('statsShowcase.stats.support.label'),
      description: t('statsShowcase.stats.support.description'),
      icon: CheckCircle,
      color: "from-purple-500 to-purple-600"
    },
    {
      number: "35%",
      label: t('statsShowcase.stats.revenue.label'),
      description: t('statsShowcase.stats.revenue.description'),
      icon: TrendingUp,
      color: "from-orange-500 to-orange-600"
    }
  ]

  const successMetrics = [
    {
      title: t('statsShowcase.metrics.technology.title'),
      before: t('statsShowcase.metrics.technology.before'),
      after: t('statsShowcase.metrics.technology.after'),
      improvement: t('statsShowcase.metrics.technology.improvement'),
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    },
    {
      title: t('statsShowcase.metrics.excellence.title'),
      before: t('statsShowcase.metrics.excellence.before'),
      after: t('statsShowcase.metrics.excellence.after'),
      improvement: t('statsShowcase.metrics.excellence.improvement'),
      image: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    },
    {
      title: t('statsShowcase.metrics.growth.title'),
      before: t('statsShowcase.metrics.growth.before'),
      after: t('statsShowcase.metrics.growth.after'),
      improvement: t('statsShowcase.metrics.growth.improvement'),
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            {t('statsShowcase.title.part1')} <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">{t('statsShowcase.title.part2')}</span> {t('statsShowcase.title.part3')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('statsShowcase.subtitle')}
          </p>
        </motion.div>

        {/* Main Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-300 h-full flex flex-col justify-between min-h-[280px]">
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon size={32} className="text-white" />
                </div>
                
                <div className="flex-grow flex flex-col justify-center">
                  <div className="text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  
                  <div className="text-xl font-semibold text-white mb-3">
                    {stat.label}
                  </div>
                  
                  <div className="text-gray-400 text-sm">
                    {stat.description}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Success Stories Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold mb-4">
            Why Choose <span className="text-primary-400">ODS Platform</span>
          </h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Built with cutting-edge technology and designed for the modern restaurant industry's evolving needs.
          </p>
        </motion.div>

        {/* Before/After Metrics */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {successMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-300">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={metric.image}
                    alt={metric.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Improvement Badge */}
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <ArrowUpRight size={16} className="mr-1" />
                    {metric.improvement}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-gray-900">
                  <h4 className="text-xl font-bold mb-4">{metric.title}</h4>
                  
                  {/* Before/After Comparison */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Traditional:</span>
                      <span className="font-semibold text-orange-600">{metric.before}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">With ODS:</span>
                      <span className="font-semibold text-green-600">{metric.after}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
        </motion.div>
      </div>
    </section>
  )
}

export default StatsShowcase
