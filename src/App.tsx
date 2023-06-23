import { useState, createContext } from 'react'
import { createTheming } from 'react-jss'

import ViewController from './ViewController'

interface ThemeContextInterface {
  isDarkTheme: boolean
  setDarkTheme: (darkTheme: boolean) => void
  toggleTheme: () => void
  setThemeColor: (color: string) => void
  backgroundColor: string
  boxShadow: string
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
  boxShadow: '',
  buttonFontColor: '',
  fontColor: '',
  borderColor: '',
  themeColor: '',
})

export const theming = createTheming(ThemeContext)
export const { ThemeProvider, useTheme } = theming

function App() {

  const [isDarkTheme, setDarkTheme] = useState(false)
  const [themeColor, setThemeColor] = useState('#0070ce')

  const toggleTheme = () => setDarkTheme(!isDarkTheme)

  const ThemeValues = {
    isDarkTheme,
    setDarkTheme,
    toggleTheme,
    setThemeColor,
    backgroundColor: 'rgba(255,255,255,0.6)',
    boxShadow: ' 5px 5px 16px -3px rgba(0,0,0,0.15)',
    buttonFontColor: '#fff',
    fontColor: '#000',
    borderColor: 'rgba(0,0,0,0.55)',
    themeColor,
  }

  return (
    <ThemeProvider theme={ThemeValues}>
      <ViewController />
    </ThemeProvider>
  )
}

export default App
