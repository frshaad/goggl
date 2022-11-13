import { useState } from 'react'
import { BiSearch } from 'react-icons/bi'

export const Search = () => {
  const searchBox = document.getElementById('searchBox')
  const [activeSearchBox, setActiveSearchBox] = useState(false)

  return (
    <div className='w-screen bg-gray-100 mx-auto text-gray-700 dark:text-gray-200 dark:bg-gray-600 px-5 py-8 flex align-middle justify-center shadow-gray-200 shadow-md'>
      <BiSearch
        className='text-3xl text-gray-600 self-center mr-4 cursor-pointer active:scale-95 transition-all'
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
        className='w-96 relative text-lg text-gray-800 py-3 px-6 shadow-md rounded-full border-none outline-none focus:outline-none focus:shadow-xl focus:scale-105 transition-all'
        placeholder='Search'
      />
    </div>
  )
}
