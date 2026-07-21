import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, ArrowRight, CheckCircle, Star, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import dashboardImage from '../assets/dashboard.png'
import demoVideo from '../assets/ods.mp4'
import { ADMIN_REGISTER_URL } from '../constants/links'

const Hero = () => {
  const { t } = useTranslation()
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  
  const benefits = [
    t('hero.benefits.payFirst'),
    t('hero.benefits.qrOrdering'),
    t('hero.benefits.ai'),
    t('hero.benefits.templates'),
    t('hero.benefits.analytics'),
    t('hero.benefits.inventory')
  ]

  return (
    <section id="hero" className="pt-20 lg:pt-28 pb-16 lg:pb-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden" aria-labelledby="hero-title">
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
              <span>{t('hero.badge')}</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              id="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              <span className="gradient-text">{t('hero.title')}</span>{' '}
              {t('hero.titleSuffix')}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* Benefits List */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8"
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-success-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{benefit}</span>
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
                href={ADMIN_REGISTER_URL}
                className="btn btn-primary btn-lg group"
              >
                {t('hero.getStarted')}
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <button
                onClick={() => setIsVideoPlaying(true)}
                className="btn btn-secondary btn-lg group"
              >
                <Play size={20} className="mr-2 group-hover:scale-110 transition-transform duration-200" />
                {t('hero.watchDemo')}
              </button>
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

            {/* Main Dashboard Preview */}
            <div className="relative bg-white rounded-3xl shadow-strong p-2">
              <div className="bg-gray-100 rounded-2xl overflow-hidden relative">
                {!isVideoPlaying ? (
                  <div className="relative">
                    <img 
                      src={dashboardImage} 
                      alt="ODS Restaurant Dashboard - Real-time order management, analytics, and inventory control interface" 
                      className="w-full h-full object-cover rounded-2xl"
                      width="600"
                      height="400"
                      loading="eager"
                    />
                    {/* Video Play Button Overlay */}
                    <button
                      onClick={() => setIsVideoPlaying(true)}
                      className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-2xl group hover:bg-black/30 transition-all duration-300"
                    >
                      <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play size={32} className="text-primary-600 ml-1" />
                      </div>
                      <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                        {t('hero.watchDemo')}
                      </div>
                    </button>
                  </div>
                ) : (
                  <div className="relative">
                    <video 
                      src={demoVideo}
                      className="w-full h-auto rounded-2xl"
                      controls
                      autoPlay
                      onEnded={() => setIsVideoPlaying(false)}
                    />
                    <button
                      onClick={() => setIsVideoPlaying(false)}
                      className="absolute top-4 right-4 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200"
                    >
                      <X size={16} />
                    </button>
                  </div>
                )}
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
