import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PageHeader, Button, Badge } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { showCardShopping } from '../../redux/actions/carShopping/carShopping'

function Navbar() {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)

  const { count } = state.carShopping

  const openCar = () => dispatch(showCardShopping())

  const listComponents = [
    <Link key="1" to="/">
      <Button>Home</Button>
    </Link>,
    <Link key="2" to="/purchase">
      <Button key="3">Carrirto</Button>
    </Link>,
    <Badge key="4" count={count}>
      <Button
        onClick={() => openCar()}
        type="dashed"
        shape="circle"
        icon={<ShoppingCartOutlined />}
      />
    </Badge>,
  ]

  return (
    <PageHeader
      className="site-page-header"
      title="MarketApp"
      extra={listComponents}
    />
  )
}

export default Navbar
