
export const Spinner = () => {
  return (
    <div className='text-xl flex items-center justify-center h-32'>
      <img
        src='./spinner-solid.svg'
        alt='spinner'
        className='animate-spin w-10 h-10 inline-block text-gray-800'
      />
    </div>
  )
}
