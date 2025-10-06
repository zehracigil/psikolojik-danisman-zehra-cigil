import './Footer.css'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  const services = [
    'Bireysel Terapi',
    'Çocuk & Ergen Danışmanlığı',
    'Oyun Terapisi & Psikolojik Testler',
    'Ebeveyn Danışmanlığı',
    'Online Seans Seçeneği',
  ]

  const socialLinks = [
    {
      type: 'instagram',
      label: 'Instagram',
      href: 'https://www.instagram.com/psk.dan.zehracigil/',
    },
    {
      type: 'whatsapp',
      label: 'WhatsApp',
      href: 'https://wa.me/905388358806',
    },
  ]

  const renderIcon = (type) => {
    switch (type) {
      case 'instagram':
        return <FaInstagram className="social-icon" aria-hidden="true" />
      case 'whatsapp':
        return <FaWhatsapp className="social-icon" aria-hidden="true" />
      default:
        return null
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Hakkımda</h3>
            <p>Psikolojik Danışman Zehra Çığıl Emir. Nazilli, Aydın’da danışanlarıyla çalışan, etik ve bilimsel temelli bir danışmanlık yaklaşımı.</p>
          </div>

          <div className="footer-section">
            <h4>Hizmetler</h4>
            <ul>
              {services.map((service) => (
                <li key={service}><a href="#services">{service}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>İletişim</h4>
            <ul className="contact-list">
              <li><a href="mailto:psk.dan.zehracigil@gmail.com">psk.dan.zehracigil@gmail.com</a></li>
              <li><a href="tel:+905388358806">+90 538 835 88 06</a></li>
              <li>Nazilli, Aydın</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Sosyal Medya</h4>
            <div className="social-links">
              {socialLinks.map(({ type, label, href }) => (
                <a
                  key={type}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  {renderIcon(type)}
                  <span className="sr-only">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Psikolojik Danışman Zehra Çığıl Emir. Tüm hakları saklıdır.</p>
          <div className="footer-links">
            <a href="#">Gizlilik Politikası</a>
            <a href="#">Kullanım Şartları</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer