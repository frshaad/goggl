import { Footer } from '../components/Footer'
import { Search } from '../components/Search'

export const HomePage = () => {
  return (
    <div className='h-screen flex flex-col justify-between'>
      <Search />
      <Footer />
    </div>
  )
}
