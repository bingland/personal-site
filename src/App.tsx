import { useState, createContext } from 'react'

import ViewController from './ViewController'

interface ThemeContextInterface {
  isDarkTheme: boolean
  setDarkTheme: (darkTheme: boolean) => void
  toggleTheme: () => void
  backgroundColor: string
  buttonFontColor: string
  fontColor: string
  borderColor: string
  themeColor: string
}

export const ThemeContext = createContext<ThemeContextInterface>({
  isDarkTheme: false,
  setDarkTheme: () => {},
  toggleTheme: () => {},
  backgroundColor: '',
  buttonFontColor: '',
  fontColor: '',
  borderColor: '',
  themeColor: '',
})

function App() {

  const [isDarkTheme, setDarkTheme] = useState(false)
  const toggleTheme = () => setDarkTheme(!isDarkTheme)

  const ThemeValues = {
    isDarkTheme,
    setDarkTheme,
    toggleTheme,
    backgroundColor: '#71B0DC',
    buttonFontColor: '#fff',
    fontColor: '#000',
    borderColor: '#000',
    themeColor: '#FCF68A'
  }

  return (
    <ThemeContext.Provider value={ThemeValues}>
      <ViewController />
    </ThemeContext.Provider>
  )
}

export default App
