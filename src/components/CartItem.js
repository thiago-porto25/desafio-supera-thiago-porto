import styled from 'styled-components'
import { useContext } from 'react'
import { cartContext } from '../context/cartContext'
import Quantity from './Quantity'

const Container = styled.li``

export default function CartItem({ product }) {
  const { setCart, cart } = useContext(cartContext)

  const handleChange = ({ target }) => {
    if (target.value > 0) {
      const newCart = cart.map((item) => {
        if (item.id === product.id) {
          item.quantity = parseInt(target.value, 10)
          return item
        } else return item
      })
      setCart([...newCart])
    } else {
      const newCart = cart.filter((item) => item.id !== product.id)
      setCart([...newCart])
    }
  }

  return (
    <Container>
      <div className="cart-item-image-container"></div>
      <div className="cart-item-info-container">
        <p className="cart-item-name">{product?.name}</p>
        <p className="cart-item-price">
          R$ {(Math.round(product?.price * 100) / 100).toFixed(2)}
        </p>
      </div>
      <Quantity quantity={product?.quantity} handleChange={handleChange} />
    </Container>
  )
}
