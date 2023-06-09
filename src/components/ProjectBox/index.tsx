import { useContext } from 'react'
import { createUseStyles } from 'react-jss'
import { ThemeContext } from '../../App'
import Button from '../Button'
// import classNames from 'classnames'

interface ProjectBoxProps {
  highlightColor?: string
  title: string
  desc: string
  size?: string
  viewGallery?: boolean
  site?: string
  repo?: string
}

function ProjectBox({ highlightColor, title, desc, size, viewGallery, site, repo, ...props}: ProjectBoxProps) {
  const theme = useContext(ThemeContext)
  
  const useStyles = createUseStyles({
    projectBoxContainer: {
      border: `1px solid ${theme.borderColor}`,
      width: 380,
      height: 240,
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
      display: 'flex',
      gap: 15,
      marginTop: 10,
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
        {repo && <Button text={'View Repo'} color={highlightColor} href={repo} icon={'github'} />}
      </div>
    </div>
  )
}

export default ProjectBox
