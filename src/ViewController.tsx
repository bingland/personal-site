import { useState, useContext } from 'react'
import { createUseStyles } from 'react-jss'

import Header from './components/Header'
import Landing from './pages/Landing'
import Portfolio from './pages/Portfolio'
import { ThemeContext } from './App'

// export this in different file
type PageTypes = 'landing' | 'portfolio' | 'experience' | 'social'

function ViewController() {
  const theme = useContext(ThemeContext)

  const useStyles = createUseStyles({
    appContainer: {
      color: theme.fontColor,
      fontFamily: `'Inter', sans-serif`,
      fontWeight: 300,
      lineHeight: 1.25,
    },
  })
  const css = useStyles()

  const [currentPage, setCurrentPage] = useState<PageTypes>('landing')

  return (
    <div className={css.appContainer}>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === 'landing' && <Landing />}
      {currentPage === 'portfolio' && <Portfolio />}
    </div>
  )
}

export default ViewController
