import './Reviews.css'

const Reviews = () => {
  const reviews = [
    {
      name: 'Ümmühan A.',
      text: 'Zehra hanımla, oyun terapisi için yollarımız keşisti. Kendisi bize çok yardımcı oldu. Oğlumla çok güzel anlaştılar. iyi ki yola onunla çıkmışız diyebiliyoruz.',
      rating: 5,
    },
    {
      name: 'Rabia Y.',
      text: 'İki buçuk yaşındaki oğlum için gitmiştim. İlgi alakasından ve titizliğinden çok memnun kaldım 2 aydır devam ediyoruz oğlumda gelişimleri gözle görülür fark ediyoruz.',
      rating: 5,
    },
    {
      name: 'Zehra A.',
      text: 'Oyun terapisi sürecinde hem kızımızın gelişiminde hem de ebeveyn olarak bizim farkındalık kazanmamızda çok değerli katkılar sağladı. Kendimizi daha bilinçli ve donanımlı hissediyoruz. Kızımızın duygularını ifade etmesi, özgüveni ve sosyal becerilerindeki olumlu değişimi gözlemlemek bizim için çok kıymetliydi. Her şey için teşekkür ederiz.',
      rating: 5,
    },
  ]

  return (
    <section id="reviews" className="reviews section">
      <div className="container">
        <h2 className="section-title">Danışan Yorumları</h2>
        <p className="section-subtitle">
          Gizlilik ilkesiyle paylaşılan deneyimlerimiz
        </p>
        
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-header">
                <div className="review-initials" aria-hidden="true">{review.name.split(' ').map(w => w[0]).join('').slice(0,2)}</div>
                <div className="review-meta">
                  <div className="review-rating" aria-label={`Puan: ${review.rating}/5`}>
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="star" aria-hidden="true" />
                    ))}
                  </div>
                  <h4 className="review-name">{review.name}</h4>
                </div>
              </div>
              <p className="review-text">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews