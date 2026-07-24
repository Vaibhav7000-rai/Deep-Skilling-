import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

export default function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <Home />
      <About />
      <Contact />
    </div>
  )
}
