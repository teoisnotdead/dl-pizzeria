export const Profile = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-4xl font-medium my-4'>¡Bienvenido a tu perfil!</h1>
        <div className='w-5/6 border-t-[0.1px] border-gray-300 my-5'></div>
        <div className='w-5/6'>
            <h2 className='text-2xl font-medium mb-3'>Datos personales</h2>
            <p className='text-lg'>
              <strong>Nombre: </strong>Alfredo Saavedra
            </p>
            <p className='text-lg'>
              <strong>Email: </strong>
              <a href='mailto:correo@correo.cl' className='text-blue-500'>
                correo@correo.cl
              </a>
            </p>
        </div>
      </div>
    </>
  )
}
