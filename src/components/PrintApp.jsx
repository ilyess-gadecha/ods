import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import {
  Printer,
  Wifi,
  Usb,
  Scissors,
  ShieldCheck,
  RefreshCw,
  Languages,
  MonitorDown,
  Check,
  ArrowRight
} from 'lucide-react'

const PRINT_APP_VERSION = 'v5.9.41'

// Faithful, self-contained recreation of the ODS Print desktop window.
const PrintWindow = ({ t }) => (
  <div className="w-full max-w-[560px] rounded-2xl bg-[#14161f] shadow-strong ring-1 ring-white/10 overflow-hidden select-none">
    {/* Title bar */}
    <div className="flex items-center justify-between bg-[#0f1117] px-4 py-2.5">
      <div className="flex items-center gap-2 text-xs font-medium text-gray-300">
        <span className="h-3.5 w-3.5 rounded-[4px] bg-gradient-to-br from-primary-400 to-primary-600" />
        ODS Print {PRINT_APP_VERSION}
      </div>
      <div className="flex items-center gap-2 text-gray-500">
        <span className="h-2.5 w-2.5 rounded-full bg-gray-600" />
        <span className="h-2.5 w-2.5 rounded-full bg-gray-600" />
        <span className="h-2.5 w-2.5 rounded-full bg-gray-600" />
      </div>
    </div>

    <div className="p-4 sm:p-5">
      {/* App header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Printer size={26} className="text-gray-200" />
          <span className="text-lg font-bold text-white">Coffee and Tea</span>
        </div>
        <span className="rounded-lg border border-gray-600 px-3 py-1.5 text-[11px] font-medium text-gray-300">
          {t('print.window.switchCert')}
        </span>
      </div>

      {/* Status bar */}
      <div className="mt-4 flex items-center justify-between rounded-lg bg-white/[0.03] px-3 py-2.5 ring-1 ring-white/5">
        <span className="flex items-center gap-2 text-sm font-medium text-emerald-400">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          {t('print.window.connected')}
        </span>
        <span className="text-sm text-gray-400">{t('print.window.jobs')}: <span className="text-gray-200 font-semibold">18</span></span>
      </div>

      {/* Tabs */}
      <div className="mt-4 flex justify-center">
        <div className="inline-flex rounded-lg bg-white/[0.04] p-1 text-xs font-medium">
          <span className="rounded-md bg-primary-500 px-4 py-1.5 text-white">{t('print.window.tabPrinters')}</span>
          <span className="px-4 py-1.5 text-gray-400">{t('print.window.tabService')}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-4 flex flex-wrap items-center gap-3 text-[11px]">
        <span className="rounded-md bg-primary-600 px-3 py-1.5 font-medium text-white">{t('print.window.refresh')}</span>
        <span className="flex items-center gap-1.5 text-gray-400">
          <span className="h-3.5 w-3.5 rounded-[3px] border border-gray-600" />
          {t('print.window.autoCut')}
        </span>
        <span className="flex items-center gap-1.5 text-gray-400">
          {t('print.window.tearOff')}
          <span className="rounded-[4px] border border-gray-600 px-2 py-0.5 text-gray-200">8</span>
        </span>
      </div>

      {/* Printer rows */}
      <div className="mt-4 space-y-3">
        {/* Row 1 - LAN */}
        <div className="flex flex-col gap-2 rounded-xl bg-white/[0.03] px-4 py-3 ring-1 ring-white/5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-semibold text-white">ods</div>
            <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-gray-500">
              <span>principal</span><span>·</span>
              <span className="flex items-center gap-1"><Wifi size={12} /> LAN</span><span>·</span>
              <span>192.168.1.87:9100</span>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[11px] text-gray-500">○ {t('print.window.disconnected')}</span>
            <span className="rounded-md bg-primary-600 px-2.5 py-1 text-[11px] text-white">{t('print.window.testPrint')}</span>
            <span className="rounded-md bg-amber-500 px-2.5 py-1 text-[11px] text-white">{t('print.window.cutTest')}</span>
          </div>
        </div>
        {/* Row 2 - USB */}
        <div className="flex flex-col gap-2 rounded-xl bg-white/[0.03] px-4 py-3 ring-1 ring-white/5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-semibold text-white">ods-printer</div>
            <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-gray-500">
              <span>counter</span><span>·</span>
              <span className="flex items-center gap-1"><Usb size={12} /> USB</span>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[11px] text-gray-500">○ {t('print.window.disconnected')}</span>
            <span className="rounded-md bg-indigo-500 px-2.5 py-1 text-[11px] text-white">{t('print.window.configure')}</span>
            <span className="rounded-md bg-primary-600 px-2.5 py-1 text-[11px] text-white">{t('print.window.testPrint')}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const PrintApp = () => {
  const { t } = useTranslation()

  const features = [
    { icon: Wifi, key: 'connect' },
    { icon: Printer, key: 'routing' },
    { icon: Scissors, key: 'cut' },
    { icon: ShieldCheck, key: 'cert' },
    { icon: RefreshCw, key: 'resilient' },
    { icon: Languages, key: 'languages' }
  ]

  return (
    <section id="print" className="py-24 bg-white relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(90,106,207,0.07),_transparent_40%)]" />
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Window mock */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 min-w-0 flex justify-center lg:justify-start"
          >
            <PrintWindow t={t} />
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700">
              <Printer size={16} />
              {t('print.eyebrow')}
            </span>
            <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {t('print.title.part1')} <span className="gradient-text">{t('print.title.part2')}</span>
            </h2>
            <p className="mt-6 text-xl text-gray-600">
              {t('print.subtitle')}
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f.key} className="flex items-start gap-3">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                    <f.icon size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{t(`print.features.${f.key}.title`)}</div>
                    <div className="text-sm text-gray-600 leading-snug">{t(`print.features.${f.key}.text`)}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a href="#contact" className="btn btn-primary btn-lg group">
                <MonitorDown size={20} className="mr-2" />
                {t('print.cta')}
              </a>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Check size={16} className="text-success-500" />
                {t('print.note')}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default PrintApp
