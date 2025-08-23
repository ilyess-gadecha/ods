import React from 'react'
import { motion } from 'framer-motion'
import { 
  ShoppingCart, 
  BarChart3, 
  Package,
  Calendar,
  TrendingUp,
  Users
} from 'lucide-react'
import ordersImage from '../assets/orders.png'
import inventoryImage from '../assets/inventory.png'
import menuImage from '../assets/menu.png'
import tablesImage from '../assets/tables.png'
import marketingImage from '../assets/marketing.png'
import dashboardImage from '../assets/dashboard.png'

const DashboardShowcase = () => {
  const dashboards = [
    {
      title: "Complete Dashboard Overview",
      description: "Comprehensive view of your entire restaurant operation with all key metrics and controls in one place.",
      image: dashboardImage,
      icon: BarChart3,
      color: "from-primary-500 to-primary-600",
      features: ["Real-time analytics", "Multi-location support", "Performance insights", "Centralized control"]
    },
    {
      title: "Order Management",
      description: "Real-time order tracking and management with detailed analytics and status updates.",
      image: ordersImage,
      icon: ShoppingCart,
      color: "from-blue-500 to-blue-600",
      features: ["Real-time notifications", "Order status tracking", "Customer details", "Payment processing"]
    },
    {
      title: "Inventory Control",
      description: "Complete inventory management with stock levels, alerts, and automated ordering.",
      image: inventoryImage,
      icon: Package,
      color: "from-green-500 to-green-600",
      features: ["Stock level monitoring", "Low stock alerts", "Supplier management", "Cost tracking"]
    },
    {
      title: "Menu Management",
      description: "Dynamic menu control with pricing, categories, and availability management.",
      image: menuImage,
      icon: BarChart3,
      color: "from-purple-500 to-purple-600",
      features: ["Dynamic pricing", "Category organization", "Item availability", "Nutritional info"]
    },
    {
      title: "Table Management",
      description: "Efficient table allocation and reservation system with real-time status updates.",
      image: tablesImage,
      icon: Calendar,
      color: "from-orange-500 to-orange-600",
      features: ["Table reservations", "Capacity management", "QR code generation", "Seating optimization"]
    },
    {
      title: "Marketing Analytics",
      description: "Comprehensive analytics and marketing tools to boost your restaurant's performance.",
      image: marketingImage,
      icon: TrendingUp,
      color: "from-red-500 to-red-600",
      features: ["Sales analytics", "Customer insights", "Campaign tracking", "Revenue reports"]
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="gradient-text">Dashboard Management</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the power of our comprehensive restaurant management system with real dashboard screenshots 
            from actual restaurant operations.
          </p>
        </motion.div>

        {/* Dashboard Grid */}
        <div className="space-y-32">
          {dashboards.map((dashboard, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${dashboard.color} rounded-xl flex items-center justify-center`}>
                    <dashboard.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">{dashboard.title}</h3>
                </div>
                
                <p className="text-lg text-gray-600 mb-8">
                  {dashboard.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {dashboard.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="btn btn-primary group">
                  Explore {dashboard.title}
                  <TrendingUp size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>

              {/* Dashboard Image */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  {/* Floating gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${dashboard.color} rounded-3xl blur-2xl opacity-20 -z-10 transform scale-105`}></div>
                  
                  {/* Main image container */}
                  <div className="bg-white rounded-3xl shadow-strong p-4">
                    <div className="rounded-2xl overflow-hidden">
                      <img 
                        src={dashboard.image}
                        alt={`${dashboard.title} Dashboard`}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Floating indicator */}
                  <motion.div
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-4 -right-4 bg-white rounded-full shadow-medium p-3"
                  >
                    <div className={`w-3 h-3 bg-gradient-to-r ${dashboard.color} rounded-full`}></div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl p-12 text-white">
            <Users size={48} className="mx-auto mb-6 opacity-80" />
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Restaurant?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of restaurants already using ODS to streamline their operations 
              and boost their revenue.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="btn bg-white text-primary-600 hover:bg-gray-50 btn-lg">
                Start Free Trial
              </button>
              <button className="btn border-white text-white hover:bg-white hover:text-primary-600 btn-lg">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DashboardShowcase
