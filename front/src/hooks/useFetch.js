import { useCallback, useEffect, useState } from 'react'

export const useFetch = (url) => {

  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null
  })

  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null
    })
  }

  const getFetch = useCallback(async () => {
      setLoadingState()
  
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000))
  
        const response = await fetch(url)
        const data = await response.json()
  
        setState({
          data: data,
          isLoading: false,
          hasError: false,
          error: null
        })
      } catch (error) {
        setState({
          data: null,
          isLoading: false,
          hasError: true,
          error: error.message
        })
      }
    }, [url]
  )

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
    getFetch,
  }
}
