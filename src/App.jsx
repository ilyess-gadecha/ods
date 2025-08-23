import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Benefits from './components/Benefits'
import TrustSignals from './components/TrustSignals'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <TrustSignals />
      <Features />
      <Benefits />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
