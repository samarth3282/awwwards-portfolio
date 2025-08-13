import React from 'react'
import Navbar from './sections/Navbar'

const App = () => {
  return (
    <div className='relative w-screen min-h-screen overflow-x-auto'>
      <Navbar />
      <section className='min-h-screen'></section>
      <section className='min-h-screen'></section>
    </div>
  )
}

export default App