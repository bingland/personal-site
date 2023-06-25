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
      '@media (max-width: 1300px)': {
        padding: '0 50px',
      },
      '@media (max-width: 575px)': {
        padding: '0 30px',
      }
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
      '@media (max-width: 430px)': {
        width: 37,
        height: 37,
      }
    },
    logoText: {
      fontSize: 25,
      color: theme.themeColor,
      '@media (max-width: 575px)': {
        display: 'none',
      }
    },

    itemsContainer: {
      gap: 50,
      '@media (max-width: 430px)': {
        gap: 30,
      }
    },
    item: {
      fontSize: 20,
      cursor: 'pointer',
      position: 'relative',
      '@media (max-width: 430px)': {
        fontSize: 18,
      }
    },
    landingColor: {
      color: theme.buttonFontColor,
    },
    pageColor: {
      color: theme.fontColor,
    },
    selected: {
      transition: 'opacity 0.2s ease-in-out',
      '&:hover': {
        opacity: 1,
      },
      '&:before': {
        content: '""',
        position: 'absolute',
        margin: '0 auto',
        width: 20,
        height: 1,
        bottom: -9,
        left: 0,
        right: 0,
        opacity: 1,
        backgroundColor: 'black',
        transition: 'all 0.25s ease-out 0s',
      },
    },
    unselected: {
      transition: 'opacity 0.2s ease-in-out',
      '&:hover': {
        opacity: 0.7,
      },
      '&:before': {
        content: '""',
        position: 'absolute',
        margin: '0 auto',
        width: 20,
        height: 1,
        bottom: -9,
        left: 0,
        right: 0,
        opacity: 0,
        backgroundColor: 'black',
        transition: 'all 0.25s ease-out 0s',
      },
    },
    
  })
  const css = useStyles()

  const clickItem = (page: PageTypes) => {
    if (page === props.currentPage) return
    // theme.setThemeColor('green')
    props.setCurrentPage(page)
  }
  const isSelected = (page: PageTypes) => {
    return page === props.currentPage
  }

  return (
    <nav className={css.headerContainer}>
      <div className={css.divider}>
        <div onClick={() => clickItem('landing')} style={{...theme.animations.fadeDown, animationDelay: '0.6s'}} className={classNames(css.flex, css.logoContainer)}>
          <div className={css.logoIcon}>
            <MainLogo color={theme.themeColor} width={'100%'} height={'100%'} />
          </div>
          <div className={css.logoText}>Brayden England</div>
        </div>
        <div className={classNames(css.flex, css.itemsContainer)}>
          <div onClick={() => clickItem('portfolio')} style={{...theme.animations.fadeDown, animationDelay: '0.8s'}} className={classNames(css.item, css.pageColor)}>
            <div className={classNames(isSelected('portfolio') ? css.selected : css.unselected)}>Portfolio</div>
          </div>
          {/* will uncomment later */}
          {/* <div onClick={() => clickItem('experience')} className={classNames(css.item, css.pageColor)}>Experience</div> */}
          <div onClick={() => clickItem('contact')} style={{...theme.animations.fadeDown, animationDelay: '1s'}} className={classNames(css.item, css.pageColor)}>
            <div className={classNames(isSelected('contact') ? css.selected : css.unselected)}>Contact</div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header

