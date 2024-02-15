import React, { useState } from 'react'
import Content from './components/Content/index'

const App = () => {
  const [orders, setOrders] = useState([])
  const [currentItems, setCurrentItems] = useState([]);
  const [items] = useState([
    {
      id: 1,
      title: 'Стілець',
      urlImg: 'https://img.edilportale.com/product-thumbs/b_progetti-fashion-fur-easy-chair-giorgetti-333758-rel7e84753a.jpg',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, nulla?',
      category: 'chair',
      price: '899.99'
    },
    {
      id: 2,
      title: 'Стіл',
      urlImg: 'https://cdn11.bigcommerce.com/s-8npu8mt3gx/images/stencil/original/products/1479/11308/apitgzonx__59990.1626191467.jpg?c=2',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, nulla?',
      category: 'table',
      price: '999.99'
    },
    {
      id: 3,
      title: 'Стіл',
      urlImg: 'https://mobellink.com/wp-content/uploads/2013/08/modern-wood-furniture-waldek-low-table-3.jpg',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, nulla?',
      category: 'table',
      price: '999.99'
    },
    {
      id: 4,
      title: 'Крісло',
      urlImg: 'https://images.squarespace-cdn.com/content/v1/5ed2dcd9bec96f17e7468fc9/1643638700300-587X0CM2X31LEC06CR4D/framed+green+armchair.png?format=1000w',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, nulla?',
      category: 'armchair',
      price: '1999.99'
    },
    {
      id: 5,
      title: 'Крісло',
      urlImg: 'https://ucarecdn.com/6bc0f439-7dfd-4558-aaed-50e515bcf85a/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, nulla?',
      category: 'armchair',
      price: '1799.99'
    },
    {
      id: 6,
      title: 'Лампа',
      urlImg: 'https://secure.img1-cg.wfcdn.com/im/05779092/resize-h600-w600%5Ecompr-r85/9972/99725816/Table+Lamps.jpg',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, nulla?',
      category: 'lamp',
      price: '799.99'
    },
    {
      id: 7,
      title: 'Стіл',
      urlImg: 'https://mobileimages.lowes.com/productimages/09e7f3df-f0e1-40c4-aef0-e3d9a13873a2/15799014.jpg?size=pdhism',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, nulla?',
      category: 'table',
      price: '1129.99'
    },
  ])

  const addToOrder = (item) => {
    if (!orders.some((order) => order.id === item.id)) {
      setOrders([...orders, item])
    }
  }

  const deleteOrder = (id) => {
    setOrders(orders.filter((order) => order.id !== id))  
  }

  const chooseCategory = (category) => {
    if (category === "all") {
      setCurrentItems(items);
    } else {
      setCurrentItems(items.filter((item) => item.category === category));
    }
  };

  return (
    <div className='App'>
      <Content items={currentItems} onAdd={addToOrder} orders={orders} onDelete={deleteOrder} onChooseCategory={chooseCategory}/>
    </div>
  )
}

export default App
