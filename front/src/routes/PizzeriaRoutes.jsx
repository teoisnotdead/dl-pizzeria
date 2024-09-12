import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Register } from '../pages/Register'
import { Login } from '../pages/Login'
import { Cart } from '../pages/Cart'
import { Pizza } from '../pages/Pizza'
import { Profile } from '../pages/Profile'
import { NotFound } from '../components/NotFound'
import { useUser } from '../context/UserProvider'
import { AuthGuard } from '../guard/AuthGuard'

export const PizzeriaRoutes = () => {
  const { token } = useUser()
  console.log(token);

  return (
    <>
      <Routes>
        <Route path='/register' element={
          <AuthGuard hasToken={!token} redirect='/profile'>
            <Register />
          </AuthGuard>
        } />
        <Route path='/login' element={
          <AuthGuard hasToken={!token} redirect='/profile'>
            <Login />
          </AuthGuard>
        } />

        <Route path='/profile' element={
          <AuthGuard hasToken={token} redirect='/login'>
            <Profile />
          </AuthGuard>
        } />

        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/pizza/:id' element={<Pizza />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}
