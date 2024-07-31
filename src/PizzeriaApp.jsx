import { Home } from './components/Home'
import { Navbar } from './components/Navbar'

export function PizzeriaApp() {
  return (
    <>
      <Navbar />
      <Home />
      <h1 className='text-3xl font-bold underline'>
        Hola! Bienvenido a la Pizzeria! 🍕
      </h1>
    </>
  )
}
