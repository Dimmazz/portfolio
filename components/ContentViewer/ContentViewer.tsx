import React, { useState } from 'react'
import About from '../About/About'
import Contacts from '../Contacts/Contacts'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'

import s from './ContentViewer.module.scss'


const ContentViewer = () => {

  const [activeTab, setActiveTab] = useState('PROJECTS')
  const PROJECTS = 'PROJECTS'
  const SKILLS = 'SKILLS'
  const ABOUT = 'ABOUT'
  const CONTACTS = 'CONTACTS'

  let content = <i></i>

  switch (activeTab) {
    case PROJECTS:
      content = <Projects />
      break;

    case SKILLS:
      content = <Skills />
      break;
    
    case ABOUT:
      content = <About />
      break;
    
    // case CONTACTS:
    //   content = <Contacts />
    //   break;

    default:
      break;
  }
  
  return (
    <section className={s['contentViewer']}>
      <ul className={s['contentViewer__tabs']}>
        <li className={s['contentViewer__tab']}>
          <button
            className={`${s['contentViewer__filter-btn']} ${activeTab === PROJECTS ? s['contentViewer__filter-btn--active'] : ''}`}
            onClick={(_event) => setActiveTab(PROJECTS)}
          >
            Projects
          </button>
        </li>

        <li className={s['contentViewer__tab']}>
          <button
            className={`${s['contentViewer__filter-btn']} ${activeTab === SKILLS ? s['contentViewer__filter-btn--active'] : ''}`}
            onClick={(_event) => setActiveTab(SKILLS)}
          >
            Skills
          </button>
        </li>

        <li className={s['contentViewer__tab']}>
          <button
            className={`${s['contentViewer__filter-btn']} ${activeTab === ABOUT ? s['contentViewer__filter-btn--active'] : ''}`}
            onClick={(_event) => setActiveTab(ABOUT)}
          >
            About
          </button>
        </li>

        {/* <li className={s['contentViewer__tab']}>
          <button
            className={`${s['contentViewer__filter-btn']} ${activeTab === CONTACTS ? s['contentViewer__filter-btn--active'] : ''}`}
            onClick={(_event) => setActiveTab(CONTACTS)}
          >
            Contacts
          </button>
        </li> */}
      </ul>

      <section className={s['contentViewer__content']}>
        {content}
      </section>
    </section>
  )
}

export default ContentViewer