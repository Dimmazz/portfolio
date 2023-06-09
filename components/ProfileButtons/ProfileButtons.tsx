import React from 'react'

import s from './ProfileButtons.module.scss'

const ProfileButtons = () => {
  return (
    <section className={s['profileButtons']}>
      <div className={s['profileButtons__button-primary']}>
        <a className={s['profileButtons__link']} href="http://" target="_blank" rel="noopener noreferrer">
          Write to Telegram
          <i className="ri-telegram-fill" />
        </a>
      </div>
      <ul className={s['profileButtons__list']}>
        <li className={s['profileButtons__list-item']}>
          <a className={s['profileButtons__link']} href="mailto:mazusad@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="ri-mail-add-line" />
          </a>
        </li>
        <li className={s['profileButtons__list-item']}>
          <a className={s['profileButtons__link']} href="https://hh.ru/resume/0cf59ed5ff09af1edf0039ed1f7a4149733969" target="_blank" rel="noopener noreferrer">
            <i className="ri-profile-line" />
          </a>
        </li>
      </ul>
    </section>
  )
}

export default ProfileButtons