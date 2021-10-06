import styled from 'styled-components'
import { useContext } from 'react'
import { cartContext } from '../context/cartContext'

export default function CartItem({ product }) {
  const { setCart, cart } = useContext(cartContext)

  return <div></div>
}
