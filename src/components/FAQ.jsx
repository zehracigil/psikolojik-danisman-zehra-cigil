import { useState } from 'react'
import './FAQ.css'

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: "Psikoloji seansları nasıl işler?",
      answer: "Psikoloji seansları genellikle 50 dakika sürer ve haftada bir kez yapılır. İlk seansta mevcut durumunuz değerlendirilir ve size en uygun terapi yaklaşımı belirlenir."
    },
    {
      question: "Kaç seans sürer?",
      answer: "Seans sayısı kişiye ve soruna göre değişiklik gösterir. Bazı durumlar 8-12 seans içinde iyileşme gösterirken, bazıları daha uzun sürebilir. Bu konuda size bireysel bir plan sunulacaktır."
    },
    {
      question: "Randevu nasıl alırım?",
      answer: "Randevu almak için telefon, e-posta veya web sitemizdeki iletişim formunu kullanabilirsiniz. En kısa sürede size dönüş yaparak uygun randevu saatlerini paylaşacağız."
    },
    {
      question: "Online terapi mümkün mü?",
      answer: "Evet, çevrimiçi terapi seansları da sunuyoruz. Video konferans platformları üzerinden güvenli ve etkili online seanslar gerçekleştirebiliriz."
    },
    {
      question: "Gizlilik nasıl korunur?",
      answer: "Hasta mahremiyeti en öncelikli konularımızdandır. Tüm görüşmeler gizli tutulur ve yasal zorunluluklar dışında üçüncü kişilerle paylaşılmaz."
    }
  ]

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faq" className="faq section">
      <div className="container">
        <h2 className="section-title">Sıkça Sorulan Sorular</h2>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <span>{faq.question}</span>
                <span className="faq-icon" aria-hidden="true"></span>
              </button>
              
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="faq-contact">
          <p>Sorunuzun cevabını bulamadınız mı?</p>
          <a href="#contact" className="btn btn-primary">
            Bize Ulaşın
          </a>
        </div>
      </div>
    </section>
  )
}

export default FAQ