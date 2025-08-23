import React from 'react'
import { motion } from 'framer-motion'
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

const Benefits = () => {
  const mainBenefits = [
    {
      icon: TrendingUp,
      title: 'Increase Revenue by 35%',
      description: 'Optimize operations and boost sales with data-driven insights and streamlined processes.',
      stats: [
        { label: 'Average Revenue Increase', value: '35%' },
        { label: 'Order Processing Speed', value: '3x faster' },
        { label: 'Customer Retention', value: '+45%' }
      ],
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Clock,
      title: 'Save 15+ Hours Weekly',
      description: 'Automate repetitive tasks and eliminate manual processes to focus on what matters most.',
      stats: [
        { label: 'Time Saved Per Week', value: '15+ hrs' },
        { label: 'Manual Tasks Reduced', value: '80%' },
        { label: 'Staff Efficiency', value: '+60%' }
      ],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Users,
      title: 'Enhance Customer Experience',
      description: 'Deliver exceptional service with faster ordering, accurate tracking, and personalized experiences.',
      stats: [
        { label: 'Customer Satisfaction', value: '98%' },
        { label: 'Order Accuracy', value: '99.5%' },
        { label: 'Wait Time Reduction', value: '50%' }
      ],
      color: 'from-purple-500 to-pink-600'
    }
  ]

  const additionalBenefits = [
    {
      icon: DollarSign,
      title: 'Reduce Operating Costs',
      description: 'Lower labor costs and reduce waste with intelligent inventory management and automated processes.',
      percentage: '25%'
    },
    {
      icon: Star,
      title: 'Improve Order Accuracy',
      description: 'Eliminate human errors with digital ordering and kitchen display systems.',
      percentage: '99.5%'
    },
    {
      icon: Target,
      title: 'Better Decision Making',
      description: 'Make informed decisions with real-time analytics and comprehensive reporting.',
      percentage: '100%'
    }
  ]

  const successMetrics = [
    { number: '2M+', label: 'Orders Processed Monthly', icon: '📦' },
    { number: '98%', label: 'Customer Satisfaction', icon: '⭐' },
    { number: '35%', label: 'Average Revenue Increase', icon: '📈' },
    { number: '15hrs', label: 'Time Saved Weekly', icon: '⏰' }
  ]

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Transform Your Restaurant Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See measurable results from day one. Our platform delivers real impact for restaurants of all sizes.
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
              Proven Results Across the Industry
            </h3>
            <p className="text-gray-600">
              Real metrics from restaurants using ODS platform
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
              Ready to See These Results in Your Restaurant?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of successful restaurants that have transformed their operations with ODS.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary px-8 py-3 flex items-center space-x-2"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>No credit card required</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Benefits
