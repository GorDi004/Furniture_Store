import React from 'react'
import style from './style.module.scss'

const Category = ({category, onChooseCategory}) => {
    return(
        <div className={style.category}>
            <p className={style.name} onClick={() => onChooseCategory(category.key)} >{category.name}</p>
        </div>
    )
}

export default Category;