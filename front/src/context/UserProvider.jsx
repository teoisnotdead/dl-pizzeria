import { createContext, useState, useContext } from 'react'
import { useFetch } from '../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [token , setToken] = useState(null)
  const [email, setEmail] = useState(null)
  const { data, isLoading, hasError, getFetch } = useFetch()

  const navigate = useNavigate()

  const baseUrl = 'http://localhost:5000/api/auth'
 
  const authRequest = async (url, body) => {
    const headers = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }

    await getFetch(url, headers)
  }

  const login = async (email, password) => {
    const url = `${baseUrl}/login`
    console.log(url);
    await authRequest(url, { email, password })

    if(!hasError && data) {
      setToken(data.token)
      setEmail(email)
    }
  }

  const register = async (email, password) => {
    const url = `${baseUrl}/register`

    await authRequest(url, { email, password })

    if(!hasError && data) {
      setToken(data.token)
      setEmail(email)
    }
  }

  const logout = () => {
    setToken(false)
    navigate('/login')

    toast.info('Cerraste sesión exitosamente', {
      position: 'top-center',
      theme: 'dark',
      progressClassName: 'Toastify__progress-bar--info-rainbow',
    })
  }

  return (
    <UserContext.Provider
      value={{ token, email, login, register, logout, isLoading, hasError }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)
