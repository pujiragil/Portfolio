import { BrowserRouter, Route, Routes } from "react-router-dom"
import Index from "./pages"
import Contact from "./pages/contact"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
