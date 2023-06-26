import Gallery from '../../components/Gallery'

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

interface NokeGalleryProps {
  toggle: () => void
}

function NokeGallery({toggle}: NokeGalleryProps) {
  const gallery = [
    {
      image: tableRevamp,
      description: 'Table Revamp'
    },
    {
      image: lightToastPreviews,
      description: 'Light Toast Previews',
    },
    {
      image: darkToastPreviews,
      description: 'Dark Toast Previews'
    },
    {
      image: createFacilityImageScreen,
      description: 'Create Facility Image Screen'
    },
    {
      image: login1,
      description: 'Login Redesign Mockup 1'
    },
    {
      image: login2,
      description: 'Login Redesign Mockup 2'
    },
    {
      image: permissionsCard,
      description: 'Permissions Card View'
    },
    { // needs to be switched because of typo
      image: permissionsGraph,
      description: 'Permissions Graph View',
    },
    {
      image: simpleSitesPage,
      description: 'Simple Sites Page',
    },
    {
      image: brandingRevamp1,
      description: 'Branding Revamp Mockup 1'
    },
    {
      image: brandingRevamp2,
      description: 'Branding Revamp Mockup 2'
    },
    {
      image: iPadMockupsAdobe,
      description: 'iPad mockups for revamped Smart Entry App'
    },
    {
      image: globalNotifications1,
      description: 'Global Notifications 1'
    },
    {
      image: holdOpenRedesign,
      description: 'Hold Open Redesign'
    },
    {
      image: popupNotification,
      description: 'Popup Message'
    },
    {
      image: siteCompanyMessages,
      description: 'Site & Company Messages Page'
    },
    {
      image: ipadScreen1,
      description: 'iPad Redesign Homescreen'
    },
    {
      image: ipadScreen2,
      description: 'iPad Redesign Search Table'
    },
    {
      image: siteSettings,
      description: 'Revamped Site Settings Page'
    },
    {
      image: userCreate,
      description: 'User Create Revamp'
    },
  ]

  return (
    <div>
      <Gallery 
        title={'Noke Smart Entry'}
        subtitle={'June 2021 to April 2023'} 
        description={`
          Noke Smart Entry is an electronic smart lock & access control system that allows tenants to access your facility & their 
          unit using their smart device. During my time at Noke, I worked on the web portal application for Smart Entry. I was heavily 
          involved in both the coding and design process of the web portal. Using software like Figma, Adobe XD and Illustrator, I 
          came up with many robust mockups for new features and revamps across Smart Entry. 
          All of the pictures in this gallery that you see were all designed by me, and most of them were coded either by me or my
          teammates. 
        `} 
        toggle={toggle}
        gallery={gallery}
        galleryColor={'#0070ce'}
        moreInfo={'https://www.janusintl.com/products/noke'}
        coverPhoto={nokeUnlockCoverPhoto}
        />
    </div>
  )
}

export default NokeGallery
