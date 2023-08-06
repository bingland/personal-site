import { useContext, useState } from 'react'
import { createUseStyles } from 'react-jss'
import { ThemeContext } from '../../App'
import Carousel from 'nuka-carousel'
import { LeftChevron, RightChevron } from '../../utilities/icons'
import classNames from 'classnames'

interface GalleryImageViewerProps {
  gallery: any
  galleryColor?: string
  clickedImg: number
}

function GalleryImageViewer({ gallery, galleryColor = 'black', clickedImg }: GalleryImageViewerProps) {
  const theme = useContext(ThemeContext)
  const { width } = theme
  const slideWidth = width > 1530 ? 1025 : width > 1300 ? 800 : width > 1125 ? 1000 : 750

  const useStyles = createUseStyles({
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
  })
  const css = useStyles()

  const [currImgIndex, setImgIndex] = useState<number|null>(clickedImg)

  const goBackOne = () => {
    if (currImgIndex == null || currImgIndex === 0) return
    setImgIndex(currImgIndex - 1)
  }
  const goForwardOne = () => {
    if (currImgIndex == null || (gallery != null && gallery.length - 1) === currImgIndex) return
    setImgIndex(currImgIndex + 1)
  }
  const isFirstSlide = () => {
    return currImgIndex === 0
  }
  const isLastSlide = () => {
    return currImgIndex === (gallery && gallery.length - 1)
  }

  return (
    currImgIndex == null ? <div>sdf</div> : <div className={css.imageViewerContainer}>
      <div className={css.imageViewer} style={{...theme.animations.fadeInFast, animationDelay: '0.1s'}}>
        <Carousel 
          dragging={false} 
          speed={1000}
          wrapAround={true}
          slideWidth={slideWidth - 4}
          slideIndex={currImgIndex}
          withoutControls={true}
          enableKeyboardControls={false} 
          >
          {gallery?.map((galleryItem: any, i:number) => 
            <div className={css.imageViewerContent} id={'fullImageViewerCarousel'} key={'fullViewer'+i}>
              <div className={css.fullImage}>
                <img className={css.fullImageElement} src={galleryItem.image} alt={galleryItem.description} loading={'lazy'} />
              </div>
              {/* <div className={css.imageDescription}>{galleryItem.description}</div> */}
            </div>)}
        </Carousel>
        <div className={css.controls}>
          <div className={classNames(css.controlBtn, isFirstSlide() && css.controlBtnDisabled)} onClick={goBackOne}>
            <LeftChevron color={theme.buttonFontColor} />
          </div>
          <div>Image {currImgIndex + 1}/{gallery?.length}</div>
          <div className={classNames(css.controlBtn, isLastSlide() && css.controlBtnDisabled)} onClick={goForwardOne}>
            <RightChevron color={theme.buttonFontColor} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GalleryImageViewer
