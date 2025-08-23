import React from 'react'
import { motion } from 'framer-motion'
import { Play, ArrowRight, CheckCircle, Star } from 'lucide-react'

const Hero = () => {
  const stats = [
    { number: '5M+', label: 'Orders Processed' },
    { number: '2K+', label: 'Restaurants' },
    { number: '25M+', label: 'Customers Served' },
    { number: '98%', label: 'Satisfaction Rate' }
  ]

  const benefits = [
    'Contactless QR Code Ordering',
    'Real-time Order Management',
    'Complete Restaurant Analytics',
    'Inventory & Staff Management'
  ]

  return (
    <section className="pt-20 lg:pt-28 pb-16 lg:pb-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-primary-50 text-primary-600 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Star size={16} className="text-yellow-500" />
              <span>#1 Restaurant Management Platform</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              <span className="gradient-text">Ordering Dashboard Solution</span>{' '}
              for Modern Restaurants
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Modernize your restaurant operations with our comprehensive ordering dashboard solution. 
              From QR code menus to real-time analytics, everything you need to boost efficiency and enhance customer experience.
            </motion.p>

            {/* Benefits List */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid sm:grid-cols-2 gap-3 mb-8"
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-success-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="btn btn-primary btn-lg group"
              >
                Get Started Free
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <button className="btn btn-secondary btn-lg group">
                <Play size={20} className="mr-2 group-hover:scale-110 transition-transform duration-200" />
                Watch Demo
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12 pt-8 border-t border-gray-200"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl opacity-20"
            />
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-r from-success-500 to-accent-500 rounded-2xl opacity-20"
            />

            {/* Main Dashboard Image */}
            <div className="relative bg-white rounded-3xl shadow-strong p-2">
              <div className="bg-gray-100 rounded-2xl aspect-[4/3] flex items-center justify-center overflow-hidden">
                {/* Mock Dashboard Content */}
                <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 relative">
                  {/* Header */}
                  <div className="bg-primary-500 h-12 flex items-center px-4">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                      <span className="text-primary-500 font-bold text-sm">O</span>
                    </div>
                    <div className="ml-3 text-white font-semibold">ODS Dashboard</div>
                  </div>
                  
                  {/* Content Area */}
                  <div className="p-4 space-y-4">
                    {/* Stats Cards */}
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { label: 'Orders', value: '156', color: 'bg-blue-500' },
                        { label: 'Revenue', value: '$2.8k', color: 'bg-green-500' },
                        { label: 'Tables', value: '24', color: 'bg-purple-500' }
                      ].map((stat, index) => (
                        <div key={index} className="bg-white rounded-lg p-3 shadow-sm">
                          <div className={`w-8 h-8 ${stat.color} rounded-lg mb-2`}></div>
                          <div className="text-xs text-gray-600">{stat.label}</div>
                          <div className="font-bold text-gray-900">{stat.value}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Orders List */}
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="text-sm font-semibold text-gray-900 mb-3">Recent Orders</div>
                      <div className="space-y-2">
                        {[1, 2, 3].map((_, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                              <div className="text-xs text-gray-600">Table {index + 1}</div>
                            </div>
                            <div className="text-xs font-medium text-primary-500">$24.50</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white rounded-xl shadow-medium p-4 border border-gray-100"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-success-100 rounded-lg flex items-center justify-center">
                  <CheckCircle size={20} className="text-success-500" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Order #1247</div>
                  <div className="text-xs text-gray-600">Table 5 - $32.40</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-medium p-4 border border-gray-100"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Star size={20} className="text-primary-500" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">5-Star Review</div>
                  <div className="text-xs text-gray-600">Amazing service!</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
