import { useContext } from 'react'
import { createUseStyles } from 'react-jss'
import { ThemeContext } from '../../App'
import classNames from 'classnames'

import { MainLogo } from '../../utilities/icons'

interface HeaderProps {
  currentPage: PageTypes
  setCurrentPage: (page: PageTypes) => void
}

function Header(props: HeaderProps) {
  const theme = useContext(ThemeContext)
  
  const useStyles = createUseStyles({
    headerContainer: {
      width: '100%',
      position: 'absolute',
      top: 0,
      zIndex: 5,
      fontFamily: `'League Spartan', sans-serif`,
    },
    divider: {
      margin: '0 auto',
      width: '100%',
      maxWidth: 1200,
      display: 'flex',
      justifyContent: 'space-between',
    },
    flex: {
      display: 'flex',
      alignItems: 'center',
      height: 80,
    },

    logoContainer: {
      color: theme.themeColor,
      fontWeight: 'bold',
      gap: 20,
      cursor: 'pointer',
    },
    logoIcon: {
      width: 40,
      height: 40,
    },
    logoText: {
      fontSize: 25,
      color: theme.themeColor,
    },

    itemsContainer: {
      gap: 50,
    },
    item: {
      fontSize: 20,
      cursor: 'pointer',
    },
    landingColor: {
      color: theme.buttonFontColor,
    },
    pageColor: {
      color: theme.fontColor,
    }
    
  })
  const css = useStyles()

  const clickItem = (page: PageTypes) => {
    if (page === props.currentPage) return
    // theme.setThemeColor('green')
    props.setCurrentPage(page)
  }

  return (
    <nav className={css.headerContainer}>
      <div className={css.divider}>
        <div onClick={() => clickItem('landing')} className={classNames(css.flex, css.logoContainer)}>
          <div className={css.logoIcon}>
            <MainLogo color={theme.themeColor} width={'100%'} height={'100%'} />
          </div>
          <div className={css.logoText}>Brayden England</div>
        </div>
        <div className={classNames(css.flex, css.itemsContainer)}>
          <div onClick={() => clickItem('portfolio')} className={classNames(css.item, css.pageColor)}>Portfolio</div>
          {/* will uncomment later */}
          {/* <div onClick={() => clickItem('experience')} className={classNames(css.item, css.pageColor)}>Experience</div> */}
          <div onClick={() => clickItem('contact')} className={classNames(css.item, css.pageColor)}>Contact</div>
        </div>
      </div>
    </nav>
  )
}

export default Header

