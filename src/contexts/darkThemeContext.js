import { createContext, useContext } from 'react'

const DarkThemeContext = createContext()
export const useDarkThemeContext = () => useContext(DarkThemeContext)
export const ProvideDarkThemeContext = ({ value, children }) => {
  return (
    <DarkThemeContext.Provider value={value}>
      {children}
    </DarkThemeContext.Provider>
  )
}
