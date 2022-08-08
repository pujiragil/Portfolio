import Index from "./pages"
import Contact from "./pages/contact"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useState, useEffect } from "react"

function App() {
  const [dark, setDark] = useState(false)
  
  useEffect(() => {
    const root = document.getElementById("root")
    if(dark){
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [dark])

  const toggle = () => {
    setDark(!dark)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index dark={dark} toggle={toggle} />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
