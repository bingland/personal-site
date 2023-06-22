import { useContext } from 'react'
import { createUseStyles } from 'react-jss'
import { ThemeContext } from '../../App'
import Gallery from '../../components/Gallery'

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

interface NokeGalleryProps {
  toggle: () => void
}

function NokeGallery({toggle}: NokeGalleryProps) {
  const theme = useContext(ThemeContext)
  
  const useStyles = createUseStyles({
    
  })
  const css = useStyles()

  const gallery = [
    {
      image: createFacilityImageScreen,
      description: 'Create Facility Image Screen'
    },
    {
      image: darkToastPreviews,
      description: 'Dark Toast Previews'
    },
    {
      image: lightToastPreviews,
      description: 'Light Toast Previews',
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
      image: tableRevamp,
      description: 'Table Revamp'
    }
  ]

  return (
    <div>
      <Gallery 
        title={'Noke Smart Entry'}
        subtitle={'June 2021 to April 2023'} 
        description={'Noke Smart Entry is an electronic smart lock & access control system that allows tenants to access your facility & their unit using their smart device. This is an access control system that allows tenants to access your facility & their unit using their smart device.'} 
        toggle={toggle}
        gallery={gallery}
        galleryColor={'#0070ce'}
        coverPhoto={nokeUnlockCoverPhoto}
        />
    </div>
  )
}

export default NokeGallery
