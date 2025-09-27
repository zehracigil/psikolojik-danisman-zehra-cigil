import Header from './components/Header'
import { useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import ChildrenSessions from './components/ChildrenSessions'
import Reviews from './components/Reviews'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import BookingCta from './components/BookingCta'
import Footer from './components/Footer'
import './App.css'

function App() {
  useEffect(() => {
    const els = document.querySelectorAll('.section .container')
    const onIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
        }
      })
    }
    const obs = new IntersectionObserver(onIntersect, { threshold: 0.12 })
    els.forEach((el) => {
      // ensure initial state for animation
      el.classList.add('reveal')
      obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <ChildrenSessions />
        <Reviews />
        <FAQ />
        <Contact />
        <BookingCta />
      </main>
      <Footer />
    </div>
  )
}

export default App
