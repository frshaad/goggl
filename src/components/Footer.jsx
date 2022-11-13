import { Link } from 'react-router-dom'
export const Footer = () => {
  return (
    <div className='w-screen bg-gray-100 mx-auto  dark:bg-gray-600 px-5 py-5 justify-center align-middle shadow-gray-200 shadow-md text-center'>
      <p className='text-gray-700 dark:text-gray-200 text-3xl mb-2'>
        <Link to='/'>goggl</Link>
      </p>
      <p className='text-gray-600 dark:text-gray-300'>
        Made by{' '}
        <span className='font-bold'>
          <a
            href='https://github.com/frshaad/goggl'
            target='_blank'
            rel='noreferrer'
          >
            frshaad
          </a>
        </span>
      </p>
    </div>
  )
}
