import React from 'react'

import s from './AboutInfo.module.scss'


const AboutInfo = () => {
  return (
    <section className={s['aboutInfo']}>
      <div className={s['aboutInfo__item']}>
        <h2 className={s['aboutInfo__value']}>3+</h2>
        <h3 className={s['aboutInfo__title']}>Years of<br />          experence</h3>
      </div>
      <div className={s['aboutInfo__item']}>
        <h2 className={s['aboutInfo__value']}>30+</h2>
        <h3 className={s['aboutInfo__title']}>Completed<br />projects</h3>
      </div>
      <div className={s['aboutInfo__item']}>
        <h2 className={s['aboutInfo__value']}>18</h2>
        <h3 className={s['aboutInfo__title']}>Years<br />old</h3>
      </div>
    </section>
  )
}

export default AboutInfo