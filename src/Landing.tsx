import { useContext } from 'react'
import { createUseStyles } from 'react-jss'
import { ThemeContext } from './App'

function Landing() {
  const theme = useContext(ThemeContext)
  
  const useStyles = createUseStyles({
    themeTest: {
      color: theme.themeColor,
      fontSize: 20,
      fontWeight: 'bold',
    },
  })
  const css = useStyles()

  console.log('dark theme: ', theme && theme.isDarkTheme)  

  return (
    <div className={css.themeTest} onClick={theme.toggleTheme}>
      <div>Landing</div>
    </div>
  )
}

export default Landing

