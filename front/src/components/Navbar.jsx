import { toLocalString } from "../utils/toLocalString"
import { NavLink } from "react-router-dom"

export const Navbar = () => {
  const total = 25000
  const token = false
  return (
    <>
      <nav className='bg-gray-800'>
        <div className='container px-2 py-3 mx-auto'>
          <div className='flex items-center w-full justify-between'>
            <div className='hidden w-full text-white md:flex md:items-center md:justify-between'>
              <div className='flex'>
                <NavLink to="/" className='text-base text-white py-2 mr-3' href='#'>
                  Pizzería Mamma Mía!
                </NavLink>
                <nav className='flex flex-wrap items-center justify-between text-white text-xs mr-5'>
                  <NavLink to="/"
                    className='text-white hover:text-gray-900 hover:bg-white border rounded px-2 py-1 border-white mr-2'
                    href='#'
                  >
                    🍕Home
                  </NavLink>

                  {token ? (
                    <>
                      <NavLink to="/profile"
                        className='text-white hover:text-gray-900 hover:bg-white border rounded px-2 py-1 border-white mr-2'
                        href='#'
                      >
                        😎Profile
                      </NavLink>
                      <NavLink to="/"
                        className='text-white hover:text-gray-900 hover:bg-white border rounded px-2 py-1 border-white mr-2'
                        href='#'
                      >
                        🔓Logout
                      </NavLink>
                    </>
                  ) : (
                    <>
                      <NavLink to="/login"
                        className='text-white hover:text-gray-900 hover:bg-white border rounded px-2 py-1 border-white mr-2'
                        href='#'
                      >
                        🔐Login
                      </NavLink>
                      <NavLink to="/register"
                        className='text-white hover:text-gray-900 hover:bg-white border rounded px-2 py-1 border-white mr-2'
                        href='#'
                      >
                        🔐Register
                      </NavLink>
                    </>
                  )}
                </nav>
              </div>
              <div className='flex items-center'>
                <NavLink to="/cart" className='text-cyan-500 mr-1 border rounded px-2 py-1 border-cyan-500 hover:bg-cyan-500 hover:text-white'>
                  🛒Total: {toLocalString(total)}
                </NavLink>
              </div>
            </div>
            <div className='w-full text-white md:hidden'>
              <button className='flex items-center p-2 hover:text-gray-300'>
                <svg
                  className='h-5 w-5'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16m-7 6h7'
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
