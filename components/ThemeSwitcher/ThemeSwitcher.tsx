import React, { useEffect, useState } from 'react'
import { Theme } from './theme.enum'

import s from './ThemeSwitcher.module.scss'


interface Iprops {
  parentClass: string
}

const ThemeSwitcher = ({parentClass}: Iprops) => {

  const [icon, setIcon] = useState('ri-sun-line')

  const toggleTheme: React.ChangeEventHandler<HTMLInputElement> = (_event) => {
    const isLight = document.documentElement.classList.contains('LIGHT')
    const isDark = document.documentElement.classList.contains('DARK')

    if (!(isLight && isDark)) {
      document.documentElement.classList.add(Theme.light)
      setIcon('ri-moon-line')
    }

    if (isLight) {
      document.documentElement.classList.add(Theme.dark)
      document.documentElement.classList.remove(Theme.light)
      setIcon('ri-sun-line')
    }

    if (isDark) {
      document.documentElement.classList.add(Theme.light)
      document.documentElement.classList.remove(Theme.dark)
      setIcon('ri-moon-line')
    }
  }

  return (
    <div className={s['themeSwipper'] + ' ' + parentClass}>
      <button className={s['themeSwipper__button']} type='button' onClick={_event => toggleTheme(_event as any)}>
        <i className={s['themeSwipper__icon'] + ' ' + icon}></i>
      </button>
    </div>
  )
}

export default ThemeSwitcher