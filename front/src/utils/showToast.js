import { toast } from 'react-toastify'

const toastTypes = {
  success: toast.success,
  error: toast.error,
  info: toast.info,
}

const progressClasses = {
  info: 'Toastify__progress-bar--info-rainbow',
  success: 'Toastify__progress-bar--success-rainbow',
  error: 'Toastify__progress-bar--error-rainbow',
}

export const showToast = (message, type = 'info') => {
  toastTypes[type](message, {
    position: 'top-center',
    theme: 'dark',
    progressClassName: progressClasses[type],
  })

  return
}