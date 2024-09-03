import { createContext, useState, useContext, useEffect } from 'react'
import { pizzaCart } from '../mock/pizzas'
import { toast } from 'react-toastify'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
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
        toast.info(
          `Ahora llevas ${
            exist.count + 1
          } ${pizza.name.toUpperCase()} en tu carrito 😋`,
          {
            position: 'top-center',
            theme: 'dark',
            progressClassName: 'Toastify__progress-bar--info-rainbow',
          }
        )
        return prevCart.map((p) =>
          toLowerId(p.id) === toLowerId(pizza.id)
            ? { ...p, count: p.count + 1 }
            : p
        )
      } else {
        toast.success(`Añadiste ${pizza.name.toUpperCase()} a tu carrito 🍕`, {
          position: 'top-center',
          theme: 'dark',
          progressClassName: 'Toastify__progress-bar--success-rainbow',
        })
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
