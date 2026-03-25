import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WorkSection from './components/WorkSection'
import About from './components/About'
import Experience from './components/Experience'
import AiAssistant from './components/AiAssistant'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Navbar />
      <Hero />
      <WorkSection />
      <About />
      <Experience />
      <AiAssistant />
      <Contact />
      <Footer />
    </div>
  )
}
