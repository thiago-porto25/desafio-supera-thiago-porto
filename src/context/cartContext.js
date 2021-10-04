import { createContext, useState } from 'react'

export const cartContext = createContext(null)

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <cartContext.Provider value={{ cart, cartOpen, setCart, setCartOpen }}>
      {children}
    </cartContext.Provider>
  )
}
