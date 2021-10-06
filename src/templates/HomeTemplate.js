import styled from 'styled-components'
import { Button } from '../components'
import { Link } from 'react-router-dom'
import * as ROUTES from '../constants/routes'

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 4rem 2rem;

  h1,
  h3 {
    text-align: center;
    font-weight: bolder;
  }

  h1 {
    font-size: 45px;

    @media (max-width: 550px) {
      font-size: 35px;
    }
  }

  h3 {
    font-size: 34px;

    @media (max-width: 550px) {
      font-size: 25px;
    }
  }

  .button-container {
    height: 4rem;
    width: 15rem;

    @media (max-width: 550px) {
      margin-top: 2rem;
      height: 3rem;
      width: 12rem;
    }
  }
`

export default function HomeTemplate() {
  return (
    <Container>
      <h1>Encontre aqui os maiores Lançamentos!</h1>
      <h3>Somos a maior loja do Brasil</h3>
      <div className="button-container">
        <Link to={ROUTES.SHOP}>
          <Button type="white">COMPRAR AGORA</Button>
        </Link>
      </div>
    </Container>
  )
}
