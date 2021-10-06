import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Filter, ShopItem } from '../components'
import data from '../data/products.json'

const Container = styled.main`
  display: grid;
  grid-template-columns: 3fr 9fr;
  min-height: calc(100vh - 7rem);

  @media (max-width: 950px) {
    display: flex;
    flex-direction: column;
  }

  .shop-items-list {
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 4rem;
    list-style-type: none;
    box-sizing: border-box;
    padding: 1rem 4rem 4rem 4rem;

    @media (max-width: 300px) {
      padding: 1rem 1rem 4rem 1rem;
    }

    a {
      text-decoration: none;
    }
  }
`

export default function ShopTemplate() {
  const [shopOrder, setShopOrder] = useState([])

  useEffect(() => {
    setShopOrder(data)
  }, [])

  return (
    <Container>
      <div className="filter-container">
        <Filter shopOrder={shopOrder} setShopOrder={setShopOrder} />
      </div>

      <ul className="shop-items-list">
        {shopOrder.map((item) => (
          <ShopItem key={item.id} item={item} />
        ))}
      </ul>
    </Container>
  )
}
