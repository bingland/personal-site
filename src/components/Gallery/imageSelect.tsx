import { useContext } from 'react'
import { createUseStyles } from 'react-jss'
import { ThemeContext } from '../../App'

interface GalleryImageSelectProps {
  gallery: any
  clickImage: (i: number) => void
}

function GalleryImageSelect({ gallery, clickImage }: GalleryImageSelectProps) {
  const theme = useContext(ThemeContext)
  const useStyles = createUseStyles({
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
  })
  const css = useStyles()
  
  return (
    <div className={css.imageSelect}>
      {gallery?.map((galleryItem: any, i: number) => 
        <div 
          className={css.imageItem} 
          key={'galleryItem'+i} 
          onClick={() => clickImage(i)}
          style={{ 
            backgroundImage: `url(${galleryItem.image})`,
            backgroundSize: 'cover',
          }} />
      )}
    </div>
  )
}

export default GalleryImageSelect
