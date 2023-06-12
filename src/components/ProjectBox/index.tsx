import { useContext } from 'react'
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
  toggleGallery?: () => void
  site?: string
  about?: string
  repo?: string
}

function ProjectBox({ highlightColor, title, desc, size = 1, about, gallery, showGallery, extraArea, toggleGallery, site, repo, ...props}: ProjectBoxProps) {
  const theme = useContext(ThemeContext)
  
  const useStyles = createUseStyles({
    projectBoxContainer: {
      position: 'relative',
      border: `1px solid ${theme.borderColor}`,
      width: (size * 380) + (size > 1 ? 30 : 0),
      height: 260,
      borderRadius: 25,
      padding: 25,
      boxShadow: `0px 9px ${highlightColor || theme.themeColor}`,
    },

    title: {
      fontSize: 25,
      fontWeight: 'bold',
      fontFamily: `'League Spartan', sans-serif`,
    },
    desc: {
      fontSize: 16,
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
      top: 25,
      right: 25,
      width: 260,
      height: 210,
      borderRadius: 20,
      background: theme.backgroundColor,
      boxShadow: `9px 9px ${highlightColor || theme.themeColor}`,
    }
  })
  const css = useStyles()

  return (
    <div className={css.projectBoxContainer}>
      <div className={css.title}>{title}</div>
      <div className={css.divider} />
      <div className={css.desc}>{desc}</div>
      <div className={css.linksArea}>
        {gallery && <Button text={'View Gallery'} onClick={toggleGallery} color={highlightColor} icon={'viewsite'} />}
        {site && <Button text={'Visit Site'} color={highlightColor} href={site} icon={'viewsite'} />}
        {about && <Button text={'More Info'} color={highlightColor} href={about} icon={'viewsite'} />}
        {repo && <Button text={'View Repo'} color={highlightColor} href={repo} icon={'github'} />}
      </div>
      {size > 1 && <div className={css.extraArea}>{extraArea}</div>}
    </div>
  )
}

export default ProjectBox
