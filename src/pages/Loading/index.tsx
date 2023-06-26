import { useContext } from 'react'
import { createUseStyles } from 'react-jss'

import { ThemeContext } from '../../App'
import { LoadingOval } from '../../utilities/icons'

// main photos 
import profilePic from '../../images/photosessSquare.jpg'
import unlockingUnit from '../../images/unlockingUnit.jpg'
import unlockingUnitHand from '../../images/unlockingUnitHand.png'

// cover photo
import nokeUnlockCoverPhoto from '../../images/nokeGallery/nokeUnlockCoverPhoto.png'

// gallery photos
import createFacilityImageScreen from '../../images/nokeGallery/createFacilityImageScreen.jpg'
import darkToastPreviews from '../../images/nokeGallery/darkToastPreviews.png'
import lightToastPreviews from '../../images/nokeGallery/lightToastPreviews.png'
import permissionsCard from '../../images/nokeGallery/permissionsCards.jpg'
import permissionsGraph from '../../images/nokeGallery/permissionsGraph.jpg'
import simpleSitesPage from '../../images/nokeGallery/simpleSitesPage.jpg'
import tableRevamp from '../../images/nokeGallery/tableRevamp.jpg'
import brandingRevamp1 from '../../images/nokeGallery/brandingRevamp1.png'
import brandingRevamp2 from '../../images/nokeGallery/brandingRevamp2.png'
import helpWizard1 from '../../images/nokeGallery/helpWizard1.jpg'
import helpWizard2 from '../../images/nokeGallery/helpWizard2.jpg'
import iPadMockupsAdobe from '../../images/nokeGallery/iPadMockupsAdobe.png'

const photos = [
  profilePic,
  unlockingUnit,
  unlockingUnitHand,
  nokeUnlockCoverPhoto,
  createFacilityImageScreen,
  darkToastPreviews,
  lightToastPreviews,
  permissionsCard,
  permissionsGraph,
  simpleSitesPage,
  tableRevamp,
  brandingRevamp1,
  brandingRevamp2,
  helpWizard1,
  helpWizard2,
  iPadMockupsAdobe,
]

interface LoadingProps {
  show?: boolean
}

function Loading ({ show }: LoadingProps) {
  const theme = useContext(ThemeContext)

  const useStyles = createUseStyles({
    loadingContainer: {
      zIndex: 999,
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      transition: 'opacity 0.5s ease-in-out',
      background: 'white',
      display: 'grid',
      placeItems: 'center',
      pointerEvents: 'none',
    },
    loading: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      // opacity: 0.8
    },
    loadingText: {
      // color: '#c1c1c1',
      color: theme.fontColor,
      fontFamily: `'League Spartan', sans-serif`,
      fontSize: 30,
      paddingTop: 5,
      // marginTop: 40,
    },
    photoLoader: {
      width: 300,
      height: 200,
      top: 0,
      left: 0,
      background: 'yellow',
      zIndez: 9999,
      position: 'absolute',
      opacity: 0,
    },
    hiddenPhoto: {
      width: 1,
      height: 1
    },
    interText: {
      fontFamily: `'Inter', sans-serif`,
      fontSize: 8,
      opacity: 0,
    },
    monoText: {
      fontFamily: `'Roboto Mono', monospace`,
      fontSize: 8,
      opacity: 0,
    }
  })
  const css = useStyles()

  return (
    <div className={css.loadingContainer} style={{opacity: show ? 1 : 0 }}>
      <div style={{...theme.animations.fadeIn}}>
        <div className={css.loading}>
          <LoadingOval width={'35px'} height={'35px'} color={theme.themeColor} />
          <div className={css.loadingText}>Loading</div>
        </div>
      </div>
      <div className={css.photoLoader}>
        <div className={css.interText}>Brayden England</div>
        <div className={css.monoText}>Web Developer</div>
        {photos.map((p, i) => <img src={p} className={css.hiddenPhoto} key={i+'loadingPhoto'} alt={'pre loading '+i} />)}
      </div>
    </div>
  )
}

export default Loading 
