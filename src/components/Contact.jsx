import { useEffect, useRef, useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent1: false,
    consent2: false,
    consent3: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [showMapOptions, setShowMapOptions] = useState(false)
  const mapOpenRef = useRef(null)

  // Coordinates for Nazilli, Aydın
  const LAT = 37.9133263
  const LNG = 28.3252201
  const googleMapsViewUrl = `https://www.google.com/maps?q=${LAT},${LNG}`
  const appleMapsViewUrl = `https://maps.apple.com/?ll=${LAT},${LNG}`

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    // Optional Formspree integration via env var
    const formspreeId = import.meta.env.VITE_FORMSPREE_ID
    const endpoint = formspreeId ? `https://formspree.io/f/${formspreeId}` : null

    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
            _subject: 'Web İletişim Formu',
          }),
        })

        if (!res.ok) {
          throw new Error('Form gönderimi başarısız')
        }
      } else {
        // No endpoint configured → mock delay
        await new Promise((r) => setTimeout(r, 1000))
      }

      setSubmitMessage('Mesajınız başarıyla gönderildi. En kısa sürede dönüş yapacağız.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        consent1: false,
        consent2: false,
        consent3: false,
      })
    } catch (error) {
      console.error('Contact form submission failed:', error)
      setSubmitMessage('Gönderim sırasında bir sorun oluştu. Lütfen daha sonra tekrar deneyin.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Close map options when clicking outside
  useEffect(() => {
    const onDocClick = (e) => {
      if (mapOpenRef.current && !mapOpenRef.current.contains(e.target)) {
        setShowMapOptions(false)
      }
    }
    document.addEventListener('mousedown', onDocClick)
    return () => document.removeEventListener('mousedown', onDocClick)
  }, [])

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">İletişim Formu</h2>
        <p className="section-subtitle">
          Sorularınız için formu doldurun. Sağda adres ve harita bilgilerimizi bulabilirsiniz.
        </p>

        <div className="contact-content">
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">İsim</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="İsminiz"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">E-posta</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="E-posta Adresiniz"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="phone">Telefon</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Telefon Numaranız"
                  pattern="^\+?[0-9 ().-]{8,}$"
                  title="Lütfen geçerli bir telefon numarası giriniz"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Mesaj</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Mesajınız..."
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-solid submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
              </button>

              {submitMessage && <div className="submit-message">{submitMessage}</div>}
            </form>
          </div>

          <div className="contact-info">
            <div className="info-card">
              <h3>İletişim Bilgileri</h3>
              <div className="info-item">
                <strong>Adres:</strong>
                <p>
                  <a
                    href={googleMapsViewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-link"
                    title="Google Haritalar'da görüntüle"
                  >
                    Yeşil Mahallesi, 123. Sokak No: 18, Nazilli / Aydın
                  </a>
                </p>
                <div className="map-open" ref={mapOpenRef}>
                  <button
                    type="button"
                    className="btn btn-secondary map-open-btn"
                    onClick={() => setShowMapOptions((v) => !v)}
                    aria-haspopup="menu"
                    aria-expanded={showMapOptions}
                  >
                    Haritalarda Aç
                  </button>
                  {showMapOptions && (
                    <div className="map-options" role="menu" aria-label="Harita seçenekleri">
                      <a href={googleMapsViewUrl} target="_blank" rel="noopener noreferrer" role="menuitem">
                        Google Haritalar
                      </a>
                      <a href={appleMapsViewUrl} target="_blank" rel="noopener noreferrer" role="menuitem">
                        Apple Haritalar
                      </a>
                    </div>
                  )}
                </div>
              </div>
              <div className="info-item">
                <strong>Telefon:</strong>
                <p>
                  <a href="tel:+905388358806">+90 538 835 88 06</a>
                </p>
              </div>
              <div className="info-item">
                <strong>E-posta:</strong>
                <p>
                  <a href="mailto:psk.dan.zehracigil@gmail.com">psk.dan.zehracigil@gmail.com</a>
                </p>
              </div>
              <div className="info-item">
                <strong>Hızlı Erişim:</strong>
                <div className="quick-actions">
                  <a className="btn btn-secondary" href="https://wa.me/905388358806" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                  <a className="btn btn-secondary" href="https://www.instagram.com/psk.dan.zehracigil/" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
              </div>
              <div className="info-item">
                <strong>Çalışma Saatleri:</strong>
                <p>Pazartesi - Cumartesi: 10:00 - 19:00</p>
                <p>Pazar: Kapalı</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact