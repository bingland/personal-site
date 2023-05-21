import { useContext } from 'react'
import { createUseStyles } from 'react-jss'
import { ThemeContext } from '../../App'

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
      gridTemplateColumns: '390px 645px',
      width: 1037,
      height: 519,
    },
    connectArea: {
      borderRight: `1px solid ${theme.borderColor}`,
    },
    profileVisual: {
      height: 159,
      background: theme.themeColor,
      borderRadius: '48px 0 0 0',
    },
    recommendationArea: {
      padding: 83,
    },
    recommendationCarousel: {

    },
    recommendation: {

    },
    recommendationTitle: {
      fontFamily: `'League Spartan', sans-serif`,
      fontSize: 30,
      fontWeight: 'bold',
    },
    recommendationText: {
      fontSize: 23,
      marginTop: 5,
    },
    recommendationGiver: {
      display: 'flex',
      gap: 15,
      marginTop: 25,
    },
    giverPic: {
      width: 47,
      height: 47,
      borderRadius: 47,
      border: `1px solid ${theme.borderColor}`,
      background: 'grey',
    },
    giverName: {
      fontFamily: `'League Spartan', sans-serif`,
      fontSize: 24,
      fontWeight: 'bold',
    },
    giverPosition: {
      fontSize: 15,
    },
  })
  const css = useStyles()

  return (
    <div className={css.contactContainer}>
      <div className={css.mainBox}>
        <div className={css.connectArea}>
          <div className={css.profileVisual}>

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
