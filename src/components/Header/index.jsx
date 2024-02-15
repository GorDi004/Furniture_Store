import react, { useEffect, useState } from 'react'
import style from './style.module.scss'
import Logo from './../../elements/Logo/index'
import { FaShoppingCart } from 'react-icons/fa'
import Order from '../../elements/Order'

const Header = ({ orders, onDelete }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [summa, setSumma] = useState(0);
  useEffect(() => {
    setSumma(orders.reduce(function (currentSum, order) { return currentSum + parseFloat(order.price) }, 0).toFixed(2))
  }, [orders])

  return (
    <>
      <div className={style.main}>
        <Logo />
        <div className={style.box}>
          <div>
            <FaShoppingCart onClick={() => setCartOpen(!cartOpen)} className={cartOpen ? ` ${style.active}` : style.shoppingCart} />
            {cartOpen && (
              <div className={style.cart}>
                {orders.length > 0
                  ? orders.map(order => (
                    <Order key={order.id} order={order} onDelete={onDelete} />
                  )
                  )
                  : <p className={style.nothing}>Товарів немає</p>}
            <p className={style.summa}>Сума:<b>₴{summa}</b></p>
              </div>
            )}
          </div>
          <ol className={style.tabs}>
            <li>Про нас</li>
            <li>Контакти</li>
            <li className={style.special}>Кабінет</li>
          </ol>
        </div>
      </div>

      <div className={style.image}>
        <p className={style.title}>Найкращі товари для вашого дому</p>
        <p className={style.text}>за низькими цінами</p>
      </div>

    </>
  )
}

export default Header
