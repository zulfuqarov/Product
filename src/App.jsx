import { Routes, Route, BrowserRouter } from "react-router-dom"
import './App.css'
import Navbar from "./componets/Navbar/Navbar"
import Home from "./componets/Home/Home"
import Carts from "./componets/Cart/Carts"

function App() {  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Carts" element={<Carts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
