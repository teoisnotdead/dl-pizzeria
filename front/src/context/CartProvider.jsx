import { createContext, useState, useContext, useEffect } from 'react'
import { pizzaCart } from '../mock/pizzas'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState(pizzaCart)
  const [total, setTotal] = useState(0)

  const calculateTotal = () => {
    const total = cart.reduce(
      (acc, pizza) => acc + pizza.price * pizza.count,
      0
    )
    setTotal(total)
  }

  useEffect(() => {
    if(!cart) return
    calculateTotal()
  }, [cart]);

  const addPizza = (pizza) => {
    const exist = cart.find((p) => p.id === pizza.id)
    if (exist) {
      setCart(
        cart.map((p) =>
          p.id === pizza.id ? { ...exist, count: exist.count + 1 } : p
        )
      )
    } else {
      setCart([...cart, { ...pizza, count: 1 }])
    }
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
    <CartContext.Provider value={{ cart, total, addPizza, incrementCount, decrementCount }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
