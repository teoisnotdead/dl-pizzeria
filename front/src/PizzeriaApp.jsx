import { PizzeriaRoutes } from './routes/PizzeriaRoutes'
import { CartProvider } from './context/CartProvider'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function PizzeriaApp() {
  return (
    <CartProvider>
      <Navbar />
      <main className='flex-grow'>
        <PizzeriaRoutes />
      </main>
      <Footer />
      <ToastContainer />
    </CartProvider>
  )
}
