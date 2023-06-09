import React from 'react'
import Image from 'next/image'
import image from '../../public/img/christina-morillo.webp'

import s from './About.module.scss'


const About = () => {
  return (
    <div className={s['about']}>
      <div className={s['about__wrapper']}>
        <h1 className={s['about__title']}>
          Hello, my name is Dima. I am a Front-end Developer, actively looking for a job at the moment
        </h1>
        <p className={s['about__paragraph']}>
          I design and develop websites and web applications using HTML, CSS, JS as well as TS, React and a variety of other technologies. When working on a project I pay attention to the smallest details, solving problems with patience. Development helps me free my creative mind and allow me to satisfy my desire for constant self-development.
        </p>
        <p className={s['about__paragraph']}>
          In life I am a very kind and positive person who likes to do interesting projects, creating new and unusual solutions in this world
        </p>
      </div>
      <div className={s['about__wrapper']}>
        <Image
          placeholder="blur"
          src={image}
          width={image.width}
          height={image.height}
          alt={image.src}
          className={s['about__image']}
        />
      </div>
    </div>
  )
}

export default About