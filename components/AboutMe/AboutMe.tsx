import React from 'react'
import AboutInfo from '../AboutInfo/AboutInfo'
import Profile from '../Profile/Profile'
import ProfileButtons from '../ProfileButtons/ProfileButtons'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'

import s from './aboutMe.module.scss'

const AboutMe = () => {
  return (
    <section className={s['about-me']}>
      <ThemeSwitcher parentClass="header__themeSwitcher" />
      <Profile />
      <AboutInfo />
      <ProfileButtons />
    </section>
  )
}

export default AboutMe