import { useState } from 'react'
import { Input } from '../components/Input'
import { useUser } from '../context/UserProvider'
import { Spinner } from '../components/Spinner'

export const Register = () => {
  const { register, isLoading, hasError } = useUser()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [confirmPasswordError, setConfirmPasswordError] = useState(false)

  const [isDataValid, setIsDataValid] = useState(false)

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/
    return re.test(email)
  }

  const validatePassword = (password) => {
    return password.length >= 6
  }

  const validateConfirmPassword = (password, confirmPassword) => {
    return password === confirmPassword
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    let isValid = true

    if (!validateEmail(email)) {
      setEmailError(true)
      isValid = false
    } else {
      setEmailError(false)
    }

    if (!validatePassword(password)) {
      setPasswordError(true)
      isValid = false
    } else {
      setPasswordError(false)
    }

    if (!validateConfirmPassword(password, confirmPassword)) {
      setConfirmPasswordError(true)
      isValid = false
    } else {
      setConfirmPasswordError(false)
    }

    if (isValid) {
      await register(email, password)
      setIsDataValid(true)
    }
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-4xl font-medium my-4'>¡Regístrate!</h1>
      <p className='text-sm font-semibold'>
        ¡Bienvenido a la mejor pizzería de la ciudad!
      </p>
      <div className='w-5/6 border-t-[0.1px] border-gray-300 my-5'></div>
      <form className='flex flex-col w-5/6'>
        <Input
          type='email'
          placeholder='Correo electrónico'
          message={email}
          onChange={(e) => setEmail(e.target.value)}
          errorMessage={emailError && 'Correo electrónico inválido'}
        />
        <Input
          type='password'
          placeholder='Contraseña'
          message={password}
          onChange={(e) => setPassword(e.target.value)}
          errorMessage={
            passwordError && 'La contraseña debe tener al menos 6 caracteres'
          }
        />
        <Input
          type='password'
          placeholder='Confirmar contraseña'
          message={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          errorMessage={confirmPasswordError && 'Las contraseñas no coinciden'}
        />
        <button
          onClick={handleRegister}
          className='bg-cyan-500 text-white p-2 rounded-md my-2 hover:bg-cyan-600'
          disabled={isLoading}
        >
          {isLoading ? 'Cargando...' : 'Registrarse'}
        </button>
      </form>

      {isLoading && <Spinner />}

      {hasError && (
        <p className='text-red-500 text-xl'>
          Error al registrarse, intenta de nuevo.
        </p>
      )}
    </div>
  )
}
