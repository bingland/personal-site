import { CSSProperties, useContext } from 'react'
import { createUseStyles } from 'react-jss'
import { ThemeContext } from '../../App'
import Button from '../Button'
// import classNames from 'classnames'

interface ProjectBoxProps {
  highlightColor?: string
  title: string
  desc: string
  size?: 1 | 2
  gallery?: boolean
  showGallery?: boolean
  extraArea?: any
  style?: CSSProperties
  toggleGallery?: () => void
  site?: string
  about?: string
  repo?: string
}

function ProjectBox({ highlightColor, title, desc, size = 1, about, gallery, showGallery, extraArea, style, toggleGallery, site, repo, ...props}: ProjectBoxProps) {
  const theme = useContext(ThemeContext)
  
  const useStyles = createUseStyles({
    projectBoxContainer: {
      position: 'relative',
      border: `1px solid ${theme.borderColor}`,
      width: (size * 380) + (size > 1 ? 30 : 0),
      height: 260,
      borderRadius: 25,
      padding: 25,
      background: theme.backgroundColor,
      // boxShadow: `0px 9px ${highlightColor || theme.themeColor}`,
      boxShadow: theme.boxShadow,
    },

    title: {
      fontSize: 25,
      fontWeight: 'bold',
      fontFamily: `'League Spartan', sans-serif`,
    },
    desc: {
      fontSize: 17,
      fontWeight: 'lighter',
      maxWidth: 440,
    },
    divider: {
      borderTop: `1px solid ${theme.borderColor}`,
      height: 1,
      margin: '7px 0 12px 0',
      maxWidth: 440,
    },
    linksArea: {
      position: 'absolute',
      bottom: 20,
      display: 'flex',
      gap: 15,
    },

    extraArea: {
      position: 'absolute',
      top: 20,
      right: 20,
      width: 265,
      height: 215,
      borderRadius: 15,
      background: theme.backgroundColor,
      border: `1px solid ${theme.borderColor}`,
      // boxShadow: `9px 9px ${highlightColor || theme.themeColor}`,
      // boxShadow: `9px 9px lightgrey`,
      boxShadow: theme.boxShadow,

      // boxShadow: `9px 9px #444444`,
    }
  })
  const css = useStyles()

  return (
    <div className={css.projectBoxContainer} style={style}>
      <div className={css.title}>{title}</div>
      <div className={css.divider} />
      <div className={css.desc}>{desc}</div>
      <div className={css.linksArea}>
        {gallery && <Button text={'View Gallery'} onClick={toggleGallery} color={highlightColor} icon={'gallery'} />}
        {site && <Button text={'Visit Site'} color={highlightColor} href={site} icon={'viewsite'} />}
        {about && <Button text={'More Info'} color={highlightColor} href={about} icon={'viewsite'} />}
        {repo && <Button text={'View Repo'} color={highlightColor} href={repo} icon={'github'} />}
      </div>
      {size > 1 && <div className={css.extraArea}>{extraArea}</div>}
    </div>
  )
}

export default ProjectBox
