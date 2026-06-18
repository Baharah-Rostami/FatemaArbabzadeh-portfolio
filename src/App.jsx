import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Layout/Navbar"
import Home from "./pages/Home"
import Footer from "./components/Layout/Footer"
import About from "./pages/About"
import SkillsPage from "./pages/Skills"

function App() {
  return (
    <>
     <Navbar/>

     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/skills" element={<SkillsPage/>}/>

     </Routes>

     <Footer/>
    </>
  )
}

export default App
