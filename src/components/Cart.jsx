import { pizzaCart } from '../mock/pizzas'
import { useState } from 'react'
import { toLocalString } from '../utils/toLocalString'

export const Cart = () => {

  const [cart, setCart] = useState(pizzaCart)

  return (
    <div className='container mx-auto my-10 px-4'>
      <h2 className='text-2xl font-bold text-gray-800'>Carrito de compras</h2>
      <div className='grid grid-cols-1 gap-4 mt-5 h-full'>
        {cart.map((pizza) => (
          <div
            key={pizza.id}
            className='bg-gray-100 flex items-center justify-between p-4 rounded shadow-md'
          >
            <div className='flex items-center'>
              <img
                src={pizza.img}
                alt={pizza.name}
                className='w-24 h-24 object-cover rounded'
              />
              <div className='p-4 flex flex-col justify-between'>
                <h2 className='font-bold text-gray-800 text-xl uppercase'>
                  {pizza.name}
                </h2>
                <p className='text-gray-600 text-sm'>
                  <strong>Código:</strong> {pizza.id}
                </p>
                <div className='flex justify-between items-center mt-3'>
                  <span className='text-cyan-500 border-2 border-cyan-500 px-2 py-1 rounded-full font-bold'>
                    {toLocalString(pizza.price)}
                  </span>
                </div>
              </div>
            </div>

            <div className='flex items-center'>
              <button className='text-cyan-500 border-2 border-cyan-500 w-10 h-10 rounded-full font-bold hover:bg-cyan-500 hover:text-white cursor-pointer'>
                -
              </button>
              <span className='mx-4 font-bold text-cyan-500'>1</span>
              <button className='text-cyan-500 border-2 border-cyan-500 w-10 h-10 rounded-full font-bold hover:bg-cyan-500 hover:text-white cursor-pointer'>
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className='flex flex-col items-end mt-5 p-4'>
        <h3 className='font-bold text-gray-800 text-xl uppercase'>
          Total:{' '}
          {toLocalString(
            cart.reduce((acc, pizza) => acc + pizza.price, 0)
          )}
        </h3>
        <button className='bg-cyan-500 text-white px-4 py-2 rounded mt-4 font-bold hover:bg-cyan-600'>
          Pagar
        </button>
      </div>
    </div>
  )
}
