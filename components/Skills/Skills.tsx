import React from 'react'
import Skill from './Skill'
import skills from '../../data/skills'

import s from './Skills.module.scss'


const Skills = () => {
  return (
    <div className={s['skills']}>
      <div className={s['skills__group']}>
        <h5 className={s['skills__group-title']}>
          Frontend Skills
        </h5>
        <ul className={s['skills__list']}>
          <div className={s['skills__column']}>
            {
              skills.slice(0, 5).map((skill) => {
                return <Skill key={skill.name} name={skill.name} level={skill.level} />
              })
            }
          </div>
          <div className={s['skills__column']}>
            {
              skills.slice(5, 10).map((skill) => {
                return <Skill key={skill.name} name={skill.name} level={skill.level} />
              })
            }
          </div>
        </ul>
      </div>
      <div className={s['skills__group']}>
        <h5 className={s['skills__group-title']}>
          Other Skills
        </h5>
        <ul className={s['skills__list']}>
          <div className={s['skills__column']}>
            {
              skills.slice(10, 15).map((skill) => {
                return <Skill key={skill.name} name={skill.name} level={skill.level} />
              })
            }
          </div>
          <div className={s['skills__column']}>
            {
              skills.slice(15, 20).map((skill) => {
                return <Skill key={skill.name} name={skill.name} level={skill.level} />
              })
            }
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Skills