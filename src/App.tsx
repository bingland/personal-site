import { useState, createContext } from 'react'
import { createUseStyles } from 'react-jss'

import Landing from './Landing'

interface ThemeContextInterface {
  isDarkTheme: boolean;
  setDarkTheme: (darkTheme: boolean) => void;
  toggleTheme: () => void;
  backgroundColor: string;
  buttonFontColor: string;
  fontColor: string;
  borderColor: string;
  themeColor: string;
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
    backgroundColor: 'lightgreen',
    buttonFontColor: '#ccc',
    fontColor: 'grey',
    borderColor: 'red',
    themeColor: '#0070ce'
  }

  const { fontColor } = ThemeValues

  const useStyles = createUseStyles({
    appContainer: {
      color: fontColor,
    },
  })
  const css = useStyles()

  return (
    <ThemeContext.Provider value={ThemeValues}>
      <div className={css.appContainer}>
        <Landing />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
