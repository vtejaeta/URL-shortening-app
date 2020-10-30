import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <section className='footer'>
      Made with{' '}
      <span role='img' aria-label='love'>
        🧡
      </span>{' '}
      by{' '}
      <a
        href='https://github.com/vtejaeta'
        target='_blank'
        rel='noopener noreferrer'
      >
        vtejaeta
      </a>
    </section>
  )
}

export default Footer
