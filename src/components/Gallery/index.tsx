import { useContext, useState } from 'react'
import { createUseStyles } from 'react-jss'
import { ThemeContext } from '../../App'
import classNames from 'classnames'
import { LeftChevron } from '../../utilities/icons'

import GalleryImageSelect from './imageSelect'
import GalleryImageViewer from './imageViewer'

type GalleryItem = {
  image: string
  description: string
}

interface GalleryProps {
  title: string
  subtitle?: string
  description: string
  moreInfo?: string
  galleryColor?: string
  coverPhoto?: string,
  gallery?: GalleryItem[]
  toggle: () => void
}

function Gallery ({title, subtitle, description, moreInfo, galleryColor = '#000', coverPhoto, gallery, toggle, ...props}: GalleryProps) {
  const theme = useContext(ThemeContext)
  const { width } = theme
  const slideWidth = width > 1530 ? 1025 : width > 1300 ? 800 : width > 1125 ? 1000 : 750
  
  const useStyles = createUseStyles({
    galleryContainer: {
      height: '100vh',
      width: '100vw',
      zIndex: 100,
      position: 'fixed',
      top: 0,
      left: 0,
      padding: 55,
      backgroundColor: `${galleryColor}33`, // 33 is 20% opacity in hex
      backdropFilter: 'blur(4px)',
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center',
      // TODO: this would be a nice effect
      // transition: '0.2s all ease-in-out',
      // '&:hover': {
      //   backgroundColor: `${galleryColor}1A`, // 1A is 10% opacity in hex
      //   backdropFilter: 'blur(2px)',
      // }
    },
    galleryElements: {
      margin: '0 auto',
      maxHeight: '100%',
      width: '100%',
      height: '100%',
      display: 'grid',
      justifyContent: 'center',
      gap: 25,
    },
    card: {
      position: 'relative',
      borderRadius: 20,
      border: `1px solid ${theme.borderColor}`,
      background: 'rgba(255,255,255,1)',
      overflow: 'hidden',
      cursor: 'default',
      boxShadow: ' 5px 5px 16px -3px rgba(0,0,0,0.20)',
      
    },
    infoSection: {
      padding: 20,
      height: '100%',
      maxHeight: 'calc(100vh - 110px)', // Account for container padding
      minHeight: 0, // Allow shrinking
      display: 'flex',
      flexDirection: 'column',
      '@media (max-width: 1300px)': {
        display: 'none',
      }
    },
    displaySection: {
      overflowY: 'auto',
      overflowX: 'hidden',
      height: '100%',
      maxHeight: 'calc(100vh - 112px)', // this is a little janky, maybe change
    },
    coverPhotoDiv: {
      width: '100%',
      height: 160,
      backgroundImage: `url(${coverPhoto})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: 15,
      marginBottom: 20,
      border: `1px solid ${theme.borderColor}`,
    },
    infoTitle: {
      fontFamily: `'League Spartan', sans-serif`, // heading
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
      flex: 1,
      overflowY: 'auto',
      minHeight: 0,
      marginBottom: 20,
    },
    infoContent: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0,
    },
    bottomButtons: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 15,
    },
    bottomButton: {
      color: theme.buttonFontColor,
      fontWeight: 'bold',
      fontFamily: `'Open Sans', sans-serif`, // body
      background: galleryColor,
      boxShadow: theme.boxShadow,
      border: `1px solid ${theme.borderColor}`,
      borderRadius: 50,
      padding: '10px 15px',
      fontSize: 16,
      width: '100%',
      textAlign: 'center',
      cursor: 'pointer',
      transition: 'opacity 0.2s ease-in-out',
      '&:hover': {
        opacity: 0.8,
      }
    },

    imageSelect: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 27,
      padding: 30,
      '@media (max-width: 1530px)': {
        gridTemplateColumns: 'repeat(3, 1fr)',
      },
      '@media (max-width: 1300px)': {
        gridTemplateColumns: 'repeat(4, 1fr)',
      },
      '@media (max-width: 1125px)': {
        gridTemplateColumns: 'repeat(3, 1fr)',
      }
    },
    backButtonContainer: {
      display: 'flex',
      alignItems: 'center',
      border: `1px solid ${theme.borderColor}`,
      borderRadius: 15,
      background: 'rgba(255,255,255,0.5)',
      boxShadow: theme.boxShadow,
      height: 28,
      padding: '5px 12px',
      paddingBottom: 7,
      position: 'absolute',
      top: 30,
      left: 30,
      fontSize: 13,
      gap: 8,
      opacity: 0.7,
      cursor: 'pointer',
    },
    backText: {

    },
    chevronContainer: {
      marginTop: 1,
    },

    imageViewer: {
      height: '100%',
      width: '100%',
      display: 'grid',
      placeItems: 'center',
      paddingBottom: 65,
    },
  })
  const css = useStyles()

  const [clickedImg, setClickedImg] = useState<number|null>(null)

  const clickImageItem = (i: number) => {
    setClickedImg(i)
  }
  const unselectImageItem = () => {
    setClickedImg(null)
  }
  const openMoreInfo = () => {
    moreInfo && window.open(moreInfo, '_blank')?.focus();
  }

  return (
    <div className={css.galleryContainer} onClick={toggle} style={{...theme.animations.fadeInFast}}>
      <div className={css.galleryElements} style={{ 
        gridTemplateColumns: width > 1300 ? `350px ${slideWidth}px` : `${slideWidth}px`, 
      }}>
        <div className={classNames(css.card, css.infoSection)} onClick={e => e.stopPropagation()}>
          <div className={css.infoContent}>
            <div className={css.coverPhotoDiv} />
            <div className={css.infoTitle}>{title}</div>
            <div className={css.infoSubtitle}>{subtitle}</div>
            <div className={classNames(css.infoDescription)}>{description}</div>
          </div>
          <div className={css.bottomButtons}>
            {moreInfo && <div className={css.bottomButton} onClick={openMoreInfo}>More Info</div>}
            <div className={css.bottomButton} onClick={toggle}>Close</div>
          </div>
        </div>
        <div className={classNames(css.card)} onClick={e => e.stopPropagation()}>
          <div className={css.displaySection}>
            {clickedImg == null ? 
              <GalleryImageSelect 
                gallery={gallery}
                clickImage={(i) => clickImageItem(i)} 
                />
              : 
              <GalleryImageViewer 
                gallery={gallery}
                galleryColor={galleryColor}
                clickedImg={clickedImg} 
                />}
            {clickedImg !== null && <div className={css.backButtonContainer} onClick={unselectImageItem}>
              <div className={css.chevronContainer}>
                <LeftChevron color={theme.fontColor} height={'9px'} width={'7px'} />
              </div>
              <div className={css.backText}>Back</div>
            </div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
