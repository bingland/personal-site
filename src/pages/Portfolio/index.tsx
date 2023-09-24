import { useContext, useState } from 'react'
import { createUseStyles } from 'react-jss'
import { ThemeContext } from '../../App'
import ProjectBox from '../../components/ProjectBox'
import NokeGallery from './nokeGallery'
import FreelanceGallery from './freelanceGallery'

import unlockingUnit from '../../images/unlockingUnit.jpg'
import unlockingUnitHand from '../../images/unlockingUnitHand.png'

function Portfolio() {
  const [nokeGallery, setNokeGallery] = useState(false)
  const [freelanceGallery, setFreelanceGallery] = useState(false)
  const toggleNokeGallery = () => setNokeGallery(!nokeGallery)
  const toggleFreelanceGallery = () => setFreelanceGallery(!freelanceGallery)
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
    projectsGrid: {
      width: '100%',
      margin: '0 auto',
      maxWidth: 1200,
      display: 'flex',
      flexWrap: 'wrap',
      gap: 30,
      position: 'relative',
      top: '50%',
      transform: 'translateY(-50%)',
      '@media (max-width: 1199px)': {
        top: 100,
        transform: 'none',
        justifyContent: 'center',
        padding: '0 20px',
      },
      '@media (max-width: 800px)': {
        gap: 20,
        paddingBottom: 50,
      },
      '@media (max-width: 500px)': {
        padding: 0,
        paddingBottom: 50,
      },
    },

    extraAreaContainer: {
      backgroundImage: `url(${unlockingUnit})`,
      backgroundSize: 'cover',
      width: '100%',
      height: '100%',
      borderRadius: 14,
      position: 'relative',
    },
    overflowHand: {
      position: 'absolute',
      height: '130%',
      width: '100%',
      overflow: 'hidden',
      borderRadius: 16,
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

  const nokeExtraArea = () => <div className={css.extraAreaContainer}>
    <div className={css.overflowHand}>
      <img className={css.extraAreaHand} src={unlockingUnitHand} alt={'hand hovering over noke unit'} loading={'lazy'} />
    </div>
  </div>

  return (
    <div className={css.projectsContainer}>
      {/* galleries */}
      {nokeGallery && theme.width > 870 && <NokeGallery toggle={toggleNokeGallery} />}
      {freelanceGallery && theme.width > 870 && <FreelanceGallery toggle={toggleFreelanceGallery} />}
      <div className={css.projectsGrid}>
        <ProjectBox 
          title={'Noke Smart Entry'} 
          desc={'I worked with Nokē from June 2021 to April 2023. Nokē® Smart Entry is an electronic smart lock & access control system that allows tenants to access your facility & their unit using their smart device.'} 
          highlightColor={'#0070ce'}
          about={'https://www.janusintl.com/products/noke'} 
          gallery={theme.width > 870}
          size={theme.width > 1000 ? 2 : 1}
          showGallery={nokeGallery}
          toggleGallery={toggleNokeGallery}
          style={{...theme.animations.fadeDownShort, animationDelay: '0.2s'}}
          extraArea={nokeExtraArea()} />
        <ProjectBox 
          title={'Freelance'} 
          desc={'Starting from August 2023, I\'ve been doing freelance UX/UI Design and Web Development. I\'ve designed several large applications and coded many of my designs as well.'} 
          highlightColor={'#73bb44'}
          gallery={theme.width > 870}
          showGallery={nokeGallery}
          toggleGallery={toggleFreelanceGallery}
          style={{...theme.animations.fadeDownShort, animationDelay: '0.3s'}}
          extraArea={nokeExtraArea()} />
        <ProjectBox 
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
          repo={'https://github.com/timetoady/1800clothingSvelte1'} />
      </div>
    </div>
  )
}

export default Portfolio
