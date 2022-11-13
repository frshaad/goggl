import { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { CiDark, CiLight } from 'react-icons/ci'
import { useDarkThemeContext } from '../contexts/darkThemeContext'

export const Search = () => {
  const searchBox = document.getElementById('searchBox')
  const [activeSearchBox, setActiveSearchBox] = useState(false)
  const { darkTheme, setDarkTheme } = useDarkThemeContext()

  return (
    <div className='w-screen bg-gray-100  mx-auto text-gray-700 dark:text-gray-200 dark:bg-gray-600 px-5 py-8 flex align-middle justify-center shadow-gray-200 dark:shadow-gray-800 shadow-md dark:shadow-lg'>
      <BiSearch
        className='text-3xl text-gray-600 dark:text-gray-200 self-center mr-4 relative right-3 cursor-pointer active:scale-95 transition duration-700 ease-in-out'
        onClick={() => {
          if (activeSearchBox) {
            searchBox.blur()
            setActiveSearchBox(false)
          } else {
            searchBox.focus()
            setActiveSearchBox(true)
          }
        }}
      />
      <input
        type='text'
        id='searchBox'
        className='w-96 relative text-lg dark:bg-gray-500 text-gray-700 dark:text-gray-200 py-3 px-6 right-3 md:right-0 shadow-md rounded-full border-none outline-none focus:outline-none focus:shadow-xl focus:scale-105 transition duration-300 ease-in-out'
        placeholder='Search'
      />
      <button
        onClick={() => setDarkTheme(!darkTheme)}
        className='absolute right-6 md:right-20 text-3xl text-gray-600 dark:text-gray-200 self-center ml-12 cursor-pointer active:scale-90 transition duration-700 ease-in-out active:rotate-180'
      >
        {darkTheme ? <CiLight /> : <CiDark />}
      </button>
    </div>
  )
}
