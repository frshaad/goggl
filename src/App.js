import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './routes/HomePage'
import { ResultPage } from './routes/ResultPage'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/result' element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  )
}
