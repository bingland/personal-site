import { useContext } from 'react'
import { createUseStyles } from 'react-jss'
import { ThemeContext } from '../../App'
import classNames from 'classnames'

// export this in different file
type PageTypes = 'landing' | 'portfolio' | 'experience' | 'social'

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
      borderRadius: 40,
      width: 40,
      height: 40,
      backgroundColor: theme.themeColor,
    },
    logoText: {
      fontSize: 25,
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
    props.setCurrentPage(page)
  }

  return (
    <nav className={css.headerContainer}>
      <div className={css.divider}>
        <div onClick={() => clickItem('landing')} className={classNames(css.flex, css.logoContainer)}>
          <div className={css.logoIcon} />
          <div className={css.logoText}>Brayden England</div>
        </div>
        <div className={classNames(css.flex, css.itemsContainer)}>
          {/* turn this into function? */}
          <div onClick={() => clickItem('portfolio')} className={classNames(css.item, props.currentPage === 'landing' ? css.landingColor : css.pageColor)}>Portfolio</div>
          <div onClick={() => clickItem('experience')} className={classNames(css.item, props.currentPage === 'landing' ? css.landingColor : css.pageColor)}>Experience</div>
          <div onClick={() => clickItem('social')} className={classNames(css.item, props.currentPage === 'landing' ? css.landingColor : css.pageColor)}>Social</div>
        </div>
      </div>
    </nav>
  )
}

export default Header

