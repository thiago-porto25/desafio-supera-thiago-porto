import { useRef } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  box-sizing: border-box;
  padding: 4rem 0 4rem 4rem;

  @media (max-width: 950px) {
    padding: 1.5rem 0rem 1.5rem 4rem;
  }

  .filter-title {
    font-size: 25px;
    font-weight: bold;
  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-top: 1rem;
      margin-bottom: 1rem;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`

export default function Filter({ shopOrder, setShopOrder }) {
  const priceRef = useRef(null)
  const scoreRef = useRef(null)
  const alphaRef = useRef(null)

  const order = (e, type) => {
    priceRef.current.style.fontWeight = 'normal'
    scoreRef.current.style.fontWeight = 'normal'
    alphaRef.current.style.fontWeight = 'normal'

    e.target.style.fontWeight = 'bold'

    if (type === 'price') {
      const sortedCart = shopOrder.sort((a, b) => a.price - b.price)
      setShopOrder([...sortedCart])
    }

    if (type === 'score') {
      const sortedCart = shopOrder.sort((a, b) => a.score - b.score)
      setShopOrder([...sortedCart.reverse()])
    }

    if (type === 'alpha') {
      const sortedCart = shopOrder.sort((a, b) => a.name.localeCompare(b.name))
      setShopOrder([...sortedCart])
    }
  }

  return (
    <Container>
      <p className="filter-title">Ordenar por:</p>

      <ul>
        <li ref={priceRef} onClick={(e) => order(e, 'price')}>
          Preço
        </li>
        <li ref={scoreRef} onClick={(e) => order(e, 'score')}>
          Popularidade
        </li>
        <li ref={alphaRef} onClick={(e) => order(e, 'alpha')}>
          Ordem alfabética
        </li>
      </ul>
    </Container>
  )
}
