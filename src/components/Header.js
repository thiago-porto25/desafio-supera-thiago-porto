import { NavLink, Link } from 'react-router-dom'
import styled from 'styled-components'
import { AiOutlineShopping, AiFillShopping } from 'react-icons/ai'
import * as ROUTES from '../constants/routes'
import { useContext } from 'react'
import { cartContext } from '../context/cartContext'

const Nav = styled.nav`
  background-color: transparent;
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 3rem;

  @media (max-width: 750px) {
    flex-direction: column;
    justify-content: center;
    padding: 0 1rem;
  }

  a {
    color: inherit;
    text-decoration: none;

    &.selected {
      font-weight: bold;
    }
  }

  .logo-container {
    font-family: 'Comfortaa', sans-serif;
    font-weight: bolder;

    h1 {
      @media (max-width: 300px) {
        font-size: 25px;
      }
    }
  }

  .nav-list {
    height: 100%;
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 4rem;
    font-size: 23px;

    @media (max-width: 400px) {
      gap: 2rem;
      font-size: 18px;
    }

    .cart-button {
      cursor: pointer;

      * {
        font-size: 40px;

        @media (max-width: 400px) {
          font-size: 30px;
        }
      }
    }
  }
`

export default function Header() {
  const { cartOpen, setCartOpen } = useContext(cartContext)
  return (
    <Nav>
      <div className="logo-container">
        <Link to={ROUTES.HOME}>
          <h1>Loja dos Games</h1>
        </Link>
      </div>

      <ul className="nav-list">
        <li>
          <NavLink activeClassName="selected" exact to={ROUTES.HOME}>
            Início
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to={ROUTES.SHOP}>
            Comprar
          </NavLink>
        </li>
        <li
          className="cart-button"
          onClick={() => setCartOpen((prev) => !prev)}
        >
          {cartOpen ? <AiFillShopping /> : <AiOutlineShopping />}
        </li>
      </ul>
    </Nav>
  )
}
