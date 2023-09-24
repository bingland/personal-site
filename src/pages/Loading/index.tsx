import { useContext } from 'react'
import { createUseStyles } from 'react-jss'

import { ThemeContext } from '../../App'
import { LoadingOval } from '../../utilities/icons'

// main photos 
import profilePic from '../../images/photosessSquare.jpg'
import pfpOutline from '../../images/pfpOutline.png'
import hex from '../../images/hex.png'
import unlockingUnit from '../../images/unlockingUnit.jpg'
import unlockingUnitHand from '../../images/unlockingUnitHand.png'

// cover photo
import nokeUnlockCoverPhoto from '../../images/nokeGallery/nokeUnlockCoverPhoto.jpg'

// gallery photos
import createFacilityImageScreen from '../../images/nokeGallery/createFacilityImageScreen.jpg'
import darkToastPreviews from '../../images/nokeGallery/darkToastPreviews.jpg'
import lightToastPreviews from '../../images/nokeGallery/lightToastPreviews.jpg'
import permissionsCard from '../../images/nokeGallery/permissionsCards.jpg'
import permissionsGraph from '../../images/nokeGallery/permissionsGraph.jpg'
import simpleSitesPage from '../../images/nokeGallery/simpleSitesPage.jpg'
import tableRevamp from '../../images/nokeGallery/tableRevamp.jpg'
import brandingRevamp1 from '../../images/nokeGallery/brandingRevamp1.jpg'
import brandingRevamp2 from '../../images/nokeGallery/brandingRevamp2.jpg'
import iPadMockupsAdobe from '../../images/nokeGallery/iPadMockupsAdobe.jpg'
import globalNotifications1 from '../../images/nokeGallery/globalNotifications1.jpg'
import holdOpenRedesign from '../../images/nokeGallery/holdOpenRedesign.jpg'
import ipadScreen1 from '../../images/nokeGallery/ipadScreen1.jpg'
import ipadScreen2 from '../../images/nokeGallery/ipadScreen2.jpg'
import login1 from '../../images/nokeGallery/login1.jpg'
import login2 from '../../images/nokeGallery/login2.jpg'
import popupNotification from '../../images/nokeGallery/popupNotifications.jpg'
import siteCompanyMessages from '../../images/nokeGallery/siteCompanyMessages.jpg'
import siteSettings from '../../images/nokeGallery/siteSettings.jpg'
import userCreate from '../../images/nokeGallery/userCreate.jpg'

// could be a cleaner way to do this; make a photos file and import all? 
const photos = [
  profilePic,
  pfpOutline,
  hex,
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
  iPadMockupsAdobe,
  globalNotifications1,
  holdOpenRedesign,
  ipadScreen1,
  ipadScreen2,
  login1,
  login2,
  popupNotification,
  siteCompanyMessages,
  siteSettings,
  userCreate,
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
    },
    loadingText: {
      color: theme.fontColor,
      fontFamily: `'League Spartan', sans-serif`,
      fontSize: 30,
      paddingTop: 5,
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
      fontFamily: `'Open Sans', sans-serif`, // heading
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
