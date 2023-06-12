import { useContext } from 'react'
import { createUseStyles } from 'react-jss'
import { ThemeContext } from '../../App'
import classNames from 'classnames'
// import { GithubIcon } from '../../utilities/icons'

type GalleryItem = {
  image: string
  description: string
}

interface GalleryProps {
  title: string
  subtitle?: string
  description: string
  galleryColor?: string
  gallery?: GalleryItem[]
  toggle: () => void
}

function Gallery ({title, subtitle, description, galleryColor = 'black', gallery, toggle, ...props}: GalleryProps) {
  const theme = useContext(ThemeContext)
  
  const useStyles = createUseStyles({
    galleryContainer: {
      height: '100vh',
      width: '100vw',
      zIndex: 100,
      position: 'fixed',
      top: 0,
      left: 0,
      padding: 55,
      background: 'rgba(0,0,0,0.3)',
      cursor: 'pointer',
      // add some sort of margin on both sides
    },
    galleryElements: {
      margin: '0 auto', 
      maxWidth: 1400,
      width: '100%',
      height: '100%',
      display: 'grid',
      gridTemplateColumns: '350px 1fr',
      gap: 25,
    },
    card: {
      position: 'relative',
      borderRadius: 20,
      border: `1px solid ${theme.borderColor}`,
      background: 'white',
      overflow: 'hidden',
      cursor: 'default',
    },
    infoSection: {
      padding: 20,
    },
    displaySection: {
      
    },
    infoTitle: {
      fontFamily: `'League Spartan', sans-serif`,
      fontSize: 26,
      fontWeight: 'bold',
      color: galleryColor,
    },
    infoSubtitle: {
      marginTop: 5,
      marginBottom: 10,
      fontSize: 14,
    },
    infoDescription: {
      fontSize: 18,
    },

    imageSelect: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 20,
      padding: 30,
      '@media (max-width: 1400px)': {
        gridTemplateColumns: 'repeat(3, 1fr)',
      }
    },
    imageItem: {
      height: 130,
      width: '100%',
      border: `1px solid ${theme.borderColor}`,
      borderRadius: 5,
      overflow: 'none',
      background: theme.backgroundColor,
      cursor: 'pointer',
      boxShadow: ' 5px 5px 16px -3px rgba(0,0,0,0.15)'
    },

    controls: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      height: 65,
      padding: '0 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTop: `1px solid ${theme.borderColor}`,
    },
    controlBtn: {
      // backgroundColor: galleryColor,
      width: 40,
      height: 40,
      border: `1px solid ${theme.borderColor}`,
      borderRadius: 40,
    }
  })
  const css = useStyles()

  return (
    <div className={css.galleryContainer} onClick={toggle}>
      <div className={css.galleryElements}>
        <div className={classNames(css.card, css.infoSection)} onClick={e => e.stopPropagation()}>
          <div className={css.infoTitle}>{title}</div>
          <div className={css.infoSubtitle}>{subtitle}</div>
          <div className={css.infoDescription}>{description}</div>
        </div>
        <div className={classNames(css.card, css.displaySection)} onClick={e => e.stopPropagation()}>
          <div className={css.imageSelect}>
            {gallery?.map((galleryItem, i) => 
              <div 
                className={css.imageItem} 
                key={'galleryItem'+i} 
                style={{ 
                  backgroundImage: `url(${galleryItem.image})`,
                  backgroundSize: 'cover',
                }} />
            )}
          </div>

          <div className={css.controls}>
            <div className={css.controlBtn}></div>
            <div className={css.controlBtn}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
