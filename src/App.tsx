import { useState, createContext } from 'react'

import ViewController from './ViewController'

interface ThemeContextInterface {
  isDarkTheme: boolean
  setDarkTheme: (darkTheme: boolean) => void
  toggleTheme: () => void
  setThemeColor: (color: string) => void
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
  setThemeColor: () => {},
  backgroundColor: '',
  buttonFontColor: '',
  fontColor: '',
  borderColor: '',
  themeColor: '',
})

function App() {

  const [isDarkTheme, setDarkTheme] = useState(false)
  const [themeColor, setThemeColor] = useState('#9491E9')

  const toggleTheme = () => setDarkTheme(!isDarkTheme)

  const ThemeValues = {
    isDarkTheme,
    setDarkTheme,
    toggleTheme,
    setThemeColor,
    backgroundColor: '#E9EFFF',
    buttonFontColor: '#fff',
    fontColor: '#000',
    borderColor: '#000',
    themeColor,
  }

  return (
    <ThemeContext.Provider value={ThemeValues}>
      <ViewController />
    </ThemeContext.Provider>
  )
}

export default App
