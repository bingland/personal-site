import { useContext } from 'react'
import { createUseStyles } from 'react-jss'
import { ThemeContext } from '../../App'

function Landing() {
  const theme = useContext(ThemeContext)
  
  const useStyles = createUseStyles({
    landingContainer: {
      height: '100vh',
      width: '100vw',
      position: 'absolute',
      top: 0,
      left: 0,
      color: theme.buttonFontColor,
      backgroundColor: theme.backgroundColor,
      borderLeft: `10px solid ${theme.themeColor}`
    },
    contentContainer: {
      margin: '0 auto',
      width: '100%',
      height: '100%',
      maxWidth: 1200,
      display: 'grid',
      gridTemplateColumns: '1fr 450px',
      alignItems: 'center',
    },

    mainTextArea: {
      
    },
    mainHeader: {
      fontSize: 45,
      fontWeight: 'bold',
      color: theme.themeColor,
      marginBottom: 20,
    },
    mainParagraph: {
      fontSize: 28,
    },

    photoArea: {

    },
    photo: {
      backgroundColor: '#f2f2f2',
      border: `1px solid black`,
      borderRadius: 15, 
      width: 340,
      height: 340,
      margin: '0 auto',
    },
  })
  const css = useStyles()

  return (
    <div className={css.landingContainer}>
      <div className={css.contentContainer}>
        <div className={css.mainTextArea}>
          <h1 className={css.mainHeader}>Hey, my name's Brayden.</h1>
          <p className={css.mainParagraph}>
            I'm a Front End Web Developer with 2 years of experience in both coding and design. 
            I got my Bachelor's Degree from Utah Valley University in Web Design & Development.
          </p>
        </div>
        <div className={css.photoArea}>
          <div className={css.photo} />
        </div>
      </div>
    </div>
  )
}

export default Landing

