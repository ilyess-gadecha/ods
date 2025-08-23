import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, Calendar, Zap } from 'lucide-react'

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full"
        />
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -3, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-lg"
        />
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 2, 0]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full"
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-white mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6"
          >
            <Zap className="w-8 h-8 text-white" />
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Restaurant?
          </h2>
          <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Join thousands of successful restaurants using ODS to streamline operations, 
            increase revenue, and delight customers.
          </p>
          
          {/* Key Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-6 mb-12 text-white/90"
          >
            {[
              '✓ 14-day free trial',
              '✓ No setup fees',
              '✓ Cancel anytime',
              '✓ 24/7 support'
            ].map((benefit, index) => (
              <span key={index} className="text-lg font-medium">
                {benefit}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center justify-center gap-6 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-white text-primary px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-3 min-w-[280px] justify-center"
          >
            <span>Start Your Free Trial</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300 flex items-center space-x-3 min-w-[280px] justify-center"
          >
            <Calendar className="w-5 h-5" />
            <span>Schedule a Demo</span>
          </motion.button>
        </motion.div>

        {/* Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            {
              icon: Phone,
              title: 'Talk to Sales',
              description: 'Get a personalized demo and pricing',
              action: 'Call Now',
              link: 'tel:+1-555-123-4567'
            },
            {
              icon: Calendar,
              title: 'Book a Demo',
              description: 'See ODS in action with your data',
              action: 'Schedule',
              link: '#'
            },
            {
              icon: Zap,
              title: 'Start Trial',
              description: 'Full access, no credit card required',
              action: 'Try Free',
              link: '#'
            }
          ].map((option, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center text-white"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
                <option.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
              <p className="text-white/80 mb-4">{option.description}</p>
              <motion.a
                href={option.link}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white/20 hover:bg-white/30 px-6 py-2 rounded-lg font-medium transition-all duration-200"
              >
                {option.action}
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-12 border-t border-white/20"
        >
          <p className="text-white/70 mb-6">Trusted by 2,000+ restaurants worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 text-white/60">
            {[
              'SOC 2 Compliant',
              '99.9% Uptime',
              'GDPR Ready',
              '24/7 Support',
              'PCI DSS Certified'
            ].map((badge, index) => (
              <span key={index} className="text-sm font-medium">
                {badge}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
