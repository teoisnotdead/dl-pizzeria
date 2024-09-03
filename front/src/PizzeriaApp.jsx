import { PizzeriaRoutes } from './routes/PizzeriaRoutes'
import { CartProvider } from './context/CartProvider'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

export function PizzeriaApp() {
  return (
    <CartProvider>
      <Navbar />
      <main className='flex-grow'>
        <PizzeriaRoutes />
      </main>
      <Footer />
    </CartProvider>
  )
}
