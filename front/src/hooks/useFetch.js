import { useEffect, useState } from 'react'

export const useFetch = (url) => {

  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null
  })

  useEffect(() => {
    getFetch()
  }, [url])

  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null
    })
  }

  const getFetch = async () => {

    setLoadingState()
    const response = await fetch(url)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    if (!response.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: response.statusText
      })
      return
    }

    const data = await response.json()
    setState({
      data,
      isLoading: false,
      hasError: false,
      error: null
    })

  }

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  }
}
