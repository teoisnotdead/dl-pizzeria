import { createContext, useState, useContext, useEffect } from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
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
    if(!cart) return
    calculateTotal()
  }, [cart])

  const addPizza = (pizza) => {
    console.log('addPizza, pizza', pizza)
    setCart((prevCart) => {
      const exist = prevCart.find((p) => p.id === pizza.id)
      console.log('addPizza, exist', exist);
      if (exist) {
        console.log('addPizza increment count');
        return prevCart.map((p) =>
          p.id === pizza.id ? { ...p, count: p.count + 1 } : p
        )
      } else {
        console.log('addPizza new pizza');
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
    <CartContext.Provider value={{ cart, total, addPizza, incrementCount, decrementCount }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
