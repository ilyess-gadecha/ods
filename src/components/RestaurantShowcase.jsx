import React from 'react'
import { motion } from 'framer-motion'
import { Star, Users, Utensils, Wifi } from 'lucide-react'

const RestaurantShowcase = () => {
  const restaurantFeatures = [
    {
      title: "Fine Dining Experience",
      description: "Elevate your restaurant's service with our premium ordering solution",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      icon: Utensils,
      stats: ["50+ Fine Dining Restaurants", "98% Customer Satisfaction", "Average 23% Revenue Increase"]
    },
    {
      title: "Fast Casual & Quick Service",
      description: "Speed up service and reduce wait times with streamlined ordering",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      icon: Users,
      stats: ["200+ QSR Locations", "65% Faster Service", "40% Reduced Wait Times"]
    },
    {
      title: "Café & Coffee Shops",
      description: "Perfect for coffee shops with mobile ordering and loyalty programs",
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      icon: Star,
      stats: ["150+ Coffee Shops", "85% Return Customers", "30% Higher Order Value"]
    }
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-secondary-50"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Perfect for <span className="gradient-text">Every Restaurant Type</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From fine dining to quick service, our platform adapts to your restaurant's unique needs 
            and enhances every aspect of your operation.
          </p>
        </motion.div>

        {/* Restaurant Types Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {restaurantFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl shadow-medium hover:shadow-strong transition-all duration-300 overflow-hidden">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <feature.icon size={24} className="text-primary-600" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  
                  {/* Stats */}
                  <div className="space-y-3">
                    {feature.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
                        <span className="text-sm text-gray-700">{stat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Food Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Showcase Your <span className="text-primary-600">Delicious Menu</span>
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Beautiful food photography and dynamic menu presentation help increase orders and customer satisfaction.
          </p>
        </motion.div>

        {/* Food Images Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
              title: "Gourmet Pizza"
            },
            {
              image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
              title: "Premium Burger"
            },
            {
              image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
              title: "Fresh Pancakes"
            },
            {
              image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
              title: "Fresh Salad"
            }
          ].map((food, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl shadow-medium overflow-hidden group-hover:shadow-strong transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={food.image}
                    alt={food.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-gray-900">{food.title}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Integration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-12 text-white text-center"
        >
          <Wifi size={48} className="mx-auto mb-6 opacity-80" />
          <h3 className="text-3xl font-bold mb-4">
            Seamless Technology Integration
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Our platform integrates with your existing POS systems, payment processors, and kitchen equipment 
            for a truly seamless restaurant operation.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              "POS Integration",
              "Payment Processing", 
              "Kitchen Display Systems"
            ].map((tech, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-lg font-semibold">{tech}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default RestaurantShowcase
