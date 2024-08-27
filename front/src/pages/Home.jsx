import { Header } from '../components/Header'
import { pizzas } from '../mock/pizzas'
import { CardPizza } from '../components/CardPizza'
import { useFetch } from '../hooks/useFetch'
import { Spinner } from '../components/Spinner'

export const Home = () => {
  const { data, isLoading, hasError } = useFetch(
    'http://localhost:5000/api/pizzas'
  )

  return (
    <>
      <Header />
      <section className='container mx-auto my-10 px-4'>
        <h2 className='text-2xl font-bold text-gray-800'>Nuestras pizzas</h2>
        {isLoading && <Spinner />}

        {hasError && (
          <p className='text-xl text-red-500'>
            Error al cargar las pizzas, intenta de nuevo
          </p>
        )}

        {data && (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5'>
            {data.map(({ id, name, price, ingredients, img }) => (
              <CardPizza
                key={id}
                name={name}
                price={price}
                ingredients={ingredients}
                image={img}
              />
            ))}
          </div>
        )}
      </section>
    </>
  )
}
