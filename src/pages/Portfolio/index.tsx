import { useContext } from 'react'
import { createUseStyles } from 'react-jss'
import { ThemeContext } from '../../App'
import ProjectBox from '../../components/ProjectBox'

function Portfolio() {
  const theme = useContext(ThemeContext)
  
  const useStyles = createUseStyles({
    projectsContainer: {
      height: '100vh',
      width: '100vw',
      position: 'absolute',
      top: 0,
      left: 0,
      paddingTop: 80,
      // borderLeft: `10px solid ${theme.themeColor}`
    },
    projectsGrid: {
      width: '100%',
      margin: '0 auto',
      maxWidth: 1200,
      display: 'flex',
      gap: 50,
    },
  })
  const css = useStyles()

  return (
    <div className={css.projectsContainer}>
      <div className={css.projectsGrid}>
        <ProjectBox 
          title={'Color Accessibility App'} 
          desc={'React App that calculates the accessibility of a color scheme according to different types of colorblindness.'} 
          highlightColor={'#9491E9'}
          site={'https://prismcolor.netlify.app/'} 
          repo={'https://github.com/bingland/color-accessibility-app'} />
      </div>
    </div>
  )
}

export default Portfolio
