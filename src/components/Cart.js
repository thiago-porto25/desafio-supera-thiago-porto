import styled from 'styled-components'
import { cartContext } from '../context/cartContext'
import { useContext, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { IoMdClose } from 'react-icons/io'
import { Button, CartItem } from '.'
import { useHistory } from 'react-router'
import * as ROUTES from '../constants/routes'

const Modal = styled(motion.div)`
  height: 100%;
  width: 100%;
  background-color: #000000aa;
  position: fixed;
  top: 0;
  left: 0;
`

const CartContainer = styled(motion.div)`
  height: 100%;
  max-width: 400px;
  width: 100%;
  position: absolute;
  right: 0;
  background-color: var(--light);
  color: var(--dark);
  padding: 2rem 1rem 2rem 2rem;
  box-sizing: border-box;
  overflow-y: scroll;

  .close-cart-container {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 30px;
    cursor: pointer;

    svg {
      transition: 200ms ease-in-out;
    }

    &:hover > svg {
      transform: rotate(180deg);
    }
  }

  .cart-list-container {
    list-style-type: none;
    padding: 0;
    margin: 0;

    .empty-cart {
      box-sizing: border-box;
      height: 17rem;
      padding-top: 3rem;
      text-align: center;
    }
  }

  .cart-subtotal-container,
  .cart-shipping-container {
    font-size: 15px;
  }

  .cart-button-container {
    height: 3.5rem;
    width: 80%;
    margin: 0 auto;
  }
`

export default function Cart() {
  const [total, setTotal] = useState(0)
  const [shipping, setShipping] = useState(0)

  const { setCartOpen, cart, setCart } = useContext(cartContext)
  const history = useHistory()

  const handleSearchProducts = () => {
    setCartOpen(false)
    history.push(ROUTES.SHOP)
  }

  const calculateShipping = () => {
    return (Math.round(shipping * 100) / 100).toFixed(2)
  }

  const calculateSubtotal = () => {
    return (Math.round(total * 100) / 100).toFixed(2)
  }

  const calculateTotal = () => {
    return (Math.round((total + shipping) * 100) / 100).toFixed(2)
  }

  useEffect(() => {
    const giveTotal = () => {
      let newTotal = 0

      cart.forEach((item) => {
        newTotal = newTotal + item.price * item.quantity
      })
      setTotal(newTotal)
    }
    giveTotal()
  }, [cart])

  useEffect(() => {
    const giveShipping = () => {
      console.log(total)
      if (total >= 250) return setShipping(0)

      let newShipping = 0

      cart.forEach((item) => {
        newShipping = newShipping + 10 * item.quantity
      })

      setShipping(newShipping)
    }

    giveShipping()
  }, [cart, total])

  const slideIn = {
    hidden: {
      x: '100vw',
    },
    visible: {
      x: '0',
      transition: {
        duration: 0.3,
        type: 'spring',
        damping: 50,
        stiffness: 500,
      },
    },
    exit: {
      x: '100vw',
    },
  }

  return (
    <Modal
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setCartOpen(false)}
    >
      <CartContainer
        variants={slideIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          onClick={() => setCartOpen(false)}
          className="close-cart-container"
        >
          <IoMdClose />
        </div>

        <div className="cart-title-container">
          <h1>Seu carrinho</h1>
        </div>

        <ul className="cart-list-container">
          {cart.length > 0 ? (
            cart.map((product) => (
              <CartItem key={product.id} product={product} />
            ))
          ) : (
            <p className="empty-cart">Seu carrinho est?? vazio!</p>
          )}
        </ul>

        {cart.length > 0 && (
          <>
            <div className="cart-subtotal-container">
              <h4>Subtotal: R$ {calculateSubtotal()}</h4>
            </div>

            <div className="cart-shipping-container">
              <h4>Frete: R$ {calculateShipping()}</h4>
            </div>

            <div className="cart-total-container">
              <h3>Total: R$ {calculateTotal()}</h3>
            </div>
          </>
        )}

        <div className="cart-button-container">
          {cart.length > 0 ? (
            <Button
              onClick={() => {
                setCartOpen(false)
                setCart([])
                history.push(ROUTES.HOME)
              }}
              type="white border-black"
            >
              CONTINUAR
            </Button>
          ) : (
            <Button onClick={handleSearchProducts} type="black">
              PROCURAR PRODUTOS
            </Button>
          )}
        </div>
      </CartContainer>
    </Modal>
  )
}
