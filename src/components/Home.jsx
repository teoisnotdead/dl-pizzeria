import { Header } from './Header'
import { CardPizza } from './CardPizza'

export const Home = () => {
  return (
    <>
      <Header />
      <main className='container mx-auto my-10 px-4'>
        <h2 className='text-2xl font-bold text-gray-800'>Nuestras pizzas</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5'>
          <CardPizza
            name='Napolitana'
            price={5950}
            ingredients='mozzarella, tomates, jamón, orégano'
            image='https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c'
          />
          <CardPizza
            name='Española'
            price={6950}
            ingredients='mozzarella, gorgonzola, parmesano, provolone'
            image='https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab'
          />
          <CardPizza
            name='Pepperoni'
            price={6950}
            ingredients='mozzarella, pepperoni, orégano'
            image='https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3'
          />
        </div>
      </main>
    </>
  )
}
