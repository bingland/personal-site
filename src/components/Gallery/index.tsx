import { useContext } from 'react'
import { createUseStyles } from 'react-jss'
import { ThemeContext } from '../../App'
// import { GithubIcon } from '../../utilities/icons'
// import classNames from 'classnames'

interface GalleryProps {
  title: string
  subtitle: string
  description: string
  toggle: () => void
}

function Gallery ({title, subtitle, description, toggle, ...props}: GalleryProps) {
  const theme = useContext(ThemeContext)
  
  const useStyles = createUseStyles({
    galleryContainer: {
      height: '100vh',
      width: '100vw',
      display: 'grid',
      gridTemplateColumns: '350px 1fr',
      gap: 25,
      zIndex: 100,
      position: 'fixed',
      top: 0,
      left: 0,
      padding: 50,
      background: 'rgba(0,0,0,0.3)',
      cursor: 'pointer',
      // add some sort of margin on both sides
    },
    infoSection: {
      borderRadius: 20,
      border: `1px solid ${theme.borderColor}`,
      background: 'white',
      overflow: 'hidden',
      padding: 20,
      cursor: 'default',

    },
    displaySection: {
      borderRadius: 20,
      border: `1px solid ${theme.borderColor}`,
      background: 'white',
      overflow: 'hidden',
      cursor: 'default',

    }
  })
  const css = useStyles()

  return (
    <div className={css.galleryContainer} onClick={toggle}>
      <div className={css.infoSection} onClick={e => e.stopPropagation()}>
        <div>{title}</div>
        <div>{subtitle}</div>
        <div>{description}</div>
      </div>
      <div className={css.displaySection}>
        <div>Display Area</div>
      </div>
    </div>
  )
}

export default Gallery
