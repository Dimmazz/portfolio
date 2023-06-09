import React from 'react' 
import s from './Contact.module.scss'


interface IProps {
  title: string,
  Svg: any,
  svgViewBox: string,
  id: string
}

const Contact = ({ title, Svg, svgViewBox, id }: IProps) => {
  return (
    <div className={s['contacts__contact']}>
      <div className={s['contact__icon']}>
        <Svg
          viewBox={`0 0 ${svgViewBox}`}
          className={s['contact__svg']}
        />
      </div>
      <div className={s['contact__text']}>
        <h3 className={s['contact__title']}>
          {title}
        </h3>
        <h5 className={s['contact__id']}>
          {id}
        </h5>
      </div>
    </div>
  )
}

export default Contact