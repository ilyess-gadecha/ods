import React from 'react'
import { motion } from 'framer-motion'
import { useForm, ValidationError } from '@formspree/react'
import { useTranslation } from 'react-i18next'
import { Mail, Send, CheckCircle } from 'lucide-react'

const Contact = () => {
  const { t } = useTranslation()
  const [state, handleSubmit] = useForm("maqnnljl")

  const contactInfo = [
    {
      icon: Mail,
      title: t('contact.email'),
      value: t('footer.email'),
      link: `mailto:${t('footer.email')}`
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('contact.title').split(' ')[0]} <span className="gradient-text">{t('contact.title').split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('contact.contactInfo')}
              </h3>
              <p className="text-gray-600 mb-8">
                {t('contact.description')}
              </p>
            </div>

            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="flex items-start space-x-4 p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-200 group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                  <item.icon className="w-6 h-6 text-primary group-hover:text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            {state.succeeded ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 text-center"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('contact.form.thankYou')}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t('contact.form.success')}
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="btn btn-primary"
                >
                  {t('contact.form.sendAnother')}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('contact.form.name')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200"
                      placeholder="John Doe"
                    />
                    <ValidationError 
                      prefix="Name" 
                      field="name"
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('contact.form.email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200"
                      placeholder="john@restaurant.com"
                    />
                    <ValidationError 
                      prefix="Email" 
                      field="email"
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('contact.form.phone')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200"
                      placeholder="+1 (555) 123-4567"
                    />
                    <ValidationError 
                      prefix="Phone" 
                      field="phone"
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div>
                    <label htmlFor="restaurant" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('contact.form.restaurant')}
                    </label>
                    <input
                      type="text"
                      id="restaurant"
                      name="restaurant"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200"
                      placeholder="Your Restaurant"
                    />
                    <ValidationError 
                      prefix="Restaurant" 
                      field="restaurant"
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('contact.form.message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="6"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 resize-none"
                    placeholder={t('contact.form.message')}
                  ></textarea>
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={state.submitting}
                  whileHover={{ scale: state.submitting ? 1 : 1.02 }}
                  whileTap={{ scale: state.submitting ? 1 : 0.98 }}
                  className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-2 ${
                    state.submitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-xl'
                  }`}
                >
                  <span>{state.submitting ? t('contact.form.sending') : t('contact.form.send')}</span>
                  {!state.submitting && <Send className="w-5 h-5" />}
                </motion.button>

                <p className="text-sm text-gray-500 text-center mt-4">
                  * {t('contact.form.required')}
                </p>
              </form>
            )}
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {t('contact.immediate.title')}
          </h3>
          <p className="text-gray-600 mb-6">
            {t('contact.immediate.description')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href={`mailto:${t('footer.email')}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {t('contact.immediate.emailUs')}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
