// import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './Pages/landing-page'
import Home from './Pages/home-page'
import Projects from './Pages/projects'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing name='Jacob' />} />
      <Route path='/home' element={<Home />} />
      <Route path='/projects' element={<Projects />} />
    </Routes>
  )
}

export default App
