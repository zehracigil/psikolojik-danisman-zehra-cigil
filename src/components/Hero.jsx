import './Hero.css'
import BookingButton from './shared/BookingButton'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Psikolojik Danışman <span className="hero-name">Zehra Emir Çığıl</span>
            </h1>
            <p className="hero-subtitle">
              Sağlıklı bir zihin, huzurlu bir yaşam.
            </p>
            <div className="hero-buttons">
              <BookingButton className="btn btn-primary">Randevu Al</BookingButton>
              <a href="#services" className="btn btn-secondary">İnceleyin</a>
            </div>
          </div>
          <div className="hero-image">
            <figure className="hero-photo-frame" aria-label="Psikolojik Danışman Zehra Emir Çığıl">
              <img
                className="hero-photo"
                src="/images/hero-photo.jpg"
                alt="Psikolojik Danışman Zehra Emir Çığıl danışanlarıyla buluşmaya hazır."
                loading="eager"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero