import styled from 'styled-components'
import { useParams } from 'react-router'
import { useContext, useEffect, useState } from 'react'
import data from '../data/products.json'
import { Button } from '../components'
import { RiHeartsLine } from 'react-icons/ri'
import { cartContext } from '../context/cartContext'

const Container = styled.main`
  min-height: calc(100vh - 7rem);
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 2rem 0;

  .product-box {
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    padding: 1rem;
    background-color: var(--lightGrey);
    height: fit-content;
    background-color: white;
    max-width: 850px;
    width: 80%;
    min-height: 430px;
    box-shadow: 0px 0px 5px #00000022;

    @media (max-width: 850px) {
      flex-direction: column;
      align-items: center;
    }

    .product-image-container {
      max-width: 400px;
      min-width: 350px;
      height: fit-content;
      padding: 1rem 0;
      box-sizing: border-box;

      @media (max-width: 850px) {
        min-width: 300px;
      }

      @media (max-width: 650px) {
        min-width: 200px;
      }

      img {
        width: 100%;
        height: auto;
        object-fit: cover;
      }
    }

    .product-info-container {
      margin: 0;
      box-sizing: border-box;
      padding: 1rem 2rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      @media (max-width: 650px) {
        gap: 2rem;
      }

      .product-name {
        margin: 0;
        font-size: 45px;

        @media (max-width: 650px) {
          font-size: 35px;
        }

        @media (max-width: 450px) {
          font-size: 25px;
        }
      }

      .item-score {
        margin: 0;
        font-size: 23px;
        color: #555;
        display: flex;
        align-items: center;
        gap: 0.5rem;

        @media (max-width: 650px) {
          font-size: 20px;
        }

        svg {
          color: red;
          font-size: 30px;
        }
      }

      .product-price {
        font-size: 30px;
        margin: 0;

        @media (max-width: 650px) {
          font-size: 25px;
        }
      }

      .add-cart-container {
        height: 3rem;
        width: 17rem;

        @media (max-width: 850px) {
          margin: 0 auto;
          width: 100%;
        }

        @media (max-width: 450px) {
          button {
            font-size: 16px;
          }
        }
      }
    }
  }
`

export default function ProductTemplate() {
  const [product, setProduct] = useState()
  const { id: stringId } = useParams()
  const { cart, setCart, setCartOpen } = useContext(cartContext)
  const id = parseInt(stringId, 10)

  const handleAddToCart = () => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        item.quantity += 1
        return item
      } else return item
    })

    const isOldItem = cart.some((item) => item.id === id)

    if (cart[0] && isOldItem) setCart(newCart)
    else setCart([...cart, { id, quantity: 1 }])

    setCartOpen(true)
  }

  useEffect(() => {
    const selectedProduct = data.find((item) => item.id === id)

    setProduct(selectedProduct)
  }, [id])

  return (
    <Container>
      <div className="product-box">
        <div className="product-image-container">
          <img src={`/images/assets/${product?.image}`} alt={product?.name} />
        </div>

        <div className="product-info-container">
          <h1 className="product-name">{product?.name}</h1>

          <p className="item-score">
            <RiHeartsLine /> {product?.score}
          </p>

          <h3 className="product-price">
            R$ {(Math.round(product?.price * 100) / 100).toFixed(2)}
          </h3>

          <div onClick={handleAddToCart} className="add-cart-container">
            <Button type="black">ADICIONAR AO CARRINHO</Button>
          </div>
        </div>
      </div>
    </Container>
  )
}
