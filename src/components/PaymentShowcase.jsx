import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import {
  ShieldCheck,
  Wallet,
  Percent,
  Landmark,
  RefreshCw,
  Globe2,
  Lock,
  Check,
  ArrowRight,
  ChevronRight
} from 'lucide-react'
import { ADMIN_REGISTER_URL } from '../constants/links'

const PaymentShowcase = () => {
  const { t } = useTranslation()

  const benefits = [
    { icon: Percent, title: t('payment.benefits.commission.title'), text: t('payment.benefits.commission.text') },
    { icon: Landmark, title: t('payment.benefits.direct.title'), text: t('payment.benefits.direct.text') },
    { icon: ShieldCheck, title: t('payment.benefits.noShows.title'), text: t('payment.benefits.noShows.text') },
    { icon: Wallet, title: t('payment.benefits.fee.title'), text: t('payment.benefits.fee.text') },
    { icon: RefreshCw, title: t('payment.benefits.refunds.title'), text: t('payment.benefits.refunds.text') },
    { icon: Globe2, title: t('payment.benefits.global.title'), text: t('payment.benefits.global.text') }
  ]

  const steps = [
    t('payment.steps.order'),
    t('payment.steps.pay'),
    t('payment.steps.kitchen')
  ]

  return (
    <section id="payments" className="py-24 bg-gradient-to-br from-gray-900 via-gray-900 to-[#161a2e] text-white relative overflow-hidden">
      {/* Ambient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-primary-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-secondary-500/10 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-secondary-300">
              <Lock size={15} />
              {t('payment.eyebrow')}
            </span>
            <h2 className="mt-6 text-4xl lg:text-5xl font-bold leading-tight">
              {t('payment.title.part1')}{' '}
              <span className="bg-gradient-to-r from-primary-300 to-secondary-300 bg-clip-text text-transparent">
                {t('payment.title.part2')}
              </span>
            </h2>
            <p className="mt-6 text-xl text-gray-300 max-w-xl">
              {t('payment.subtitle')}
            </p>

            {/* How it works */}
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-3">
              {steps.map((step, i) => (
                <React.Fragment key={i}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-500 text-sm font-bold">
                      {i + 1}
                    </span>
                    <span className="text-sm text-gray-200">{step}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <ChevronRight size={18} className="hidden sm:block text-gray-500 flex-shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a href={ADMIN_REGISTER_URL} className="btn btn-lg bg-white text-primary-700 hover:bg-gray-100 group">
                {t('payment.cta')}
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Check size={16} className="text-success-500" />
                {t('payment.onboard')}
              </div>
            </div>
          </motion.div>

          {/* Right: checkout phone mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Phone */}
              <div className="relative w-[300px] rounded-[42px] border-[10px] border-gray-800 bg-white shadow-strong overflow-hidden">
                {/* Status bar */}
                <div className="flex items-center justify-between px-6 pt-4 pb-2 text-[11px] font-semibold text-gray-900">
                  <span>9:41</span>
                  <span className="flex items-center gap-1 text-gray-700">
                    <span>●●●</span><span>ᯤ</span><span>▮</span>
                  </span>
                </div>

                {/* Header */}
                <div className="px-6 pt-2">
                  <div className="text-lg font-bold text-gray-900">Coffee &amp; Tea</div>
                  <div className="text-sm text-secondary-600 font-medium">Table 5 · {t('payment.mock.review')}</div>
                </div>

                {/* Items */}
                <div className="px-6 mt-5 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-700"><span className="text-gray-400 mr-1.5">1×</span>Caramel Macchiato</span>
                    <span className="font-semibold text-gray-900">€4.80</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-700"><span className="text-gray-400 mr-1.5">1×</span>Espresso</span>
                    <span className="font-semibold text-gray-900">€2.52</span>
                  </div>
                </div>

                {/* Totals */}
                <div className="px-6 mt-4 pt-4 border-t border-gray-100 space-y-2">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{t('payment.mock.subtotal')}</span>
                    <span>€7.32</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{t('payment.mock.serviceFee')}</span>
                    <span>€0.20</span>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <span className="font-semibold text-gray-900">{t('payment.mock.total')}</span>
                    <span className="text-lg font-bold text-gray-900">€7.52</span>
                  </div>
                </div>

                {/* Pay button */}
                <div className="px-6 mt-5 pb-6">
                  <div className="w-full rounded-2xl bg-primary-500 text-white text-center py-3.5 font-semibold shadow-lg">
                    {t('payment.mock.pay')} €7.52
                  </div>
                  <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-gray-400">
                    <Lock size={12} />
                    {t('payment.mock.secured')}
                  </div>
                </div>
              </div>

              {/* Floating "paid" card */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute -left-6 sm:-left-10 bottom-16 bg-white rounded-2xl shadow-strong border border-gray-100 px-4 py-3 w-56"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-success-100">
                    <Check size={20} className="text-success-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">{t('payment.mock.settled')}</div>
                    <div className="text-xs text-gray-500">{t('payment.mock.settledSub')}</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Benefit grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-20">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/[0.08] transition-colors duration-300"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 mb-4">
                <b.icon size={20} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{b.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PaymentShowcase
