import './ChildrenSessions.css'
import { useEffect, useRef } from 'react'
import img1 from '../assets/childrensessions1.jpg'
import img2 from '../assets/childrensessions2.jpg'
import img3 from '../assets/childrensessions3.jpg'
import img4 from '../assets/childrensessions4.jpg'

const ChildrenSessions = () => {
  const slides = [
    { src: img1, caption: 'Oyun Saati' },
    { src: img2, caption: 'Renkli Seanslar' },
    { src: img3, caption: 'Keşfet & Öğren' },
    { src: img4, caption: 'Konforlu Seans Ortamı' },
  ]

  const trackRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const prev = track.parentElement.querySelector('.prev')
    const next = track.parentElement.querySelector('.next')
    const scrollOne = () => track.clientWidth
    const onPrev = () => track.scrollBy({ left: -scrollOne(), behavior: 'smooth' })
    const onNext = () => track.scrollBy({ left: scrollOne(), behavior: 'smooth' })
    prev.addEventListener('click', onPrev)
    next.addEventListener('click', onNext)
    return () => {
      prev.removeEventListener('click', onPrev)
      next.removeEventListener('click', onNext)
    }
  }, [])

  return (
    <section id="children-sessions" className="children-sessions section">
      <div className="container">
        <h2 className="children-heading">Seanslarımızdan kareler</h2>
        <div className="carousel" role="region" aria-label="Seanslardan kareler">
          <div className="carousel-track" ref={trackRef}>
            {slides.map((s, i) => (
              <figure className="carousel-slide" key={i}>
                <img className="carousel-image" src={s.src} alt={s.caption} />
                <figcaption className="carousel-caption">{s.caption}</figcaption>
              </figure>
            ))}
          </div>
          <button className="carousel-btn prev" aria-label="Önceki">‹</button>
          <button className="carousel-btn next" aria-label="Sonraki">›</button>
        </div>
      </div>
    </section>
  )
}

export default ChildrenSessions