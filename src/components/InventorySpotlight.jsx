import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ArrowRight, BarChart3, TriangleAlert, TrendingUp, Warehouse } from 'lucide-react'
import { ADMIN_REGISTER_URL } from '../constants/links'
import zonesImage from '../../New folder (6)/alerts.PNG'
import stockAlertsImage from '../../New folder (6)/stock_alert.PNG'
import ingredientImage from '../../New folder (6)/ingredient.PNG'
import costOverviewImage from '../../New folder (6)/cost.PNG'
import projectionsImage from '../../New folder (6)/cost3.PNG'

const InventorySpotlight = ({ embedded = false }) => {
  const { t } = useTranslation()

  const proofPoints = [
    {
      icon: Warehouse,
      text: t('inventorySpotlight.proofs.zones'),
      cardClassName: 'border-primary-100 bg-primary-50/70',
      iconClassName: 'bg-primary-100 text-primary-600'
    },
    {
      icon: TriangleAlert,
      text: t('inventorySpotlight.proofs.alerts'),
      cardClassName: 'border-warning-100 bg-warning-50/80',
      iconClassName: 'bg-warning-100 text-warning-600'
    },
    {
      icon: BarChart3,
      text: t('inventorySpotlight.proofs.valuation'),
      cardClassName: 'border-secondary-100 bg-secondary-50/70',
      iconClassName: 'bg-secondary-100 text-secondary-700'
    },
    {
      icon: TrendingUp,
      text: t('inventorySpotlight.proofs.analytics'),
      cardClassName: 'border-success-100 bg-success-50/80',
      iconClassName: 'bg-success-100 text-success-600'
    }
  ]

  const featuredScreen = {
    image: costOverviewImage,
    title: t('inventorySpotlight.screens.cost.title'),
    description: t('inventorySpotlight.screens.cost.description')
  }

  const screens = [
    {
      key: 'zones',
      image: zonesImage,
      title: t('inventorySpotlight.screens.zones.title'),
      description: t('inventorySpotlight.screens.zones.description'),
      frameClassName: 'border-primary-100 bg-gradient-to-br from-primary-50 via-white to-white'
    },
    {
      key: 'alerts',
      image: stockAlertsImage,
      title: t('inventorySpotlight.screens.alerts.title'),
      description: t('inventorySpotlight.screens.alerts.description'),
      frameClassName: 'border-warning-100 bg-gradient-to-br from-warning-50 via-white to-white'
    },
    {
      key: 'ingredient',
      image: ingredientImage,
      title: t('inventorySpotlight.screens.ingredient.title'),
      description: t('inventorySpotlight.screens.ingredient.description'),
      frameClassName: 'border-secondary-100 bg-gradient-to-br from-secondary-50 via-white to-white'
    },
    {
      key: 'projections',
      image: projectionsImage,
      title: t('inventorySpotlight.screens.projections.title'),
      description: t('inventorySpotlight.screens.projections.description'),
      frameClassName: 'border-success-100 bg-gradient-to-br from-success-50 via-white to-white'
    }
  ]

  const content = (
    <div className="rounded-[36px] border border-primary-100/70 bg-white/90 px-6 py-8 shadow-[0_24px_80px_rgba(90,106,207,0.10)] backdrop-blur-sm lg:px-8 xl:px-10">
      <div className="grid xl:grid-cols-[0.85fr,1.15fr] gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="xl:sticky xl:top-24"
        >
          <span className="inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700 shadow-sm">
            {t('inventorySpotlight.eyebrow')}
          </span>

          <h2 className="mt-6 max-w-xl text-4xl font-bold leading-[1.1] text-gray-900 lg:text-5xl">
            {t('inventorySpotlight.title')}
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
            {t('inventorySpotlight.subtitle')}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {proofPoints.map((point, index) => (
              <div
                key={index}
                className={`flex items-start gap-4 rounded-2xl border px-4 py-4 shadow-sm ${point.cardClassName}`}
              >
                <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl ${point.iconClassName}`}>
                  <point.icon className="h-5 w-5" />
                </div>
                <p className="text-gray-700 leading-relaxed">{point.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[28px] border border-secondary-100 bg-gradient-to-r from-white via-secondary-50/70 to-primary-50/40 p-6 shadow-lg shadow-primary-100/40">
            <p className="max-w-md text-sm leading-relaxed text-gray-600">
              {t('inventorySpotlight.caption')}
            </p>
            <a href={ADMIN_REGISTER_URL} className="btn btn-primary btn-lg group mt-4">
              {t('pricing.cta.getStarted')}
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        </motion.div>

        <div className="space-y-5">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02, y: -10 }}
            transition={{ duration: 0.8, delay: 0.08 }}
            viewport={{ once: true }}
            className="relative z-0 overflow-hidden rounded-[32px] border border-primary-100 bg-white shadow-[0_24px_65px_rgba(31,42,96,0.12)] hover:z-10"
          >
            <div className="border-b border-primary-100 bg-gradient-to-r from-primary-50 via-white to-secondary-50 px-6 py-5">
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"></div>
              <h3 className="mt-4 text-2xl font-semibold text-gray-900">
                {featuredScreen.title}
              </h3>
              <p className="mt-3 max-w-2xl text-gray-600">
                {featuredScreen.description}
              </p>
            </div>
            <div className="p-4 lg:p-5">
              <div className="overflow-hidden rounded-[24px] border border-gray-100 bg-white shadow-inner">
                <img
                  src={featuredScreen.image}
                  alt={featuredScreen.title}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.article>

          <div className="grid gap-5 md:grid-cols-2">
            {screens.map((screen, index) => (
              <motion.article
                key={screen.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.035, y: -8 }}
                transition={{ duration: 0.7, delay: index * 0.08 + 0.12 }}
                viewport={{ once: true }}
                className={`relative z-0 overflow-hidden rounded-[28px] border shadow-lg shadow-gray-200/70 hover:z-10 ${screen.frameClassName}`}
              >
                <div className="px-5 pt-5 pb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{screen.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{screen.description}</p>
                </div>
                <div className="px-4 pb-4">
                  <div className="overflow-hidden rounded-[22px] border border-white/80 bg-white">
                    <img
                      src={screen.image}
                      alt={screen.title}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  if (embedded) {
    return <div className="mt-32">{content}</div>
  }

  return (
    <section className="py-24 bg-[radial-gradient(circle_at_top_left,_rgba(90,106,207,0.12),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(226,183,133,0.16),_transparent_34%),linear-gradient(180deg,_#ffffff_0%,_#f8fafc_100%)]">
      <div className="container-custom">{content}</div>
    </section>
  )
}

export default InventorySpotlight