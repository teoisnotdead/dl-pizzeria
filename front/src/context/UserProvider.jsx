import { createContext, useState, useContext, useEffect } from 'react'
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

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) setToken(token)
  }, [])
 
  const authRequest = async (url, body) => {
    const headers = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }

    await getFetch(url, headers)
  }

  const setDataFromResponse = ({ email, token }) => {
    localStorage.setItem('token', token)
    setToken(token)
    setEmail(email)
  }

  const login = async (email, password) => {
    const url = `${baseUrl}/login`
    console.log(url);
    await authRequest(url, { email, password })

    console.log('data login', data?.token);
    console.log('email login', email);

    if(!hasError && data) setDataFromResponse({ email, token: data.token })
    
  }

  const register = async (email, password) => {
    const url = `${baseUrl}/register`

    await authRequest(url, { email, password })

    console.log('data reg', data.token);
    console.log('email reg', email);
    if(!hasError && data) setDataFromResponse(email, data.token)
  }

  const logout = () => {
    localStorage.removeItem('token')
    setToken(null)
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
