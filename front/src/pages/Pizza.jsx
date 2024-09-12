import { useFetch } from '../hooks/useFetch'
import { useParams } from 'react-router-dom'
import { Spinner } from '../components/Spinner'
import { toLocalString } from '../utils/toLocalString'
import { NavLink } from 'react-router-dom'

export const Pizza = () => {
  const { id } = useParams()
  const { data, isLoading, hasError } = useFetch(
    `http://localhost:5000/api/pizzas/${id}`
  )
  console.log('Pizza, id', id);
  console.log('Pizza, data', data);
  return (
    <>
      <div className='min-h-max m-auto w-3/4 p-4'>
        <NavLink
          to='/'
          className='text-blue-500 text-xl font-semibold hover:text-blue-700 flex items-center'
        >
          <img
            src='/arrow-left-solid.svg'
            alt='volver'
            className='text-blue-500 w-6 h-6 inline-block mr-2'
          />
          Volver
        </NavLink>

        {isLoading && <Spinner />}

        {hasError && (
          <p className='text-xl text-red-500 flex justify-center mt-2'>
            Error al cargar la pizza, intenta de nuevo
          </p>
        )}

        {data && (
          <div className='flex justify-center items-center mt-20'>
            <img
              src={data.img}
              alt={data.name}
              className='rounded-full w-1/2'
            />
            <div className='bg-white p-8'>
              <h2 className='text-2xl font-bold uppercase'>{data.name}</h2>
              <p className='text-gray-500'>{data.desc}</p>
              <div className='mt-8'>
                <h4 className='text-xl font-bold'>Ingredientes:</h4>
                <ul className='list-none text-gray-500'>
                  {data?.ingredients.map((ingredient, index) => (
                    <li className='capitalize' key={index}>
                      🍕 {ingredient}
                    </li>
                  ))}
                </ul>
                <p className='text-xl font-bold mt-8'>
                  Precio:{' '}
                  <span className='text-gray-500 font-normal'>
                    {toLocalString(data.price)}
                  </span>
                </p>
                <button className='bg-gray-900 text-white px-4 py-2 mt-3 rounded border hover:bg-white hover:text-gray-900 border-gray-900'>
                  Añadir 🛒
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
