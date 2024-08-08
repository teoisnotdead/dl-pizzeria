import { Input } from './Input'
import { useState } from 'react'

export const Login = () => {

  const userData = {
    email: 'alfredo@dominio.cl',
    password: '123456'
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    setEmailError(false)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
    setPasswordError(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    let isValid = true

    if (email !== userData.email) {
      setEmailError(true)
      isValid = false
    }

    if (password !== userData.password) {
      setPasswordError(true)
      isValid = false
    }

    isValid && setIsAuthenticated(true)
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-4xl font-medium my-4'>¡Inicia sesión!</h1>
      <div className='w-5/6 border-t-[0.1px] border-gray-300 my-5'></div>
      <form className='flex flex-col w-5/6'>
        <Input
          type='email'
          placeholder='Email'
          value={email}
          onChange={handleEmailChange}
          errorMessage={emailError && 'Email inválido'}
        />
        <Input
          type='password'
          placeholder='Password'
          value={password}
          onChange={handlePasswordChange}
          errorMessage={passwordError && 'Contraseña inválida'}
        />
        <button
          onClick={handleSubmit}
          className='bg-cyan-500 text-white p-2 rounded-md my-2 hover:bg-cyan-600'
        >
          Entrar
        </button>
      </form>

      {isAuthenticated && (
       <div className='bg-green-100 border-l-4 border-green-500 text-green-700 p-4 w-5/6 my-4'>
       <p className='font-semibold'>¡Bienvenido de vuelta!</p>
     </div>
      )}
    </div>
  )
}
