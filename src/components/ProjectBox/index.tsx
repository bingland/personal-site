import { CSSProperties, useContext } from 'react'
import { createUseStyles } from 'react-jss'
import { ThemeContext } from '../../App'
import Button from '../Button'

interface ProjectBoxProps {
  highlightColor?: string
  title: string
  desc: string
  boxWidth?: 1 | 2
  boxHeight?: 1 | 2
  gallery?: boolean
  showGallery?: boolean
  extraArea?: any
  style?: CSSProperties
  toggleGallery?: () => void
  site?: string
  about?: string
  repo?: string
}

function ProjectBox({ highlightColor, title, desc, boxWidth = 1, boxHeight = 1, about, gallery, showGallery, extraArea, style, toggleGallery, site, repo, ...props}: ProjectBoxProps) {
  const theme = useContext(ThemeContext)

  const width = theme.width > 800 ? boxWidth : 1
  const height = theme.width > 800 ? boxHeight : 1
  
  const useStyles = createUseStyles({
    projectBoxContainer: {
      position: 'relative',
      border: `1px solid ${theme.borderColor}`,
      borderRadius: 25,
      padding: 25,
      background: theme.backgroundColor,
      boxShadow: theme.boxShadow,
      '@media (max-width: 500px)': {
        height: 240,
        padding: 20,
        borderRadius: 20,
      }
    },

    title: {
      fontSize: 25,
      fontWeight: 'bold',
      fontFamily: `'League Spartan', sans-serif`, // heading
      '@media (max-width: 500px)': {
        fontSize: 23,
      }
    },
    desc: {
      fontSize: 17,
      fontWeight: 'lighter',
      maxWidth: 380,
      '@media (max-width: 1000px)': {
        fontSize: 16,
      },
      '@media (max-width: 500px)': {
        fontSize: 14,
      }
    },
    divider: {
      borderTop: `1px solid ${theme.borderColor}`,
      height: 1,
      margin: '7px 0 12px 0',
      maxWidth: 380,
    },
    linksArea: {
      position: 'absolute',
      bottom: 25,
      display: 'flex',
      gap: 15,
      '@media (max-width: 500px)': {
        bottom: 20,
      }
    },

    extraArea: {
      position: 'absolute',
      top: 25,
      right: 25,
      width: 275,
      height: 213,
      borderRadius: 10,
      background: theme.backgroundColor,
      border: `1px solid ${theme.borderColor}`,
      boxShadow: theme.boxShadow,
    },
    extraAreaRelative: {
      position: 'relative',
      width: 275,
      marginBottom: 25,
      height: 213,
      borderRadius: 10,
      background: theme.backgroundColor,
      border: `1px solid ${theme.borderColor}`,
      boxShadow: theme.boxShadow,
    }
  })
  const css = useStyles()

  const calcWidth = () => {
    if (width === 1) {
      return (theme.width > 500 ? 326 : 320)
    } else {
      return (theme.width > 500 ? 714 : 640) + 30 // include gap
    }
  }
  const calcHeight = () => {
    return (height * (theme.width > 800 ? 265 : theme.width > 500 ? 280 : 240)) + (height > 1 ? 30 : 0)
  }
  const calcBtnSize = () => {
    return theme.width > 500 ? 'md' : 'sm'
  }

  return (
    <div className={css.projectBoxContainer} style={{...style, width: calcWidth(), height: calcHeight()}}>
      {extraArea && (height > 1 || width > 1) && <div className={height > 1 ? css.extraAreaRelative : css.extraArea}>{extraArea}</div>}
      <div className={css.title}>{title}</div>
      <div className={css.divider} />
      <div className={css.desc}>{desc}</div>
      <div className={css.linksArea}>
        {gallery && <Button text={'View Gallery'} onClick={toggleGallery} color={highlightColor} icon={'gallery'} size={calcBtnSize()} />}
        {site && <Button text={'Visit Site'} color={highlightColor} href={site} icon={'viewsite'} size={calcBtnSize()} />}
        {about && <Button text={'More Info'} color={highlightColor} href={about} icon={'viewsite'} size={calcBtnSize()} />}
        {repo && <Button text={'View Repo'} color={highlightColor} href={repo} icon={'github'} size={calcBtnSize()} />}
      </div>
    </div>
  )
}

export default ProjectBox
