import React from 'react'
import s from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={s['footer']}>
      <h5 className={s['footer__text']}>
        © MazuSad. All rigths reserved
      </h5>
    </footer>
  )
}

export default Footer