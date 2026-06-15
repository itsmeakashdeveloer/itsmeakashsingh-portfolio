import { useState, useEffect } from 'react'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import Preloader from '@/components/ui/Preloader'
import ScrollProgress from '@/components/ui/ScrollProgress'
import CursorGlow from '@/components/ui/CursorGlow'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Contact from '@/components/sections/Contact'
import AiAssistant from '@/components/ai-assistant/AiAssistant'

const SECTION_IDS = ['home', 'about', 'skills', 'projects', 'experience', 'contact']

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const activeSection = useScrollSpy(SECTION_IDS)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Preloader isLoading={isLoading} />
      <ScrollProgress />
      <CursorGlow />
      <div className="min-h-screen bg-dark">
        <Navbar activeSection={activeSection} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
        <AiAssistant />
      </div>
    </>
  )
}
