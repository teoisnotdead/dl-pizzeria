import { useEffect } from 'react'
import { useUser } from '../context/UserProvider'

export const Profile = () => {
  const { getUserData, email, logout } = useUser()

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-4xl font-medium my-4'>¡Bienvenido a tu perfil!</h1>
        <div className='w-5/6 border-t-[0.1px] border-gray-300 my-5'></div>
        <div className='w-5/6'>
          <h2 className='text-2xl font-medium mb-3'>Datos personales</h2>
          {/* <p className='text-lg'>
            <strong>Nombre: </strong>Alfredo Saavedra
          </p> */}
          <p className='text-lg'>
            <strong>Email: </strong>
            <a href={`mailto:${email}`} className='text-blue-500'>
              {email}
            </a>
          </p>
        </div>
        <div className='w-5/6 border-t-[0.1px] border-gray-300 my-5'></div>
        <button
          className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'
          onClick={logout}
        >
          Cerrar sesión
        </button>
      </div>
    </>
  )
}
