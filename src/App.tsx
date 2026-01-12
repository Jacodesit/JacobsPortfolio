// import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './Pages/landing-page'
import Home from './Pages/home-page'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Landing name='Jacob' />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  )
}

export default App
