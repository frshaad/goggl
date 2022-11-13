import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProvideDarkThemeContext } from './contexts/darkThemeContext'
import { HomePage } from './routes/HomePage'
import { ResultPage } from './routes/ResultPage'

export const App = () => {
  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <ProvideDarkThemeContext value={{ darkTheme, setDarkTheme }}>
      <BrowserRouter>
        <div className={darkTheme ? 'dark bg-gray-700' : ''}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/result' element={<ResultPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ProvideDarkThemeContext>
  )
}
