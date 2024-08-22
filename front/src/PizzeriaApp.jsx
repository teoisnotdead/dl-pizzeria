import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import { Footer } from './components/Footer'
import { Login } from './components/Login'
import { Register } from './components/Register'
import { Cart } from './components/Cart'
import { Pizza } from './components/Pizza'

export function PizzeriaApp() {
  return (
    <>
      <Navbar />
      <main className='flex-grow'>
        {/* <Home />
        <Register />
        <Login /> 
        <Cart /> */}

        <Pizza />
      </main>
      <Footer />
    </>
  )
}
