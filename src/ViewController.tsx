import { useState, useContext, useEffect } from 'react'
import { createUseStyles } from 'react-jss'

import Header from './components/Header'
import Landing from './pages/Landing'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Background from './components/Background'
import Animations from './components/Animation'
import Loading from './pages/Loading'

import { ThemeContext } from './App'

function ViewController() {
  const theme = useContext(ThemeContext)

  const useStyles = createUseStyles({
    appContainer: {
      color: theme.fontColor,
      fontFamily: `'Open Sans', sans-serif`, // body
      fontWeight: 300,
      lineHeight: 1.25,
    },
  })
  const css = useStyles()

  const [currentPage, setCurrentPage] = useState<PageTypes>('loading')
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => { 
        setIsLoading(false) 
        setTimeout(() => setCurrentPage('landing'), 1000)
      }, 3000)
    } else {
      setCurrentPage('landing')
    }
  }, [])

  return (
    <div className={css.appContainer}>
      <Loading show={isLoading} />
      <Background currentPage={currentPage} />
      <Animations />
      {!isLoading && <>
        {currentPage !== 'loading' && <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />}
        {currentPage === 'landing' && <Landing />}
        {currentPage === 'portfolio' && <Portfolio />}
        {currentPage === 'contact' && <Contact />}
      </>}
    </div>
  )
}

export default ViewController
