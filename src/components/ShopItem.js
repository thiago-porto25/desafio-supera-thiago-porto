import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { RiHeartsLine } from 'react-icons/ri'

const Container = styled.li`
  background-color: white;
  color: var(--dark);
  cursor: pointer;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  box-shadow: 0px 0px 5px #00000022;
  height: 100%;
  transition: 200ms ease-in-out;

  &:hover {
    box-shadow: 0px 0px 5px #00000088;
  }

  .item-image {
    padding: 2rem;
    box-sizing: border-box;
  }

  p {
    box-sizing: border-box;
    padding: 0.5rem 1rem;
    margin: 0;
  }

  .item-title {
    font-weight: bold;
    font-size: 20px;
  }

  .item-score {
    color: #555;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: red;
      font-size: 20px;
    }
  }

  .item-price {
    margin-bottom: 1rem;
    font-size: 18px;
  }
`

export default function ShopItem({ item }) {
  return (
    <Link to={`product/${item.id}`}>
      <Container>
        <img
          className="item-image"
          src={`/images/assets/${item.image}`}
          alt={item.name}
        />
        <p className="item-title">{item.name}</p>
        <p className="item-score">
          <RiHeartsLine /> {item.score}
        </p>
        <p className="item-price">
          R${(Math.round(item.price * 100) / 100).toFixed(2)}
        </p>
      </Container>
    </Link>
  )
}
