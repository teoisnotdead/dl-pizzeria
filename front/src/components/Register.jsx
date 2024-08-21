import { useState } from 'react'
import { Input } from './Input'

export const Register = () => {
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

  const handleRegister = (e) => {
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

    isValid && setIsDataValid(true)
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
        >
          Registrarme
        </button>
      </form>

      { isDataValid && (
        <div className='bg-green-100 border-l-4 border-green-500 text-green-700 p-4 w-5/6 my-4'>
          <p className='font-semibold'>¡Registro exitoso!</p>
          <p>¡Bienvenido a la mejor pizzería de la ciudad!</p>
        </div>
      )}
    </div>
  )
}
