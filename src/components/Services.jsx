import './Services.css'

const Services = () => {
  const services = [
    {
      icon: null,
      title: 'Bireysel Terapi',
      description: 'Depresyon, kaygı bozuklukları, panik atak, özgüven sorunları, stres, yas, travma sonrası stres bozukluğu gibi bireysel zorluklarda kişiye özel, çözüm odaklı destek.'
    },
    {
      icon: null,
      title: 'Çocuk & Ergen Danışmanlığı',
      description: 'Dikkat eksikliği ve hiperaktivite, öfke nöbetleri, uyku ve yeme sorunları, kardeş kıskançlığı, okul uyum problemleri, sınav kaygısı gibi çocuk ve ergenlere özgü konularda gelişimsel destek.'
    },
    {
      icon: null,
      title: 'Oyun Terapisi & Psikolojik Testler',
      description: 'Çocukların duygularını ifade etmelerine ve gelişimlerini desteklemelerine yardımcı oyun terapisi; MOXO dikkat testi ve çocuk değerlendirme testleri ile kapsamlı psikolojik değerlendirme.'
    },
    {
      icon: null,
      title: 'Ebeveyn Danışmanlığı',
      description: 'Anne-babalara, çocuklarının duygusal ve davranışsal gelişimini desteklemek amacıyla rehberlik ve etkili ebeveynlik becerileri kazandırma.'
    },
    {
      icon: null,
      title: 'Online Seans Seçeneği',
      description: 'Zamandan ve mekândan bağımsız, güvenli çevrimiçi görüşmeler ile destek.'
    }
  ]

  return (
    <section id="services" className="services section">
      <div className="container">
        <h2 className="section-title">Hizmetler</h2>
        <p className="section-subtitle">Sunduğum profesyonel destek alanları</p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              {service.icon && (
                <div className="service-icon">{service.icon}</div>
              )}
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services