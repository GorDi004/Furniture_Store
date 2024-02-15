import React from 'react'
import style from './style.module.scss'
import { useState } from 'react'
import Category from '../Category'

const Categories = ({ onChooseCategory }) => {
    const [categories] = useState([
        {
            key: 'all',
            name: 'Все'
        },
        {
            key: 'chair',
            name: 'Стільці'
        },
        {
            key: 'table',
            name: 'Столи'
        },
        {
            key: 'armchair',
            name: 'Крісла'
        },
        {
            key: 'lamp',
            name: 'Люстри'
        },

    ])
    return (
        <div className={style.categories}>
            {categories.map(category => (
                <Category key={category.key} onChooseCategory={onChooseCategory} category={category} />
            ))}
        </div>
    )
}

export default Categories;