import { Footer } from './components/Footer'
import { Home } from './components/Home'
import { Login } from './components/Login'
import { Navbar } from './components/Navbar'
import { Register } from './components/Register'

export function PizzeriaApp() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <Register />

      <Login />
      <Footer />
    </>
  )
}
