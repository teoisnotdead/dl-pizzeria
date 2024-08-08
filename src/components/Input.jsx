export const Input = ({ type, placeholder, errorMessage, onChange }) => {
  return (
    <div className='flex flex-col my-2'>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className='p-2 my-2 border border-gray-300 rounded-md'
      />
      {errorMessage && (
        <span className='text-red-500 text-sm'>{errorMessage}</span>
      )}
    </div>
  )
}
