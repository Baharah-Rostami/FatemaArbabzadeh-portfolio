import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Layout/Navbar"
import Home from "./pages/Home"
import Footer from "./components/Layout/Footer"
import About from "./pages/About"
import SkillsPage from "./pages/Skills"
import Projects from "./pages/Projects"
import ProjectDetails from "./pages/ProjectDetails"
import Contact from "./pages/Contact"

function App() {
  return (
    <>
     <Navbar/>

     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/skills" element={<SkillsPage/>}/>
      <Route path="/projects" element={<Projects />}/>
      <Route path="/projects/:slug" element={<ProjectDetails />}/> 
      <Route path="/contact" element={<Contact />}/> 

     </Routes>

     <Footer/>
    </>
  )
}

export default App
