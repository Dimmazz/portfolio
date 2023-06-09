import React from 'react'

// import IconTerms from '../../public/icons/terms.svg' //207 175
import Telegram from '../../public/icons/telegram.svg' //48 48
import Email from '../../public/icons/email.svg' //256 256
import LinkedIn from '../../public/icons/linkedIn.svg' //50 50
import Github from '../../public/icons/github.svg' //50 50
import Codeberg from '../../public/icons/codeberg.svg' //4.3  4.3


import s from './Contacts.module.scss'
import Contact from '../Contact/Contact'


const Contacts = () => {

  const contactsInfo = [
    {
      svg: Telegram,
      svgViewBox: '48 48',
      title: 'Telegram',
      id: '@MazuSad'
    },
    {
      svg: Email,
      svgViewBox: '256 256',
      title: 'Email',
      id: 'mazusad@gmail.com'
    },
    {
      svg: LinkedIn,
      svgViewBox: '50 50',
      title: 'LinkedIn',
      id: '@MazuSad'
    },
    {
      svg: Github,
      svgViewBox: '50 50',
      title: 'Github',
      id: 'Dimmazz'
    },
    {
      svg: Codeberg,
      svgViewBox: '4.3 4.3',
      title: 'Codeberg',
      id: 'MazuSad'
    },
  ]


  return (
    <div className={s['contacts']}>
      {contactsInfo.map((contact) => {
        return (
          <Contact
            key={contact.title}
            title={contact.title}
            Svg={contact.svg}
            svgViewBox={contact.svgViewBox}
            id={contact.id}
          />
        )
      })}
    </div>
  )
}

export default Contacts