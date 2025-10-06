import { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState('about')

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Scroll-spy: highlight the nav item for the section in view
  useEffect(() => {
  const ids = ['about', 'services', 'reviews', 'faq', 'contact']
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        // Choose the entry with the highest intersection ratio
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) {
          setActiveId(visible.target.id)
        }
      },
      {
        root: null,
        // Focus around the middle of the viewport
        rootMargin: '-40% 0px -40% 0px',
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    )

    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const onNavClick = (id) => (e) => {
    // Smooth scroll and close the mobile menu
    const el = document.getElementById(id)
    if (el) {
      e.preventDefault()
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveId(id)
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img
              className="avatar"
              src="/images/zehra-header.jpg"
              alt="Psikolojik Danışman Zehra Çığıl Emir"
              loading="lazy"
            />
            <div className="logo-text">
              <span className="logo-title">
                <span className="logo-role">Psikolojik Danışman</span>
                <span className="logo-name">Zehra Çığıl Emir</span>
              </span>
            </div>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-links">
              <li><a href="#about" onClick={onNavClick('about')} className={activeId === 'about' ? 'active' : ''}>Hakkımda</a></li>
              <li><a href="#services" onClick={onNavClick('services')} className={activeId === 'services' ? 'active' : ''}>Hizmetler</a></li>
              <li><a href="#reviews" onClick={onNavClick('reviews')} className={activeId === 'reviews' ? 'active' : ''}>Yorumlar</a></li>
              <li><a href="#faq" onClick={onNavClick('faq')} className={activeId === 'faq' ? 'active' : ''}>Sıkça Sorulan Sorular</a></li>
              <li><a href="#contact" onClick={onNavClick('contact')} className={activeId === 'contact' ? 'active' : ''}>İletişim</a></li>
            </ul>
          </nav>

          <button className="menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header