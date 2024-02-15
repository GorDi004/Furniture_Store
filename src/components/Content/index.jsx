import React from 'react'
import style from './style.module.scss'
import Header from './../Header/index'
import Footer from './../Footer/index'
import Cards from './../Cards/index'
import Categories from '../../elements/Categories'

const Content = ({items, onAdd, orders, onDelete, onChooseCategory}) => {
    return(
        <div className={style.content}>
            <Header orders={orders} onDelete={onDelete}/>
            <Categories onChooseCategory={onChooseCategory}/>
            <Cards items={items} onAdd={onAdd}/>
            <Footer/>
        </div>
    )
}

export default Content;