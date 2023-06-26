import { useContext } from 'react'
import { createUseStyles } from 'react-jss'
import { ThemeContext } from '../../App'

import profilePic from '../../images/photosessSquare.jpg'

function Landing() {
  const theme = useContext(ThemeContext)
  
  const useStyles = createUseStyles({
    landingContainer: {
      height: '100vh',
      width: '100vw',
      position: 'absolute',
      top: 0,
      left: 0,
      color: theme.fontColor,
      '@media (max-width: 1300px)': {
        padding: '0 50px',
      },
      '@media (max-width: 500px)': {
        padding: '0 25px',
      },
    },
    contentContainer: {
      margin: '0 auto',
      width: '100%',
      height: '100%',
      maxWidth: 1200,
      display: 'grid',
      gridTemplateColumns: '1fr 320px',
      gap: 100,
      alignItems: 'center',
      '@media (max-width: 1025px)': {
        gridTemplateColumns: '1fr',
        placeItems: 'start',
        alignContent: 'start',
        gap: 50,
        paddingTop: 100,
        textAlign: 'center',
      }
    },

    mainTextArea: {
      
    },
    mainHeader: {
      fontSize: 40,
      fontWeight: 'bold',
      color: theme.themeColor,
      marginBottom: 15,
      fontFamily: `'League Spartan', sans-serif`,
      '@media (max-width: 580px)': {
        fontSize: 30,
      },
      '@media (max-width: 430px)': {
        fontSize: 26,
      },
    },
    mainParagraph: {
      fontSize: 25,
      '@media (max-width: 580px)': {
        fontSize: 20,
      },
      '@media (max-width: 380px)': {
        fontSize: 16,
      },
    },

    photoArea: {
      '@media (max-width: 1025px)': {
        width: '100%',
      }
    },
    photo: {
      backgroundColor: '#f2f2f2',
      backgroundImage: `url(${profilePic})`,
      backgroundSize: 'cover',
      border: `1px solid ${theme.borderColor}`,
      borderRadius: 45, 
      width: 320,
      height: 320,
      margin: '0 auto',
      boxShadow: theme.boxShadow,
      '@media (max-width: 500px)': {
        width: 240,
        height: 240,
      },
    },
  })
  const css = useStyles()

  return (
    <div className={css.landingContainer} style={{...theme.animations.fadeDown, animationDelay: '0.1s'}}>
      <div className={css.contentContainer}>
        <div className={css.mainTextArea}>
          <h1 className={css.mainHeader}>Hey, my name's Brayden.</h1>
          <p className={css.mainParagraph}>
            I'm a Front End Web Developer with 2 years of professional experience in both coding and design. 
            I have a Bachelor's Degree from Utah Valley University in Web Design & Development.
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

