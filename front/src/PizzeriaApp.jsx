import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Footer } from './components/Footer'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Cart } from './pages/Cart'
import { Pizza } from './pages/Pizza'
import { PizzeriaRoutes } from './routes/PizzeriaRoutes'

export function PizzeriaApp() {
  return (
    <>
      <Navbar />
      <main className='flex-grow'>
        <PizzeriaRoutes />
      </main>
      <Footer />
    </>
  )
}
