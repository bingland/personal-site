import { useContext } from 'react'
import { createUseStyles } from 'react-jss'
import { ThemeContext } from '../../App'
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

function ProjectBox(props: ProjectBoxProps) {
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
      fontSize: 25,
      fontWeight: 'bold',
    },
    desc: {
      fontSize: 18,
      fontWeight: 'lighter',
    },
    divider: {
      borderTop: `1px solid ${theme.borderColor}`,
      height: 1,
      margin: '15px 0',
    }
  })
  const css = useStyles()

  return (
    <div className={css.projectBoxContainer}>
      <div className={css.title}>{props.title}</div>
      <div className={css.divider} />
      <div className={css.desc}>{props.desc}</div>
    </div>
  )
}

export default ProjectBox
