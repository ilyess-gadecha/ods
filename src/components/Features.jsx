import React from 'react'
import { motion } from 'framer-motion'
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
  Zap
} from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: ShoppingCart,
      title: 'Smart Order Management',
      description: 'Streamline orders from multiple channels with intelligent routing and real-time tracking.',
      benefits: ['Real-time order tracking', 'Multi-channel integration', 'Automated notifications'],
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: QrCode,
      title: 'QR Code Ordering',
      description: 'Enable contactless dining with custom QR codes for tables and takeaway orders.',
      benefits: ['Contactless ordering', 'Custom table codes', 'Instant menu access'],
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Make data-driven decisions with comprehensive reports and real-time insights.',
      benefits: ['Sales analytics', 'Customer insights', 'Performance tracking'],
      color: 'bg-purple-50 text-purple-600'
    },
    {
      icon: Users,
      title: 'Staff Management',
      description: 'Manage your team efficiently with role-based access and performance tracking.',
      benefits: ['Role management', 'Performance metrics', 'Schedule integration'],
      color: 'bg-orange-50 text-orange-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native mobile apps for both customers and staff with offline capabilities.',
      benefits: ['Customer app', 'Staff app', 'Offline support'],
      color: 'bg-pink-50 text-pink-600'
    },
    {
      icon: Settings,
      title: 'Custom Integrations',
      description: 'Connect with your existing systems through our flexible API and integrations.',
      benefits: ['API access', 'Third-party integrations', 'Custom workflows'],
      color: 'bg-indigo-50 text-indigo-600'
    },
    {
      icon: CreditCard,
      title: 'Payment Processing',
      description: 'Accept multiple payment methods with secure, PCI-compliant processing.',
      benefits: ['Multiple payment methods', 'Secure processing', 'Split payments'],
      color: 'bg-emerald-50 text-emerald-600'
    },
    {
      icon: Printer,
      title: 'Kitchen Display & Printing',
      description: 'Streamline kitchen operations with digital displays and automated printing.',
      benefits: ['Kitchen display system', 'Auto-printing', 'Order prioritization'],
      color: 'bg-red-50 text-red-600'
    },
    {
      icon: Globe,
      title: 'Multi-Location Support',
      description: 'Manage multiple restaurants from a single dashboard with centralized control.',
      benefits: ['Centralized management', 'Location-specific settings', 'Unified reporting'],
      color: 'bg-cyan-50 text-cyan-600'
    }
  ]

  const highlights = [
    {
      icon: Clock,
      title: '30min Setup',
      description: 'Get started in minutes, not weeks'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Built for speed and performance'
    }
  ]

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ordering Dashboard Solution Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From order management to analytics, ODS provides all the tools your restaurant needs to thrive in the digital age.
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
                <feature.icon className="w-6 h-6" />
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
