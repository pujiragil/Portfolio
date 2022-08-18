import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-primary">
        <Navbar/>
        <div className="container mx-auto font-manrope">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App