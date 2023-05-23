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
      width: 412,
      height: 275,
      borderRadius: 25,
      padding: 25,
    },

    title: {
      fontSize: 32,
      fontWeight: 'bold',
      fontFamily: `'League Spartan', sans-serif`,
    },
    desc: {
      fontSize: 18,
      fontWeight: 'lighter',
    },
    divider: {
      borderTop: `1px solid ${theme.borderColor}`,
      height: 1,
      margin: '10px 0 15px 0',
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
        {site && <Button text={'Visit Site'} icon={'viewsite'} />}
        {repo && <Button text={'View Repo'} icon={'github'} />}
      </div>
    </div>
  )
}

export default ProjectBox
