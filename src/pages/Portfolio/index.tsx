import { useContext, useState } from 'react'
import { createUseStyles } from 'react-jss'
import { ThemeContext } from '../../App'
import ProjectBox from '../../components/ProjectBox'
import NokeGallery from './nokeGallery'
import FreelanceGallery from './freelanceGallery'

import unlockingUnit from '../../images/unlockingUnit.jpg'
import unlockingUnitHand from '../../images/unlockingUnitHand.png'
import CorelliumGallery from './corelliumGallery'

// cover photos
import freelanceCoverPhoto from '../../images/freelanceGallery/freelanceCoverPhoto.jpg'
import corelliumCoverPhoto from '../../images/corelliumGallery/renderTwo.jpg'

function Portfolio() {
  const [nokeGallery, setNokeGallery] = useState(false)
  const [freelanceGallery, setFreelanceGallery] = useState(false)
  const [corelliumGallery, setCorelliumGallery] = useState(false)

  const toggleNokeGallery = () => setNokeGallery(!nokeGallery)
  const toggleFreelanceGallery = () => setFreelanceGallery(!freelanceGallery)
  const toggleCorelliumGallery = () => setCorelliumGallery(!corelliumGallery)

  const theme = useContext(ThemeContext)
  
  const useStyles = createUseStyles({
    projectsContainer: {
      height: '100vh',
      width: '100vw',
      position: 'absolute',
      top: 0,
      left: 0,
      paddingBottom: 40,
      '@media (max-width: 1300px)': {
        overflowY: 'auto',
      },
    },
    projectsLayout: {
      width: '100%',
      margin: '0 auto',
      maxWidth: 1100,
      display: 'flex',
      flexWrap: 'wrap',
      gap: 30,
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
      top: '50%',
      transform: 'translateY(-50%)',
      '@media (max-width: 1199px)': {
        top: 100,
        transform: 'none',
        padding: '0 20px',
      },
      '@media (max-width: 800px)': {
        paddingBottom: 50,
        flexWrap: 'nowrap',
        flexDirection: 'column'
      },
      '@media (max-width: 500px)': {
        padding: 0,
        paddingBottom: 50,
      },
    },
    projectsColumn: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 30,
    },

    standardExtraAreaContainer: {
      width: '100%',
      height: '100%',
      borderRadius: 9,
      position: 'relative',
      overflow: 'hidden',
    },
    standardExtraAreaImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },

    nokeExtraAreaContainer: {
      backgroundImage: `url(${unlockingUnit})`,
      backgroundSize: 'cover',
      width: '100%',
      height: '100%',
      borderRadius: 9,
      position: 'relative',
    },
    overflowHand: {
      position: 'absolute',
      height: '130%',
      width: '100%',
      overflow: 'hidden',
      borderRadius: 9,
      bottom: 0,
    },
    extraAreaHand: {
      position: 'absolute',
      width: 330,
      right: -155,
      top: 43,
    },
  })
  const css = useStyles()

  const getNokeExtraArea = () => <div className={css.nokeExtraAreaContainer}>
    <div className={css.overflowHand}>
      <img className={css.extraAreaHand} src={unlockingUnitHand} alt={'hand hovering over noke unit'} loading={'lazy'} />
    </div>
  </div>

  const getFreelanceExtraArea = () => <div className={css.standardExtraAreaContainer}>
    <img className={css.standardExtraAreaImage} src={freelanceCoverPhoto} alt={'freelance cover'} loading={'lazy'} />
  </div>

  const getCorelliumExtraArea = () => <div className={css.standardExtraAreaContainer}>
    <img className={css.standardExtraAreaImage} src={corelliumCoverPhoto} alt={'corellium cover'} loading={'lazy'} />
  </div>

  return (
    <div className={css.projectsContainer}>
      {/* galleries */}
      {nokeGallery && theme.width > 870 && <NokeGallery toggle={toggleNokeGallery} />}
      {freelanceGallery && theme.width > 870 && <FreelanceGallery toggle={toggleFreelanceGallery} />}
      {corelliumGallery && theme.width > 870 && <CorelliumGallery toggle={toggleCorelliumGallery} />}
      <div className={css.projectsLayout}>
        <div className={css.projectsColumn}>
          <ProjectBox
            title="Corellium"
            desc="I've been with Corellium for about 2 years, since October 2023. Corellium is a platform that allows users to create and manage virtual devices for security, testing, and development purposes."
            highlightColor="#282828"
            gallery={theme.width > 870}
            boxWidth={2}
            style={{...theme.animations.fadeDownShort, animationDelay: '0.2s'}}
            about="https://www.corellium.com/"
            toggleGallery={toggleCorelliumGallery}
            extraArea={getCorelliumExtraArea()}
          />
          <ProjectBox 
            title="Nokē" 
            desc={'I worked with Nokē from June 2021 to April 2023. Nokē Smart Entry is an electronic smart lock & access control system that allows tenants to access your facility & their unit using their smart device.'} 
            highlightColor="#0070ce"
            about={'https://www.janusintl.com/products/noke'} 
            gallery={theme.width > 870}
            boxWidth={2}
            showGallery={nokeGallery}
            toggleGallery={toggleNokeGallery}
            style={{...theme.animations.fadeDownShort, animationDelay: '0.3s'}}
            extraArea={getNokeExtraArea()} 
          />
        </div>
        <ProjectBox 
          title={'Freelance'} 
          desc={'In Summer 2023, I did some freelance UX/UI Design and Web Development. I\'ve designed several large applications and coded many of my designs as well.'} 
          highlightColor={'#73bb44'}
          gallery={theme.width > 870}
          boxHeight={theme.width > 1200 ? 2 : 1}
          boxWidth={theme.width > 1200 ? 1 : 2}
          toggleGallery={toggleFreelanceGallery}
          style={{...theme.animations.fadeDownShort, animationDelay: '0.4s'}}
          extraArea={getFreelanceExtraArea()}
        />
        {/* <ProjectBox 
          title={'Color Accessibility App'} 
          desc={'React App that calculates the accessibility of a color scheme according to different types of colorblindness.'} 
          highlightColor={'#9491E9'}
          style={{...theme.animations.fadeDownShort, animationDelay: '0.4s'}}
          site={'https://prismcolor.netlify.app/'} 
          repo={'https://github.com/bingland/color-accessibility-app'} />
        <ProjectBox 
          title={'React Trivia'} 
          desc={'Trivia Game made with React and the Open Trivia DB API. Assignment for DGM 3790 at Utah Valley University.'} 
          highlightColor={'#E93323'}
          style={{...theme.animations.fadeDownShort, animationDelay: '0.5s'}}
          site={'https://reacttrivia.netlify.app/'} 
          repo={'https://github.com/bingland/trivia-react'} />
        <ProjectBox 
          title={'1800 Clothing'} 
          desc={'1800s Clothing site is to provide period-accurate images of clothing from the 1800s. This is a group application that done for a Senior Project at Utah Valley University.'} 
          highlightColor={'#CCBCA6'}
          style={{...theme.animations.fadeDownShort, animationDelay: '0.6s'}}
          site={'https://1800clothing.org/'} 
          repo={'https://github.com/timetoady/1800clothingSvelte1'} /> */}
      </div>
    </div>
  )
}

export default Portfolio
