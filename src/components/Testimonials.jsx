import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Owner',
      company: 'Bella Vista Restaurant',
      location: 'New York, NY',
      rating: 5,
      content: 'ODS transformed our restaurant operations completely. Order management became effortless, and our customer satisfaction increased by 40%. The analytics help us make better decisions daily.',
      avatar: '/api/placeholder/60/60',
      stats: { orders: '2,500+', revenue: '+40%' }
    },
    {
      id: 2,
      name: 'Marcus Chen',
      role: 'General Manager',
      company: 'Urban Café Chain',
      location: 'San Francisco, CA',
      rating: 5,
      content: 'The multi-location support is incredible. Managing 12 locations from one dashboard saves us hours every day. Staff training became so much easier with the intuitive interface.',
      avatar: '/api/placeholder/60/60',
      stats: { locations: '12', timeSaved: '15hrs/week' }
    },
    {
      id: 3,
      name: 'Elena Rodriguez',
      role: 'Restaurant Owner',
      company: 'Tapas & More',
      location: 'Miami, FL',
      rating: 5,
      content: 'Started with the commission plan and loved it so much we upgraded to Professional. The inventory management alone pays for itself. Customer support is outstanding!',
      avatar: '/api/placeholder/60/60',
      stats: { growth: '+65%', waste: '-30%' }
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Operations Director',
      company: 'Fresh Bowl Enterprises',
      location: 'Seattle, WA',
      rating: 5,
      content: 'Enterprise features are exactly what we needed for our 25+ locations. Custom integrations work flawlessly, and the dedicated account manager understands our business needs.',
      avatar: '/api/placeholder/60/60',
      stats: { locations: '25+', efficiency: '+50%' }
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'Café Manager',
      company: 'Morning Brew Coffee',
      location: 'Austin, TX',
      rating: 5,
      content: 'The QR code ordering feature was a game-changer during the pandemic and continues to improve customer experience. Setup was incredibly easy and support was fantastic.',
      avatar: '/api/placeholder/60/60',
      stats: { contactless: '90%', setup: '30min' }
    },
    {
      id: 6,
      name: 'Ahmed Hassan',
      role: 'Restaurant Chain Owner',
      company: 'Mediterranean Delights',
      location: 'Chicago, IL',
      rating: 5,
      content: 'Switched from three different systems to ODS and consolidated everything. The cost savings alone justified the move, but the efficiency gains are the real win.',
      avatar: '/api/placeholder/60/60',
      stats: { savings: '-45%', systems: '3→1' }
    }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Loved by Restaurant Owners Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what real restaurant owners say about ODS.
          </p>
        </motion.div>

        {/* Overall Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {[
            { metric: '4.9/5', label: 'Average Rating', subtext: 'Based on 2,500+ reviews' },
            { metric: '98%', label: 'Customer Satisfaction', subtext: 'Would recommend to others' },
            { metric: '30min', label: 'Average Setup Time', subtext: 'From signup to first order' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-3xl font-bold gradient-text mb-2">{stat.metric}</div>
              <div className="font-semibold text-gray-900 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.subtext}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-gray-200">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Stats */}
              <div className="flex items-center justify-between mb-6 py-3 px-4 bg-gray-50 rounded-lg">
                {Object.entries(testimonial.stats).map(([key, value], statIndex) => (
                  <div key={statIndex} className="text-center">
                    <div className="font-bold text-primary text-sm">{value}</div>
                    <div className="text-xs text-gray-500 capitalize">{key}</div>
                  </div>
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-lg font-semibold text-gray-600">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}, {testimonial.company}
                  </div>
                  <div className="text-xs text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-primary/5 to-primary-light/5 rounded-2xl border border-primary/10"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Join These Success Stories?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Start your free trial today and see why thousands of restaurants choose ODS to power their operations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary px-8 py-3"
            >
              Start Free Trial
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary px-8 py-3"
            >
              Schedule Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
