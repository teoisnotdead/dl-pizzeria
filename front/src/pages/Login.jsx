import { Input } from '../components/Input'
import { useState } from 'react'
import { useUser } from '../context/UserProvider'
import { Spinner } from '../components/Spinner'

export const Login = () => {
  const { login, isLoading, hasError } = useUser()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    setEmailError(false)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
    setPasswordError(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email) setEmailError(true)
    if (!password) setPasswordError(true)

    await login(email, password)
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-4xl font-medium my-4'>¡Inicia sesión!</h1>
      <div className='w-5/6 border-t-[0.1px] border-gray-300 my-5'></div>
      <form className='flex flex-col w-5/6' onSubmit={handleSubmit}>
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
          type='submit'
          className='bg-cyan-500 text-white p-2 rounded-md my-2 hover:bg-cyan-600'
          disabled={isLoading}
        >
          {isLoading ? 'Cargando...' : 'Entrar'}
        </button>
      </form>

      {isLoading && <Spinner />}

      {hasError && (
        <p className='text-red-500 text-xl'>
          Error al iniciar sesión, intenta de nuevo.
        </p>
      )}
    </div>
  )
}
