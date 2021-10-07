import styled from 'styled-components'
import { useContext } from 'react'
import { cartContext } from '../context/cartContext'
import Quantity from './Quantity'

const Container = styled.li`
  box-sizing: border-box;
  padding: 1rem 0;
  margin: 1rem 0;
  display: flex;
  background-color: white;

  .cart-item-image-container {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100px;
    }
  }

  .cart-item-info-container {
    height: 100%;
    box-sizing: border-box;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    p {
      margin: 0;
    }

    .cart-item-name {
      font-weight: bold;
      font-size: 18px;
    }
  }
`

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

  const calculateSubtotal = (item) => {
    return (Math.round(item.price * item.quantity * 100) / 100).toFixed(2)
  }

  return (
    <Container>
      <div className="cart-item-image-container">
        <img src={`/images/assets/${product?.image}`} alt={product?.name} />
      </div>

      <div className="cart-item-info-container">
        <p className="cart-item-name">{product?.name}</p>

        <p className="cart-item-price">R$ {calculateSubtotal(product)}</p>
        <Quantity quantity={product?.quantity} handleChange={handleChange} />
      </div>
    </Container>
  )
}
