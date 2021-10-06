import styled from 'styled-components'
import { cartContext } from './context/cartContext'
import { useContext } from 'react'
const Container = styled.section``

export default function Cart() {
  const { setCartOpen } = useContext(cartContext)

  return <Container></Container>
}
