import { Routes, Route } from 'react-router-dom'
import SmoothScroll from './components/SmoothScroll'
import CursorSpotlight from './components/CursorSpotlight'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import VideoEmbed from './components/VideoEmbed'
import WorkSection from './components/WorkSection'
import About from './components/About'
import HowIThink from './components/HowIThink'
import Experience from './components/Experience'
import Testimonials from './components/Testimonials'
import AiAssistant from './components/AiAssistant'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CaseStudyPage from './pages/CaseStudyPage'

function HomePage() {
  return (
    <>
      <Hero />
      <VideoEmbed />
      <WorkSection />
      <About />
      <HowIThink />
      <Experience />
      <Testimonials />
      <AiAssistant />
      <Contact />
    </>
  )
}

export default function App() {
  return (
    <SmoothScroll>
      <CursorSpotlight />
      <ScrollProgress />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/case-study/:id" element={<CaseStudyPage />} />
        </Routes>
      </main>
      <Footer />
    </SmoothScroll>
  )
}
