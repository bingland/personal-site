import { useContext } from 'react'
import { createUseStyles } from 'react-jss'
import { ThemeContext } from '../../App'
import Button from '../../components/Button'
import profilePic from '../../images/photosessSquare.jpg'

function Contact() {
  const theme = useContext(ThemeContext)
  
  const useStyles = createUseStyles({
    contactContainer: {
      height: '100vh',
      width: '100vw',
      position: 'absolute',
      top: 0,
      left: 0,
      // paddingTop: 80,
      display: 'grid',
      placeItems: 'center',
      // borderLeft: `10px solid ${theme.themeColor}`
    },
    mainBox: {
      border: `1px solid ${theme.borderColor}`,
      borderRadius: 49,
      display: 'grid',
      gridTemplateColumns: '300px 1fr',
      width: 850,
      height: 440,
    },
    connectArea: {
      borderRight: `1px solid ${theme.borderColor}`,
    },
    profileVisual: {
      width: '100%',
      background: theme.themeColor,
      borderRadius: '48px 0 0 0',
      display: 'grid',
      justifyContent: 'center',
      height: 150,
    },
    profileVisualImg: {
      width: 180,
      position: 'relative',
      top: 25,
      borderRadius: 180,
      border: `5px solid white`
    },
    linkArea: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      marginTop: 60,
    },
    linkItem: {
      marginTop: 10,
      display: 'grid',
      alignItems: 'center',
    },
    recommendationArea: {
      padding: 60,
    },
    recommendationCarousel: {

    },
    recommendation: {

    },
    recommendationTitle: {
      fontFamily: `'League Spartan', sans-serif`,
      fontSize: 24,
      fontWeight: 'bold',
    },
    recommendationText: {
      fontSize: 20,
      marginTop: 15,
    },
    recommendationGiver: {
      display: 'flex',
      gap: 10,
      marginTop: 25,
      alignItems: 'center',
    },
    giverPic: {
      width: 35,
      height: 35,
      borderRadius: 35,
      border: `1px solid ${theme.borderColor}`,
      background: 'grey',
    },
    giverName: {
      fontFamily: `'League Spartan', sans-serif`,
      fontSize: 20,
      fontWeight: 'bold',
    },
    giverPosition: {
      fontSize: 12,
    },
  })
  const css = useStyles()

  return (
    <div className={css.contactContainer}>
      <div className={css.mainBox}>
        <div className={css.connectArea}>
          <div className={css.profileVisual}>
            <img className={css.profileVisualImg} src={profilePic} alt={'Connect with Brayden England'} />
          </div>
          <div className={css.linkArea}>
            <div className={css.linkItem}>
              <Button text={'Connect on LinkedIn'} icon={'linkedin'} color={'#0070ce'} width={'225px'} />
            </div>
            <div className={css.linkItem}>
              <Button text={'Check out my GitHub'} icon={'github'} color={'#4B4B4B'} width={'225px'} />
            </div>
            <div className={css.linkItem}>
              <Button text={'Send me an email'} icon={'email'} color={'#E3421E'} width={'225px'} />
            </div>
          </div>
        </div>
        <div className={css.recommendationArea}>
          <div className={css.recommendationCarousel}>
            {/* turn into component? */}
            <div className={css.recommendation}>
              <div className={css.recommendationTitle}>Highly Skilled and Professional</div>
              <div className={css.recommendationText}>
                Brayden started at Noke and immediately hit the ground running. He instantly dove in and learned our processes and asked insightful 
                questions so he could start working immediately. Shortly after starting work he was already contributing, opening PRs, and even adding 
                some awesome and advanced new features.
              </div>
              <div className={css.recommendationGiver}>
                <div className={css.giverPic} />
                <div>
                  <div className={css.giverName}>Mikey Johnston</div>
                  <div className={css.giverPosition}>Frontend Developer at Angel Studios</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
