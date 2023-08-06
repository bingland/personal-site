import { useContext } from 'react'
import { createUseStyles } from 'react-jss'
import { ThemeContext } from '../../App'

import pfpOutline from '../../images/pfpOutline.png'
import hex from '../../images/hex.png'

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
      gridTemplateColumns: '1fr 360px',
      gap: 100,
      alignItems: 'center',
      '@media (max-width: 1025px)': {
        gridTemplateColumns: '1fr',
        placeItems: 'start',
        alignContent: 'start',
        gap: 50,
        paddingTop: 100,
        textAlign: 'center',
      },
      '@media (max-width: 450px)': {
        paddingTop: 120,
      }
    },

    mainTextArea: {
      '@media (max-width: 1025px)': {
        order: 2,
      }
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
      fontSize: 24,
      '@media (max-width: 580px)': {
        fontSize: 20,
      },
      '@media (max-width: 380px)': {
        fontSize: 16,
      },
    },

    photoArea: {
      width: 355,
      height: 400,
      marginTop: 60,
      position: 'relative',
      '@media (max-width: 1025px)': {
        margin: '0 auto',
        marginTop: 60,
        order: 1,
      },
      '@media (max-width: 450px)': {
        marginTop: 0,
        width: 260,
        height: 293,
      },
    },

    hexPhoto: {
      backgroundImage: `url(${hex})`,
      backgroundSize: 'cover',
      width: '100%',
      height: '100%',
      position: 'absolute',
      bottom: 0,
      // controls color
      filter: 'invert(31%) sepia(97%) saturate(861%) hue-rotate(191deg) ',
      opacity: 0.30,
    },
    pfpPhoto: {
      backgroundImage: `url(${pfpOutline})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '78%',
      height: '111.5%',
      bottom: 0,
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
    }
  })
  const css = useStyles()

  return (
    <div className={css.landingContainer} style={{...theme.animations.fadeDown, animationDelay: '0.1s'}}>
      <div className={css.contentContainer}>
        <div className={css.mainTextArea}>
          <h1 className={css.mainHeader}>Hey, my name's Brayden.</h1>
          <p className={css.mainParagraph}>
            I'm a Web Developer with 2 years of professional experience in both front end web development and web design. 
            I graduated from Utah Valley University in 2021 with a Bachelor's Degree in Web Design & Development.
          </p>
        </div>
        <div className={css.photoArea}>
          <div className={css.hexPhoto} />
          <div className={css.pfpPhoto} />
        </div>
      </div>
    </div>
  )
}

export default Landing

