import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import {
  Sparkles,
  Video,
  Music,
  Film,
  ImagePlus,
  ScanLine,
  ChefHat,
  ReceiptText,
  Wand2,
  ArrowRight
} from 'lucide-react'
import { ADMIN_REGISTER_URL, AI_MENU_VIDEOS } from '../constants/links'

const AIFeatures = () => {
  const { t } = useTranslation()

  const cards = [
    { icon: ImagePlus, key: 'photos', color: 'from-rose-500 to-pink-600' },
    { icon: ScanLine, key: 'menuScan', color: 'from-primary-500 to-primary-700' },
    { icon: ChefHat, key: 'recipes', color: 'from-emerald-500 to-teal-600' },
    { icon: ReceiptText, key: 'invoice', color: 'from-amber-500 to-orange-600' },
    { icon: Wand2, key: 'recipeScan', color: 'from-secondary-500 to-secondary-700' }
  ]

  const reelChips = [
    { icon: Sparkles, key: 'faithful', pos: 'top-12 left-8' },
    { icon: Music, key: 'music', pos: 'bottom-14 left-8' },
    { icon: Film, key: 'batch', pos: 'bottom-12 right-8' }
  ]

  return (
    <section id="ai" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(90,106,207,0.08),_transparent_45%)]" />

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
            <Sparkles size={16} />
            {t('ai.eyebrow')}
          </span>
          <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            {t('ai.title.part1')} <span className="gradient-text">{t('ai.title.part2')}</span>
          </h2>
          <p className="mt-6 text-xl text-gray-600">
            {t('ai.subtitle')}
          </p>
        </motion.div>

        {/* Featured: AI menu video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-[32px] border border-gray-100 bg-white shadow-strong overflow-hidden mb-6"
        >
          <div className="grid lg:grid-cols-2">
            {/* Copy */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary-50 px-3 py-1.5 text-xs font-semibold text-primary-700 mb-5">
                <Video size={14} />
                {t('ai.video.badge')}
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                {t('ai.video.title')}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('ai.video.description')}
              </p>
              <ul className="space-y-3 mb-8">
                {['vision', 'music', 'batch'].map((k) => (
                  <li key={k} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary-100">
                      <Sparkles size={12} className="text-primary-600" />
                    </span>
                    <span className="text-gray-700">{t(`ai.video.points.${k}`)}</span>
                  </li>
                ))}
              </ul>
              <a href={ADMIN_REGISTER_URL} className="btn btn-primary btn-md group">
                {t('ai.cta')}
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>

            {/* Real AI-generated menu-video reels — centered, side-by-side pair */}
            <div className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#232a5c] via-[#181c39] to-[#0d0f1c] p-8 min-h-[460px] lg:min-h-[500px]">
              {/* on-brand ambient glows + top light */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-12 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary-500/25 blur-3xl" />
                <div className="absolute -bottom-16 left-1/4 h-56 w-56 rounded-full bg-secondary-500/20 blur-3xl" />
                <div className="absolute -bottom-16 right-1/4 h-56 w-56 rounded-full bg-primary-400/15 blur-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,_rgba(255,255,255,0.08),_transparent_50%)]" />
              </div>

              {/* corner value chips (wide screens) */}
              {reelChips.map((chip, i) => (
                <motion.div
                  key={chip.key}
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                  className={`absolute ${chip.pos} z-20 hidden xl:flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-xs font-medium text-white backdrop-blur`}
                >
                  <chip.icon size={13} className="text-secondary-300" />
                  {t(`ai.video.chips.${chip.key}`)}
                </motion.div>
              ))}

              {/* grounding floor shadow */}
              <div className="pointer-events-none absolute bottom-10 left-1/2 h-8 w-72 -translate-x-1/2 rounded-[50%] bg-black/50 blur-2xl" />

              <div className="relative z-10 flex items-center">
                {/* secondary reel */}
                <motion.div
                  animate={{ y: [6, -6, 6] }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                  className="relative z-0 w-[150px] sm:w-[172px] -rotate-[4deg] translate-y-6 rounded-[26px] bg-[#0b0b12] p-[4px] shadow-2xl ring-1 ring-white/10"
                >
                  <div className="relative aspect-[9/16] overflow-hidden rounded-[22px] bg-black">
                    <video
                      src={AI_MENU_VIDEOS[1]}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      aria-hidden="true"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#0d0f1c]/15" />
                  </div>
                </motion.div>

                {/* hero reel */}
                <motion.div
                  animate={{ y: [-6, 6, -6] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative z-10 -ml-6 w-[196px] sm:w-[220px] rotate-[3deg] -translate-y-4 rounded-[34px] bg-[#0b0b12] p-[5px] shadow-[0_35px_70px_-20px_rgba(0,0,0,0.75)] ring-1 ring-white/10"
                >
                  <div className="relative aspect-[9/16] overflow-hidden rounded-[29px] bg-black">
                    <video
                      src={AI_MENU_VIDEOS[0]}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      aria-label={t('ai.video.title')}
                      className="h-full w-full object-cover"
                    />
                    {/* scrims for badge/caption legibility */}
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/50 to-transparent" />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
                    {/* top badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="rounded-full bg-white/15 backdrop-blur px-2.5 py-1 text-[10px] font-semibold text-white flex items-center gap-1">
                        <Sparkles size={10} /> AI
                      </span>
                      <span className="rounded-full bg-white/15 backdrop-blur px-2.5 py-1 text-[10px] font-medium text-white">9:16</span>
                    </div>
                    {/* caption */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="rounded-lg bg-black/40 backdrop-blur px-2.5 py-1.5 text-[10px] text-white font-medium flex items-center gap-1.5">
                        <Music size={11} /> {t('ai.video.reelCaption')}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* AI capability cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-100 bg-white p-7 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${card.color} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <card.icon size={22} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t(`ai.cards.${card.key}.title`)}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{t(`ai.cards.${card.key}.description`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AIFeatures
