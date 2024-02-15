import React from 'react'
import style from './style.module.scss'
import Card from './../../elements/Card/index'

const Cards = ({ items, onAdd }) => {
  return (
    <div className={style.cards}>
      {items.map(item => (
        <Card item={item} onAdd={onAdd}/>
      ))}
    </div>
  )
}

export default Cards
