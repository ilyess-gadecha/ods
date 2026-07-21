import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { QrCode, Palette, Smartphone, ArrowRight, Check } from 'lucide-react'
import { ADMIN_REGISTER_URL } from '../constants/links'

import minimalPremium from '../assets/templates/minimal-premium.jpg'
import premiumDark from '../assets/templates/premium-dark.jpg'
import vibrantPromo from '../assets/templates/vibrant-promo.jpg'
import editorialLifestyle from '../assets/templates/editorial-lifestyle.jpg'
import quickOrder from '../assets/templates/quick-order-utility.jpg'
import pastelFriendly from '../assets/templates/pastel-friendly.jpg'
import futuristicGlass from '../assets/templates/futuristic-glass.jpg'

const OrderingTemplates = () => {
  const { t } = useTranslation()

  const templates = [
    { key: 'minimalPremium', image: minimalPremium, accent: '#C6935B', dark: false },
    { key: 'premiumDark', image: premiumDark, accent: '#C8A24A', dark: true },
    { key: 'vibrantPromo', image: vibrantPromo, accent: '#E8452A', dark: false },
    { key: 'editorialLifestyle', image: editorialLifestyle, accent: '#6B6B4A', dark: false },
    { key: 'quickOrder', image: quickOrder, accent: '#1F5C43', dark: false },
    { key: 'pastelFriendly', image: pastelFriendly, accent: '#7FB3E0', dark: false },
    { key: 'futuristicGlass', image: futuristicGlass, accent: '#17B3B3', dark: true }
  ]

  const [active, setActive] = useState(0)
  const current = templates[active]

  const perks = [
    { icon: QrCode, text: t('templates.perks.qr') },
    { icon: Palette, text: t('templates.perks.brand') },
    { icon: Smartphone, text: t('templates.perks.native') }
  ]

  return (
    <section id="templates" className="py-24 bg-white relative overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(90,106,207,0.08),_transparent_38%),radial-gradient(circle_at_bottom_left,_rgba(226,183,133,0.12),_transparent_40%)]" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700">
            <Palette size={16} />
            {t('templates.eyebrow')}
          </span>
          <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            {t('templates.title.part1')} <span className="gradient-text">{t('templates.title.part2')}</span>
          </h2>
          <p className="mt-6 text-xl text-gray-600">
            {t('templates.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-12 xl:gap-16 items-center">
          {/* Featured phone */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="order-1 flex justify-center"
          >
            <div className="relative">
              {/* Glow keyed to the active template */}
              <div
                className="absolute -inset-8 rounded-[48px] blur-3xl opacity-30 transition-colors duration-500"
                style={{ background: `radial-gradient(circle, ${current.accent}, transparent 70%)` }}
              />
              <div className="relative w-[280px] sm:w-[320px] rounded-[42px] border-[10px] border-gray-900 bg-gray-900 shadow-strong overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current.key}
                    src={current.image}
                    alt={t(`templates.items.${current.key}.name`)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="w-full h-auto block"
                    loading="lazy"
                  />
                </AnimatePresence>
              </div>
              {/* Floating label chip */}
              <motion.div
                key={`chip-${current.key}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute -right-4 sm:-right-8 top-10 bg-white rounded-2xl shadow-medium border border-gray-100 px-4 py-3"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: current.accent }} />
                  <span className="text-sm font-semibold text-gray-900">{t(`templates.items.${current.key}.name`)}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Selector + copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="order-2"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900">{t(`templates.items.${current.key}.name`)}</h3>
              <p className="mt-2 text-gray-600 leading-relaxed min-h-[3rem]">{t(`templates.items.${current.key}.description`)}</p>
            </div>

            {/* Template picker grid */}
            <div className="grid grid-cols-4 sm:grid-cols-7 lg:grid-cols-4 gap-3 mb-8">
              {templates.map((tpl, index) => (
                <button
                  key={tpl.key}
                  onClick={() => setActive(index)}
                  aria-label={t(`templates.items.${tpl.key}.name`)}
                  aria-pressed={active === index}
                  className={`group relative aspect-[9/16] rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                    active === index ? 'ring-2 ring-offset-2 scale-[1.03]' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                  style={active === index ? { borderColor: tpl.accent, '--tw-ring-color': tpl.accent } : {}}
                >
                  <img src={tpl.image} alt="" className="w-full h-full object-cover object-top" loading="lazy" />
                </button>
              ))}
            </div>

            {/* Perks */}
            <div className="space-y-3 mb-8">
              {perks.map((perk, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                    <perk.icon size={18} />
                  </div>
                  <span className="text-gray-700">{perk.text}</span>
                </div>
              ))}
            </div>

            <a href={ADMIN_REGISTER_URL} className="btn btn-primary btn-lg group">
              {t('templates.cta')}
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <p className="mt-3 text-sm text-gray-500 flex items-center gap-2">
              <Check size={16} className="text-success-500" />
              {t('templates.note')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default OrderingTemplates
