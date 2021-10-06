import styled from 'styled-components'

const Btn = styled.button`
  width: 100%;
  height: 100%;
  font-weight: bold;
  transition: 150ms ease;
  cursor: pointer;
  font-size: 20px;

  &.white {
    color: var(--dark);
    background-color: var(--light);
    border: 1px solid var(--light);

    &:hover {
      color: var(--light);
      background-color: var(--dark);
      border: 1px solid var(--dark);
    }
  }
`

export default function Button({ children, type }) {
  return <Btn className={type}>{children}</Btn>
}
