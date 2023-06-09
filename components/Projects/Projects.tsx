import React from 'react'
import Image from 'next/image'

import projects from '../../data/projects'

import s from './Projects.module.scss'


const Projects = () => {
  return (
    <div className={s['projects']}>

      {
        projects.map((project) => {
          return (
            <article key={project.title} className={s['projects__card']}>
              <Image className={s['card__img']} src={project.img} alt={project.title} />
              <div className={s['card__modal']}>
                <h4 className={s['card__subtitle']}>
                  {project.category}
                </h4>
                <h3 className={s['card__title']}>
                  {project.title}
                </h3>
                <ul className={s['card__link-list']}>
                  <li className={s['card__list-item']}>
                    <a className={s['card__link']} href={project.viewLink} target="_blank" rel="noopener noreferrer">
                      <i className="ri-eye-line" />
                    </a>
                  </li>
                  <li className={s['card__list-item']}>
                    <a className={s['card__link']} href={project.codeLink} target="_blank" rel="noopener noreferrer">
                      <i className="ri-code-s-slash-line" />
                    </a>
                  </li>
                </ul>
              </div>
            </article>
          )
        })
      }

      {/* <article className={s['projects__card']}>
        <Image className={s['card__img']} src={''} alt={'Projects View'} />
        <div className={s['card__modal']}>
          <h4 className={s['card__subtitle']}>
            Layout
          </h4>
          <h3 className={s['card__title']}>
            Ryan Warner
          </h3>
          <ul className={s['card__link-list']}>
            <li className={s['card__list-item']}>
              <a className={s['card__link']} href="http://" target="_blank" rel="noopener noreferrer">
                <i className="ri-eye-line" />
              </a>
            </li>
            <li className={s['card__list-item']}>
              <a className={s['card__link']} href="http://" target="_blank" rel="noopener noreferrer">
                <i className="ri-code-s-slash-line" />
              </a>
            </li>
          </ul>
        </div>
      </article> */}
    </div>
  )
}

export default Projects