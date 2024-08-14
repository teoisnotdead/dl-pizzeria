import { Header } from './Header'
import { pizzas } from '../mock/pizzas'
import { CardPizza } from './CardPizza'

export const Home = () => {
  return (
    <>
      <Header />
      <main className='container mx-auto my-10 px-4'>
        <h2 className='text-2xl font-bold text-gray-800'>Nuestras pizzas</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5'>
          {pizzas.map(({ id, name, price, ingredients, img }) => (
            <CardPizza
              key={id}
              name={name}
              price={price}
              ingredients={ingredients}
              image={img}
            />
          ))}
        </div>
      </main>
    </>
  )
}
