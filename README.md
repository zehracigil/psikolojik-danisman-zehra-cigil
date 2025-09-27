# Psikolojik Danışman Zehra Emir Çığıl - Professional Psychology Website

A modern, responsive one-page website for a Turkish psychologist, built with React and Vite. The website features a professional design with clean layout, plenty of white space, and a calm, trustworthy aesthetic suitable for Turkish patients of all ages.

## Features

- **Responsive tasarım**: Masaüstü, tablet ve mobil cihazlarda sorunsuz görünüm
- **Güven veren arayüz**: Profesyonel mavi tonları, yumuşak animasyonlar ve okunabilir tipografi
- **Yerelleştirilmiş içerik**: Tüm metinler Türkçe ve danışanın kimliğine göre uyarlanmış
- **Zengin bölümler**:
  - Ana sayfa: Güçlü hero metni, randevu ve hizmet CTA'ları
  - Hakkımda: Biyografi kartı, eğitimler ve ilgi alanları
  - Hizmetler: Çocuk, ergen, çift ve online danışmanlık kartları
  - Çocuk seanslarından kareler: Yatay galeri ve manuel gezinme kontrolleri
  - Yorumlar & SSS: Danışan görüşleri ve akordeon yapıdaki sık sorulan sorular
  - İletişim: Form doğrulaması, harita kısayolları, hızlı aksiyon butonları
  - Randevu CTA: Kapanış bölümünde ek dönüşüm çağrısı

## Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: CSS3 with modern features
- **Deployment**: Ready for Vercel/Netlify

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd luna-website3
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Environment Configuration

Kişiye özel entegrasyonları etkinleştirmek için bir `.env` dosyası oluşturun (bkz. `.env.example`) ve aşağıdaki değişkenleri doldurun:

- `VITE_DOKTORTAKVIMI_URL`: DoktorTakvimi veya tercih edilen randevu platformu profil bağlantısı. CTA butonları bu URL'yi yeni sekmede açar.
- `VITE_FORMSPREE_ID`: Formspree tarafından sağlanan form kimliği. Tanımlanmadığı durumda iletişim formu sahte bir gecikme ile başarı mesajı gösterir.

Üretim ortamına dağıtırken bu değişkenleri barındırma sağlayıcınızın gizli değişkenleri olarak eklemeyi unutmayın.

## Deployment

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Or connect your Git repository for automatic deployments

The project includes configuration files for both platforms:
- `vercel.json` - Vercel configuration
- `netlify.toml` - Netlify configuration

## Project Structure

```
src/
├── components/
│   ├── Header.jsx            # Sticky navigation ve scroll-spy
│   ├── Hero.jsx              # Ana hero bölümü ve CTA'lar
│   ├── About.jsx             # Biyografi, eğitim ve ilgi alanları
│   ├── Services.jsx          # Hizmet kartları
│   ├── ChildrenSessions.jsx  # Görsel seans galerisi
│   ├── Reviews.jsx           # Danışan yorumları
│   ├── FAQ.jsx               # SSS akordeon yapısı
│   ├── Contact.jsx           # Form, hızlı aksiyonlar ve harita bağlantıları
│   ├── BookingCta.jsx        # Kapanış randevu çağrısı
│   └── shared/
│       └── BookingButton.jsx # Ortak randevu butonu bileşeni
├── App.jsx             # Main app component
├── App.css             # Global app styles
├── index.css           # Global styles
└── main.jsx            # App entry point
```

## Customization

To customize the website for different psychologists:

1. Update personal information in `Hero.jsx` and `About.jsx`
2. Modify contact details in `Contact.jsx` and `Footer.jsx`
3. Adjust styling in the respective CSS files
4. Update the favicon and meta tags in `index.html`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License.

## Contact

- Telefon: +90 538 835 88 06
- E-posta: psk.dan.zehracigil@gmail.com
- Instagram: [@psk.dan.zehracigil](https://www.instagram.com/psk.dan.zehracigil/)
