import React from 'react'

import s from './Skill.module.scss'


interface Skill {
  name: string,
  level: string
}

const Skill = ({ name, level }: Skill) => {
  return (
    <li className={s['skills__list-item']}>
      <i className={s['skills__icon'] + ' ri-checkbox-circle-line'} />
      <div className={s['skills__text']}>
        <h4 className={s['skills__name']}>
          {name}
        </h4>
        <p className={s['skills__level']}>
          {level}
        </p>
      </div>
    </li>
  )
}

export default Skill