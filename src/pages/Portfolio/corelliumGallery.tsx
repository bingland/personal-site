import Gallery from '../../components/Gallery'

// cover photo
import renderPhotoOne from '../../images/corelliumGallery/renderOne.jpg'

// gallery photos
import activityLogPhoto from '../../images/corelliumGallery/activityLog.jpg'
import adminOverviewPhoto from '../../images/corelliumGallery/adminOverview.jpg'
import appsPagePhoto from '../../images/corelliumGallery/appsPage.jpg'
import consolePhoto from '../../images/corelliumGallery/console.jpg'
import designSystemButtonPhoto from '../../images/corelliumGallery/designSystemButton.jpg'
import designSystemCardPhoto from '../../images/corelliumGallery/designSystemCard.jpg'
import designSystemTablePhoto from '../../images/corelliumGallery/designSystemTable.jpg'
import deviceCreatePagePhoto from '../../images/corelliumGallery/deviceCreatePage.jpg'
import devicesPagePhoto from '../../images/corelliumGallery/devicesPage.jpg'
import filesPagePhoto from '../../images/corelliumGallery/filesPage.jpg'
import htmlReportOnePhoto from '../../images/corelliumGallery/htmlReportOne.jpg'
import htmlReportTwoPhoto from '../../images/corelliumGallery/htmlReportTwo.jpg'
import matrixCreateTestPhoto from '../../images/corelliumGallery/matrixCreateTest.jpg'
import matrixMonitorTestPhoto from '../../images/corelliumGallery/matrixMonitorTest.jpg'
import matrixReportOnePhoto from '../../images/corelliumGallery/matrixReportOne.jpg'
import matrixReportTwoPhoto from '../../images/corelliumGallery/matrixReportTwo.jpg'
import matrixRunTestPhoto from '../../images/corelliumGallery/matrixRunTest.jpg'
import projectsPagePhoto from '../../images/corelliumGallery/projectsPage.jpg'
import resourcesPagePhoto from '../../images/corelliumGallery/resourcesPage.jpg'
import themeSelectPhoto from '../../images/corelliumGallery/themeSelect.jpg'

interface CorelliumGalleryProps {
  toggle: () => void
}

function CorelliumGallery({toggle}: CorelliumGalleryProps) {
  const gallery = [
    {
      image: devicesPagePhoto,
      description: 'Devices page'
    },
    {
      image: deviceCreatePagePhoto,
      description: 'Device creation page'
    },
    {
      image: resourcesPagePhoto,
      description: 'Resources page'
    },
    {
      image: appsPagePhoto,
      description: 'Apps page'
    },
    {
      image: consolePhoto,
      description: 'Console page'
    },
    {
      image: filesPagePhoto,
      description: 'Files page'
    },
    {
      image: matrixCreateTestPhoto,
      description: 'MATRIX create test page'
    },
    {
      image: matrixMonitorTestPhoto,
      description: 'MATRIX monitor test page'
    },
    {
      image: matrixRunTestPhoto,
      description: 'MATRIX run test page'
    },
    {
      image: matrixReportOnePhoto,
      description: 'MATRIX report part one'
    },
    {
      image: matrixReportTwoPhoto,
      description: 'MATRIX report part two'
    },
    {
      image: htmlReportOnePhoto,
      description: 'HTML report part one'
    },
    {
      image: htmlReportTwoPhoto,
      description: 'HTML report part two'
    },
    {
      image: themeSelectPhoto,
      description: 'Theme selection page'
    },
    {
      image: adminOverviewPhoto,
      description: 'Overview page'
    },
    {
      image: projectsPagePhoto,
      description: 'Projects page'
    },
    {
      image: activityLogPhoto,
      description: 'Activity log page'
    },
    {
      image: designSystemButtonPhoto,
      description: 'Design System - Buttons'
    },
    {
      image: designSystemTablePhoto,
      description: 'Design System - Tables'
    },
    {
      image: designSystemCardPhoto,
      description: 'Design System - Credit Card'
    },
  ]

  return (
    <div>
      <Gallery 
        title="Corellium"
        subtitle="October 2023 to Present"
        description={`
          I've been working at Corellium for about 2 years. Corellium is a cybersecurity and 
          virtualization company that provides virtualized versions of mobile devices, 
          primarily iOS and Android, for research and testing. It's often used for  
          vulnerability research, security testing, and app development at scale.
          I was the primary frontend developer for the MATRIX, which is a tool for automated mobile 
          app security testing. It runs standardized checks (based on OWASP) on virtual iOS 
          and Android devices, capturing valuable data about app behavior and security vulnerabilities.
        `} 
        toggle={toggle}
        gallery={gallery}
        galleryColor="#282828"
        moreInfo="https://www.corellium.com/"
        coverPhoto={renderPhotoOne}
        />
    </div>
  )
}

export default CorelliumGallery
