import React from 'react'

const openInNewTab = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer')
}

const BookingButton = ({ className = '', children = 'Randevu Al' }) => {
  const bookingUrl = import.meta.env.VITE_DOKTORTAKVIMI_URL
  const phoneHref = 'tel:+905388358806'
  const handleClick = (e) => {
    if (!bookingUrl) return
    e.preventDefault()
    openInNewTab(bookingUrl)
  }

  // If no env is set, fall back to direct call link
  const href = bookingUrl || phoneHref

  return (
    <a href={href} onClick={handleClick} className={className} rel="noopener noreferrer">
      {children}
    </a>
  )
}

export default BookingButton
