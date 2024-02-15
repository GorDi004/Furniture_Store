import React from 'react'
import style from './style.module.scss'
import { FaTrashAlt } from 'react-icons/fa'

const Order = ({ order, onDelete }) => {
    return (
            <div className={style.order}>
                <img src={order.urlImg} />
                <div className={style.info}>
                    <p className={style.title}>{order.title}</p>
                    <p className={style.price}>₴{order.price}</p>
                </div>
                <FaTrashAlt className={style.trash} onClick={()=>onDelete(order.id)}/>
            </div>
    )
}

export default Order