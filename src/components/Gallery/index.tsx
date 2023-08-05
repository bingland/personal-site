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

function Gallery ({title, subtitle, description, moreInfo, galleryColor = 'black', coverPhoto, gallery, toggle, ...props}: GalleryProps) {
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
      background: 'rgba(0,0,0,0.5)',
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center',
      // transition: '0.2s background ease-in-out',
      // '&:hover': {
      //   background: 'rgba(0,0,0,0.3)',
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
      background: 'rgba(255,255,255,0.94)',
      overflow: 'hidden',
      cursor: 'default',
      boxShadow: ' 5px 5px 16px -3px rgba(0,0,0,0.20)',
      
    },
    infoSection: {
      padding: 20,
      height: '100%',
      maxHeight: '100%',
      overflowY: 'auto',
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
      borderRadius: 15,
      marginBottom: 20,
      border: `1px solid ${theme.borderColor}`,
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
    bottomButtons: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      padding: 20,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20,
    },
    bottomButton: {
      color: theme.buttonFontColor,
      fontWeight: 'bold',
      fontFamily: `'Inter', sans-serif`,
      background: theme.themeColor,
      boxShadow: theme.boxShadow,
      border: `1px solid ${theme.borderColor}`,
      borderRadius: 50,
      marginTop: 10,
      padding: '10px 15px',
      fontSize: 16,
      width: '100%',
      textAlign: 'center',
      cursor: 'pointer',
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
    imageItem: {
      height: 130,
      width: '100%',
      border: `1px solid ${theme.borderColor}`,
      borderRadius: 5,
      overflow: 'none',
      background: theme.backgroundColor,
      cursor: 'pointer',
      boxShadow: ' 5px 5px 16px -3px rgba(0,0,0,0.15)',
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        transform: 'scale(1.04)',
      }
    },

    controls: {
      display: 'flex',
      position: 'absolute',
      bottom: 50,
      right: 0,
      left: 0,
      margin: '0 auto',
      width: 300,
      padding: '10px',
      justifyContent: 'space-between',
      alignItems: 'center',
      border: `1px solid ${theme.borderColor}`,
      borderRadius: 50,
      background: 'rgba(255,255,255,0.5)',
      boxShadow: theme.boxShadow,
      userSelect: 'none',
    },
    controlBtn: {
      backgroundColor: galleryColor,
      width: 25,
      height: 25,
      border: `1px solid ${theme.borderColor}`,
      borderRadius: 40,
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center',
    },
    controlBtnDisabled: {
      opacity: 0.5,

    },
    backButton: {
      display: 'flex',
      alignItems: 'center',
      border: `1px solid ${theme.borderColor}`,
      borderRadius: 15,
      background: 'rgba(255,255,255,0.5)',
      boxShadow: theme.boxShadow,
      padding: '5px 10px',
      position: 'absolute',
      top: 30,
      left: 30,
      fontSize: 13,
      gap: 8,
      opacity: 0.7,
      cursor: 'pointer',
    },

    imageViewerContainer: {
      background: 'linear-gradient(31deg, rgba(198,229,255,1) 0%, rgba(235,246,255,1) 100%)',
      height: '100%',
      width: '100%',
      // display: 'grid',
      // placeItems: 'center',
    },
    imageViewer: {
      height: '100%',
      width: '100%',
      display: 'grid',
      placeItems: 'center',
      paddingBottom: 65,
    },
    imageViewerContent: {
      display: 'grid', 
      placeItems: 'center',
      alignContent: 'center',
      height: '100%',
      paddingBottom: 15, // ! remove this if the descriptions are put back
    },
    fullImage: {
      maxWidth: 600,
      maxHeight: 600,
      minWidth: 250,
      minHeight: 250,
      margin: '0 auto',
      width: 'auto',
      height: 'auto'
    },
    fullImageElement: {
      width: '100%',
      maxWidth: '100%',
      maxHeight: '100%',
      // height: '100%',
      borderRadius: 5,
      // border: `1px solid ${theme.borderColor}`,
      boxShadow: ' 5px 5px 16px -3px rgba(0,0,0,0.15)'
    },
    imageDescription: {
      textAlign: 'center',
      marginTop: 15,
    }
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
          <div className={css.coverPhotoDiv} />
          <div className={css.infoTitle}>{title}</div>
          <div className={css.infoSubtitle}>{subtitle}</div>
          <div className={css.infoDescription}>{description}</div>
          <div className={css.bottomButtons}>
            <div className={css.bottomButton} onClick={openMoreInfo}>More Info</div>
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
            {clickedImg !== null && <div className={css.backButton} onClick={unselectImageItem}>
              <LeftChevron color={theme.fontColor} height={'9px'} width={'7px'} />
              <div>Back</div>
            </div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
