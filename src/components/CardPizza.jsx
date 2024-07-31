import { toLocalString } from '../utils/toLocalString'

export const CardPizza = ({ name, price, ingredients, image }) => {
  return (
    <div className='bg-white shadow-md rounded-lg overflow-hidden duration-200 hover:scale-105 hover:shadow-xl'>
      <img
        src={image}
        alt={name}
        className='w-full h-56 object-cover object-center'
      />
      <h2 className='font-bold text-xl p-4'>{name}</h2>
      <hr />
      <div className='flex flex-col items-center py-2'>
        <h3 className='font-light text-xl mb-4'>Ingredientes:</h3>
        <p className='text-gray-900 text-sm px-2'>🍕 {ingredients}</p>
      </div>
      <hr />
      <div className='flex flex-col items-center pt-2 pb-4'>
        <p className='text-gray-900 text-xl font-medium'>
          Precio: {toLocalString(price)}
        </p>
        <div className='flex justify-between w-full px-7'>
          <button className='bg-white text-gray-900 px-4 py-2 mt-2 border border-gray-900 rounded-md hover:bg-gray-900 hover:text-white'>
            Ver Más 👀
          </button>
          <button className='bg-gray-900 text-white px-4 py-2 mt-2 rounded-md hover:bg-white hover:text-gray-900 hover:border border-gray-900'>
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  )
}
