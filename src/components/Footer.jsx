import './Footer.css'

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
        return (
          <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2C6 4 4 6 4 7.5v9C4 18.985 6.015 21 7.5 21h9c1.485 0 3.5-2.015 3.5-3.5v-9C20 6.015 17.985 4 16.5 4h-9Z" />
            <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
            <circle cx="17.5" cy="6.5" r="1.5" />
          </svg>
        )
      case 'whatsapp':
        return (
          <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2a10 10 0 0 0-8.94 14.5L2 22l5.7-1.5A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.09-1.12L8 18l-2.89.76.77-2.82A8 8 0 1 1 12 20Z" />
            <path d="M16.88 14.54c-.28-.14-1.66-.82-1.92-.91s-.45-.14-.64.14-.73.91-.9 1.1-.33.21-.61.07a6.4 6.4 0 0 1-1.89-1.16 7 7 0 0 1-1.31-1.62c-.14-.25 0-.39.1-.53s.28-.32.43-.48.2-.26.28-.44.06-.33 0-.47-.56-1.34-.77-1.84-.4-.43-.55-.44H8c-.15 0-.4.06-.61.29s-.8.78-.8 1.9  .84 2.2.96 2.36a10.7 10.7 0 0 0 2.4 2.86A7 7 0 0 0 13 16.7c.28.05.5.05.7.03a1.2 1.2 0 0 0 .82-.58c.25-.38.25-.7.18-.77s-.28-.17-.56-.29Z" />
          </svg>
        )
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
            <p>Psikolojik Danışman Zehra Emir Çığıl. Nazilli, Aydın’da danışanlarıyla çalışan, etik ve bilimsel temelli bir danışmanlık yaklaşımı.</p>
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
          <p>&copy; 2025 Psikolojik Danışman Zehra Emir Çığıl. Tüm hakları saklıdır.</p>
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