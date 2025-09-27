import './BookingCta.css'
import BookingButton from './shared/BookingButton'

const BookingCta = () => {
  return (
    <section className="booking-cta section" aria-labelledby="booking-cta-title">
      <div className="container booking-cta-container">
        <h2 id="booking-cta-title" className="booking-cta-title">Hemen Randevu Alın</h2>
        <p className="booking-cta-subtitle">Size en uygun zamanı kolayca seçin ve ilk adımı atın.</p>
        <BookingButton className="btn btn-solid booking-cta-button">Randevu Al</BookingButton>
      </div>
    </section>
  )
}

export default BookingCta
