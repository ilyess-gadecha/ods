import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import DashboardShowcase from './components/DashboardShowcase'
import OrderingTemplates from './components/OrderingTemplates'
import PaymentShowcase from './components/PaymentShowcase'
import AIFeatures from './components/AIFeatures'
import PrintApp from './components/PrintApp'
import RestaurantShowcase from './components/RestaurantShowcase'
import StatsShowcase from './components/StatsShowcase'
import Benefits from './components/Benefits'
import TrustSignals from './components/TrustSignals'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import CTA from './components/CTA'
import Footer from './components/Footer'
import SEOHead from './components/SEOHead'
import './index.css'

function App() {
  return (
    <div className="App">
      <SEOHead />
      <Header />
      <main id="main-content" role="main">
        <Hero />
        <TrustSignals />
        <DashboardShowcase />
        <OrderingTemplates />
        <PaymentShowcase />
        <AIFeatures />
        <PrintApp />
        <RestaurantShowcase />
        <StatsShowcase />
        <Features />
        <Benefits />
        <Pricing />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
