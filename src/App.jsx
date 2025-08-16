import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import ServiceSummary from './sections/ServiceSummary'
import Services from './sections/Services'
import ReactLenis from 'lenis/react'
import About from './sections/About'
import Works from './sections/Works'

const App = () => {
  return (
    <ReactLenis root className='relative w-screen min-h-screen overflow-x-hidden'>
      <Navbar />
      <Hero />
      <ServiceSummary />
      <Services />
      <About />
      <Works />
      <div className='min-h-screen'></div>
    </ReactLenis>
  )
}

export default App