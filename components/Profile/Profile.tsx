import React from 'react'
import Image from 'next/image'

import avatar from '../../public/img/Avatar.webp'

import s from './Profile.module.scss'


const Profile = () => {
  return (
    <section className={s['profile']}>
      <div className={s['profile__avatar']}>
        <div className={s['avatar__wrapper']}>
          <Image className={s['avatar__img']} src={avatar} alt={'My kind'} />
        </div>
      </div>
      <h2 className={s['profile__name']}>
        Dmitry Mazurov
      </h2>
      <h3 className={s['profile__profession']}>
        Frontend Developer (Remote)
      </h3>
      <h4 className={s['profile__aka']}>
        AKA - MazuSad
      </h4>
      <ul className={s['profile__social']}>
        <li className={s['social__item']}>
          <a className={s['social__link']} href="https://github.com/Dimmazz" target="_blank" rel="noopener noreferrer">
            <i className={s['social__icon'] + ' ri-github-line'} />
          </a>
        </li>
        <li className={s['social__item']}>
          <a className={s['social__link']} href="https://codeberg.org/MazuSad" target="_blank" rel="noopener noreferrer">
            <i className={s['social__icon'] + ' ri-code-line'} />
          </a>
        </li>
        <li className={s['social__item']}>
          <a className={s['social__link']} href="https://www.linkedin.com/in/mazusad/" target="_blank" rel="noopener noreferrer">
            <i className={s['social__icon'] + ' ri-linkedin-box-line'} />
          </a>
        </li>
        <li className={s['social__item']}>
          <a className={s['social__link']} href="http://" target="_blank" rel="noopener noreferrer">

          </a>
        </li>
      </ul>
    </section>
  )
}

export default Profile