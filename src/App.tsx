import SmoothScroll from './components/SmoothScroll'
import CursorSpotlight from './components/CursorSpotlight'
import ScrollProgress from './components/ScrollProgress'
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
    <SmoothScroll>
      <CursorSpotlight />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <WorkSection />
        <About />
        <Experience />
        <AiAssistant />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  )
}
