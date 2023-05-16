import { useContext } from 'react'
import { createUseStyles } from 'react-jss'
import { ThemeContext } from '../../App'
const classNames = require('classnames')

function Header() {
  const theme = useContext(ThemeContext)
  
  const useStyles = createUseStyles({
    headerContainer: {
      width: '100%',
      position: 'absolute',
      top: 0,
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
    }
    
  })
  const css = useStyles()

  return (
    <nav className={css.headerContainer}>
      <div className={css.divider}>
        <div className={classNames(css.flex, css.logoContainer)}>
          <div className={css.logoIcon} />
          <div className={css.logoText}>Brayden England</div>
        </div>
        <div className={classNames(css.flex, css.itemsContainer)}>
          <div className={css.item}>About</div>
          <div className={css.item}>Portfolio</div>
          <div className={css.item}>Skills</div>
          <div className={css.item}>Social</div>
        </div>
      </div>
    </nav>
  )
}

export default Header

