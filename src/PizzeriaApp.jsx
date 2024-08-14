import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import { Footer } from './components/Footer'
import { Login } from './components/Login'
import { Register } from './components/Register'
import { Cart } from './components/Cart'

export function PizzeriaApp() {
  return (
    <>
      <Navbar />
       <Home />
      {/*<Register />
      <Login /> */}
      <Cart />
      <Footer />
    </>
  )
}
