import { useCart } from '../context/CartProvider'
import { toLocalString } from '../utils/toLocalString'
import { NavLink } from 'react-router-dom'

export const CardPizza = ({ id, name, price, ingredients, image }) => {
  const { addPizza } = useCart()

  const handleAdd = () => {
    const pizza = { id, name, price, ingredients, img: image }
    console.log('CardPizza, handleAdd, id', pizza);
    addPizza({ id, name, price, ingredients, img: image })
  }

  return (
    <div className='bg-white shadow-md rounded-lg m-2 overflow-hidden duration-200 hover:scale-105 hover:shadow-xl'>
      <img
        src={image}
        alt={name}
        className='w-full h-56 object-cover object-center'
      />
      <h2 className='font-bold text-xl p-4 uppercase'>{name}</h2>
      <hr />
      <div className='flex flex-col items-center py-2'>
        <h3 className='font-light text-xl mb-4'>Ingredientes:</h3>
        <ul className='flex'>
          🍕
          {ingredients.map((ingredient, index) => (
            <li className='text-gray-900 text-sm mr-1' key={index}>
              {ingredient}
              {index < ingredients.length - 1 ? ',' : ''}
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <div className='flex flex-col items-center pt-2 pb-4'>
        <p className='text-gray-900 text-xl font-medium'>
          Precio: {toLocalString(price)}
        </p>
        <div className='flex justify-between w-full px-7'>
          <NavLink
            to={`/pizza/${id}`}
            className='bg-white text-gray-900 px-4 py-2 mt-2 border border-gray-900 rounded-md hover:bg-gray-900 hover:text-white'
          >
            Ver Más 👀
          </NavLink>
          <button className='bg-gray-900 text-white px-4 py-2 mt-2 rounded border hover:bg-white hover:text-gray-900 border-gray-900'
                  onClick={handleAdd}>
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  )
}
