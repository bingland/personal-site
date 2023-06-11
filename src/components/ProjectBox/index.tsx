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
  toggleGallery?: () => void
  site?: string
  about?: string
  repo?: string
}

function ProjectBox({ highlightColor, title, desc, size = 1, about, gallery, showGallery, toggleGallery, site, repo, ...props}: ProjectBoxProps) {
  const theme = useContext(ThemeContext)
  
  const useStyles = createUseStyles({
    projectBoxContainer: {
      position: 'relative',
      border: `1px solid ${theme.borderColor}`,
      width: (size * 380),
      height: 250,
      borderRadius: 25,
      padding: 25,
      boxShadow: `0px 8px ${highlightColor || theme.themeColor}`,
    },

    title: {
      fontSize: 25,
      fontWeight: 'bold',
      fontFamily: `'League Spartan', sans-serif`,
    },
    desc: {
      fontSize: 16,
      fontWeight: 'lighter',
    },
    divider: {
      borderTop: `1px solid ${theme.borderColor}`,
      height: 1,
      margin: '7px 0 12px 0',
    },
    linksArea: {
      position: 'absolute',
      bottom: 20,
      display: 'flex',
      gap: 15,
    }
  })
  const css = useStyles()

  return (
    <div className={css.projectBoxContainer}>
      <div className={css.title}>{title}</div>
      <div className={css.divider} />
      <div className={css.desc}>{desc}</div>
      <div className={css.linksArea}>
        {site && <Button text={'Visit Site'} color={highlightColor} href={site} icon={'viewsite'} />}
        {about && <Button text={'More Info'} color={highlightColor} href={about} icon={'viewsite'} />}
        {gallery && <Button text={'View Gallery'} onClick={toggleGallery} color={highlightColor} icon={'viewsite'} />}
        {repo && <Button text={'View Repo'} color={highlightColor} href={repo} icon={'github'} />}
      </div>
    </div>
  )
}

export default ProjectBox
