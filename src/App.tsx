import { useState, createContext } from 'react'
import { createTheming } from 'react-jss'
import useWindowDimensions from './utilities/useWindowDimensions'

import ViewController from './ViewController'

interface ThemeContextInterface {
  isDarkTheme: boolean
  setDarkTheme: (darkTheme: boolean) => void
  toggleTheme: () => void
  setThemeColor: (color: string) => void
  animations: any // change to CSSProperties? 
  backgroundColor: string
  boxShadow: string
  buttonFontColor: string
  fontColor: string
  borderColor: string
  themeColor: string
  width: number
  height: number
}

export const ThemeContext = createContext<ThemeContextInterface>({
  isDarkTheme: false,
  setDarkTheme: () => {},
  toggleTheme: () => {},
  setThemeColor: () => {},
  animations: {},
  backgroundColor: '',
  boxShadow: '',
  buttonFontColor: '',
  fontColor: '',
  borderColor: '',
  themeColor: '',
  width: 0,
  height: 0
})

export const theming = createTheming(ThemeContext)
export const { ThemeProvider, useTheme } = theming

function App() {

  const [isDarkTheme, setDarkTheme] = useState(false)
  const [themeColor, setThemeColor] = useState('#0070ce')
  const { height, width } = useWindowDimensions()

  const toggleTheme = () => setDarkTheme(!isDarkTheme)

  const ThemeValues = {
    isDarkTheme,
    setDarkTheme,
    toggleTheme,
    setThemeColor,
    animations: { 
      fadeDown: {
        animation: '0.8s forwards fadeDown ease-out', opacity: 0,
      },
      fadeDownShort: {
        animation: '0.5s forwards fadeDownShort ease-out', opacity: 0,
      },
      fadeIn: {
        animation: '2s forwards fadeIn ease-out', opacity: 0,
      },
      fadeInFast: {
        animation: '0.3s forwards fadeIn ease-out', opacity: 0,
      }
    },
    backgroundColor: 'rgba(255,255,255,0.6)',
    boxShadow: ' 5px 5px 16px -3px rgba(0,0,0,0.15)',
    buttonFontColor: '#fff',
    // fontColor: '#1C1C1C',
    fontColor: '#000',
    borderColor: 'rgba(0,0,0,0.55)',
    themeColor,
    height,
    width,
  }

  return (
    <ThemeProvider theme={ThemeValues}>
      <ViewController />
    </ThemeProvider>
  )
}

export default App
