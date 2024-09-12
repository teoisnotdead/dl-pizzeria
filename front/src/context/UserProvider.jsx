import { createContext, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [token , setToken] = useState(true)
  const navigate = useNavigate()

  const logout = () => {
    navigate('/login')
    setToken(false)

    toast.info('Cerraste sesión exitosamente', {
      position: 'top-center',
      theme: 'dark',
      progressClassName: 'Toastify__progress-bar--info-rainbow',
    })
  }

  return (
    <UserContext.Provider
      value={{ token, logout }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)
