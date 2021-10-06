import { useRef } from 'react'
import styled from 'styled-components'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const Container = styled.div`
  display: flex;

  input {
    width: 3rem;
    height: 34px;
    padding-left: 10px;
    border: 1px solid #aaaaaa;
    border-right: none !important;
    border-left: none !important;
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
    box-sizing: border-box;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }
  }

  button {
    font-size: 12px;
    color: #111111;
    width: 2rem;
    height: 34px;
    padding: 1%;
    outline: none;
    cursor: pointer;
    border: 1px solid #aaaaaa;

    &:hover {
      background-color: #cccccc;
    }

    &:disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  }
`

const Plus = styled.button`
  border-left: 1px solid #dddddd !important;
`

const Minus = styled.button`
  border-right: none !important;
`

export default function Quantity({ handleChange, quantity }) {
  const inputQuantity = useRef(null)
  return (
    <Container>
      <Minus
        onClick={() => {
          inputQuantity.current.value -= 1
          handleChange({ target: inputQuantity.current })
        }}
      >
        <AiOutlineMinus />
      </Minus>
      <input
        ref={inputQuantity}
        value={quantity}
        type="number"
        min="0"
        max="10"
        onChange={handleChange}
      />

      <Plus
        disabled={inputQuantity.current && inputQuantity.current.value >= 10}
        onClick={() => {
          if (inputQuantity.current.value >= 10) return
          inputQuantity.current.value -= -1
          handleChange({ target: inputQuantity.current })
        }}
      >
        <AiOutlinePlus />
      </Plus>
    </Container>
  )
}
