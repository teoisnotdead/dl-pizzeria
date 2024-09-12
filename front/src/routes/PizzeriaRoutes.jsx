import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Register } from '../pages/Register'
import { Login } from '../pages/Login'
import { Cart } from '../pages/Cart'
import { Pizza } from '../pages/Pizza'
import { Profile } from '../pages/Profile'
import { NotFound } from '../components/NotFound'

export const PizzeriaRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/pizza/:id' element={<Pizza />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}
