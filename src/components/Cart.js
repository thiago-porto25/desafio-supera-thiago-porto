import styled from 'styled-components'
import { cartContext } from '../context/cartContext'
import { useContext } from 'react'
import { motion } from 'framer-motion'

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
  width: 400px;
  position: absolute;
  right: 0;
  background-color: var(--light);
`

export default function Cart() {
  const { setCartOpen } = useContext(cartContext)

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
      ></CartContainer>
    </Modal>
  )
}
