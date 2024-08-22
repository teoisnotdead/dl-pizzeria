export const Pizza = () => {
  return (
    <>
      <div className='min-h-max m-auto w-1/2'>
        <div className='flex justify-center items-center mt-20'>
          <img
            src='https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-2000595_640_c.jpg?alt=media&token=61325b6e-a1e0-441e-b3b5-7335ba13e8be'
            alt='pizza'
            className='rounded-full w-1/3'
          />
          <div className='bg-white p-8'>
            <h2 className='text-2xl font-bold uppercase'>Pizza</h2>
            <p className='text-gray-500'>
              La pizza es una preparación culinaria que consiste en un pan
              plano, habitualmente de forma circular, elaborado con harina de
              trigo, levadura, agua y sal (a veces aceite de oliva) que
              comúnmente se cubre con salsa de tomate, queso y otros muchos
              ingredientes, y que se hornea a alta temperatura, tradicionalmente
              en un horno de leña.
            </p>
            <div className='mt-8'>
              <h4 className='text-xl font-bold'>Ingredientes:</h4>

              <ul className='list-none text-gray-500'>
                <li>Harina de trigo</li>
                <li>Levadura</li>
                <li>Agua</li>
                <li>Sal</li>
                <li>Aceite de oliva</li>
                <li>Salsa de tomate</li>
                <li>Queso</li>
                <li>Ingredientes adicionales</li>
              </ul>

              <p className='text-xl font-bold mt-8'>Precio: <span className='text-gray-500 font-normal'>$10.00</span></p>
              <button className='bg-gray-900 text-white px-4 py-2 mt-3 rounded border hover:bg-white hover:text-gray-900 border-gray-900'>
                Añadir 🛒
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
