import { useState, useContext } from 'react'
import { createUseStyles } from 'react-jss'

import Header from './components/Header'
import Landing from './pages/Landing'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Background from './components/Background'
import Animations from './components/Animation'

import { ThemeContext } from './App'

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
      <Background currentPage={currentPage} />
      <Animations />
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === 'landing' && <Landing />}
      {currentPage === 'portfolio' && <Portfolio />}
      {currentPage === 'contact' && <Contact />}
    </div>
  )
}

export default ViewController
