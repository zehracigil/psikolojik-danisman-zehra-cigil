import { useState } from 'react'
import './About.css'

const About = () => {
  const interests = [
    'Depresyon',
    'Stres',
    'Aile İçi İletişim Sorunları',
    'Sosyal Fobi',
    'Yaygın Anksiyete Bozukluğu',
    'Özgüven Sorunu (Kendine Güven Sorunu)',
    'Obsesif-Kompulsif Bozukluk',
    'Panik Atak',
    'Tırnak Yeme',
    'Kardeş Kıskançlığı',
    'Alt Islatma (Enürezis)',
    'Kaka Tutma (Enkoprezi)',
    'Gelişim Bozuklukları',
    'Çocuk ve Ergen Psikolojisi',
    'Çocuklarda Yeme Problemleri',
    'Çocuklarda Uyku Problemleri',
    'Çocuklarda Öfke Problemi',
    'Dikkat Eksikliği ve Hiperaktivite',
    'Ebeveyn Danışmanlığı',
    'Ağlama ve Öfke Nöbetleri',
    'Okula Uyum Sorunları',
    'Davranış Bozuklukları',
    'Yeme Bozuklukları',
    'Anoreksiya',
    'Sınav Kaygısı',
    'Yas',
    'Travma Sonrası Stres Bozukluğu',
    'Okul Başarısızlığı',
    'Agorafobi',
    'Özgül Fobi',
    'Vücut (Beden) Disformik Bozukluğu',
    'Panik Bozukluğu',
    'Depresyon',
    'Kaygı Bozuklukları',
    'Çocuk ve Ergen Psikolojisi Problemleri',
    'Öfke',
    'Saldırganlık',
    'İnatlaşma',
    'Anksiyete',
    'Çekingenlik',
    'Kendine Zarar Verme',
    'Boşanma Travması',
    'Fobiler',
    'Panik Bozukluklar',
    'Oyun Bağımlılığı',
    'Korku',
    'Saç ve Kıl Koparma Hastalığı (Trikotillomani)',
    'Kleptomani',
    'Bağlanma Problemleri',
    'Kıskançlık',
    'Blumia',
    'Sosyal Uyum Problemleri',
    'Moxo Dikkat Testi',
    'Oyun Terapisi',
  ]

  const [showAllInterests, setShowAllInterests] = useState(false)
  const initialVisibleCount = 15
  const hasMoreInterests = interests.length > initialVisibleCount
  const displayedInterests = showAllInterests ? interests : interests.slice(0, initialVisibleCount)

  return (
    <section id="about" className="about section">
      <div className="container about-hero">
  <h1 className="about-title">Psikolojik Danışman Zehra Çığıl Emir</h1>

        {/* Bio Card: Birkaç kelime ile... with Read more */}
        <section className="about-bio" aria-labelledby="about-bio-title">
          <div className="bio-card">
            <h2 id="about-bio-title" className="about-section-title">Ben kimim?</h2>
            <p className="about-bio-text">
              Merhaba, ben Psikolojik Danışman Zehra Çığıl Emir. Muğla Sıtkı Koçman Üniversitesi Rehberlik ve Psikolojik Danışmanlık bölümünden mezun olduktan sonra, Adnan Menderes Üniversitesi Eğitim Programları ve Öğretimi alanında yüksek lisansımı tamamladım. Eğitim hayatım boyunca, çeşitli kurumlarda gerçekleştirdiğim stajlarla çocuk ve ergenler üzerine kapsamlı bir deneyim kazandım.
            </p>
            <details className="bio-more">
              <summary>Daha fazlasını oku</summary>
              <p>
                Mesleki gelişimimi sürdürmek adına, alanında önemli isimlerden çeşitli eğitimler aldım. Bu eğitimler arasında, Kln. Psk. Mehmet Teber’den Çocuk Merkezli Oyun Terapisi, Prof. Dr. Vahdet Görmez’den Çocuk ve Ergen Bilişsel Davranışçı Terapi, MOXO Türkiye’den MOXO Dikkat Testi, Dergi PDR’den Çocuk Değerlendirme Testleri gibi önemli alanlara dair sertifikalar yer almaktadır. Ayrıca, Bahar Çakır ve Yaren Başaran’dan da çocuk ve ergen psikolojisi üzerine çeşitli gelişimsel eğitimler aldım.
              </p>
              <p>
                Danışmanlık hizmetlerimi Aydın/Nazilli’de yüz yüze ve online olarak sunmaktayım. Çocuk ve ergenlerin duygusal ve psikolojik ihtiyaçlarını anlamak ve çözüm odaklı yaklaşımlar geliştirmek için çalışıyorum. Her bireyin benzersiz olduğunu kabul ederek, terapi sürecinde kişiye özel bir yaklaşım benimsemekteyim.
              </p>
            </details>
          </div>
        </section>

        {/* İki sütun: Okullar/Eğitimler ve Sertifikalar */}
        <section className="about-qualifications" aria-label="Eğitim ve Sertifikalar">
          <div className="two-col">
            <div className="qual-card">
              <h4 className="qual-title">Eğitimlerim</h4>
              <ul className="check-list">
                <li>Muğla Sıtkı Koçman Üniversitesi — Rehberlik ve Psikolojik Danışmanlık (Lisans)</li>
                <li>Adnan Menderes Üniversitesi — Eğitim Programları ve Öğretimi (Yüksek Lisans)</li>
              </ul>
            </div>

            <div className="qual-card">
              <h4 className="qual-title">Aldığım Eğitimler</h4>
              <ul className="check-list">
                <li>Kln. Psk. Mehmet Teber — Çocuk Merkezli Oyun Terapisi</li>
                <li>Prof. Dr. Vahdet Görmez — Çocuk ve Ergen Bilişsel Davranışçı Terapi</li>
                <li>MOXO Türkiye — MOXO Dikkat Testi</li>
                <li>Dergi PDR — Çocuk Değerlendirme Testleri</li>
                <li>Bahar Çakır & Yaren Başaran — Çocuk ve Ergen Psikolojisi Gelişimsel Eğitimler</li>
              </ul>
            </div>
          </div>
        </section>

        {/* İlgi Alanları */}
        <section className="about-interests" aria-labelledby="interests-title">
          <h3 id="interests-title" className="about-section-title">İlgi Alanları</h3>
          <ul className="interests-grid" aria-label="İlgi alanları listesi">
            {displayedInterests.map((interest, index) => (
              <li key={`${interest}-${index}`} className="pill">{interest}</li>
            ))}
          </ul>
          {hasMoreInterests && (
            <div className="interests-toggle">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowAllInterests((prev) => !prev)}
                aria-expanded={showAllInterests}
              >
                {showAllInterests ? 'Daha Az Göster' : 'Tümünü Göster'}
              </button>
            </div>
          )}
        </section>
      </div>
    </section>
  )
}

export default About