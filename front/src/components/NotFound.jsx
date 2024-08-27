import { NavLink } from 'react-router-dom'

export const NotFound = () => {
  return (
    <>
      <div className='flex flex-col items-center min-h-screen bg-gray-100 justify-center'>
        <img  className='w-80 h-auto rounded-lg' src='/notfound.jpg' alt='404' />
        <h1 className='text-3xl font-bold text-gray-800 mt-4'>404</h1>
        <p className='text-xl text-gray-600'>Ups! Página no encontrada</p>
        <NavLink to='/' className='mt-6 inline-block px-6 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md'> 
          Ir a la página principal
        </NavLink>
      </div>
    </>
  )
}
