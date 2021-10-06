import styled from 'styled-components'

const Container = styled.div`
  box-sizing: border-box;
  padding: 4rem 0 4rem 4rem;

  .filter-title {
    font-size: 25px;
    font-weight: bold;
  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
`

export default function Filter({ shopOrder, setShopOrder }) {
  const order = (type) => {
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
        <li>
          <input onChange={() => order('price')} type="radio" name="order" />
          Preço
        </li>
        <li>
          <input onChange={() => order('score')} type="radio" name="order" />
          Popularidade
        </li>
        <li>
          <input onChange={() => order('alpha')} type="radio" name="order" />
          Ordem alfabética
        </li>
      </ul>
    </Container>
  )
}
