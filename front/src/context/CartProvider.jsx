import { createContext, useState, useContext, useEffect } from 'react'
import { showToast } from '../utils/showToast'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  const calculateTotal = () => {
    const total = cart.reduce(
      (acc, pizza) => acc + pizza.price * pizza.count,
      0
    )
    setTotal(total)
  }

  useEffect(() => {
    if (!cart) return
    calculateTotal()
  }, [cart])

  const addPizza = (pizza) => {
    const toLowerId = (id) => id.toLowerCase()
    setCart((prevCart) => {
      const exist = prevCart.find(
        (p) => toLowerId(p.id) === toLowerId(pizza.id)
      )
      if (exist) {
        showToast(
          `Ahora llevas ${
            exist.count + 1
          } ${pizza.name.toUpperCase()} en tu carrito 😋`,
          'info'
        )

        return prevCart.map((p) =>
          toLowerId(p.id) === toLowerId(pizza.id)
            ? { ...p, count: p.count + 1 }
            : p
        )
      } else {
        showToast(
          `Añadiste ${pizza.name.toUpperCase()} a tu carrito 🍕`,
          'success'
        )

        return [...prevCart, { ...pizza, count: 1 }]
      }
    })
  }

  const incrementCount = (id) => {
    setCart(
      cart.map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
      )
    )
  }

  const decrementCount = (id) => {
    setCart(
      cart
        .map((pizza) =>
          pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
        )
        .filter((pizza) => pizza.count > 0)
    )
  }

  return (
    <CartContext.Provider
      value={{ cart, total, addPizza, incrementCount, decrementCount }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
