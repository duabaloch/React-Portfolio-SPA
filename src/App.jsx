import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Education from './Components/Education'
import Skills from './Components/Skills'
import Service from './Components/Service'
import Projects from './Components/Projects'
import Blog from './Components/Blog'
import Testimonials from './Components/Testimoniols'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Service />
      <Projects />
      <Blog />
      <Testimonials />
      <Contact />
      <Footer/>
    </>
  )
}

export default App
