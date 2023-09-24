import Gallery from '../../components/Gallery'

// cover photo
import freelanceCoverPhoto from '../../images/freelanceGallery/freelanceCoverPhoto.jpg'

// gallery photos
import BRWgenerated1 from '../../images/freelanceGallery/BRWgenerated1.jpg'
import BRWgenerated2 from '../../images/freelanceGallery/BRWgenerated2.jpg'
import BRWWizardLanding1 from '../../images/freelanceGallery/BRWWizardLanding1.jpg'
import BRWWizardLanding2 from '../../images/freelanceGallery/BRWWizardLanding2.jpg'
import BRWWizardStart from '../../images/freelanceGallery/BRWWizardStart.jpg'
import RattlersCover from '../../images/freelanceGallery/RattlersCover.jpg'
import RattlersRoster from '../../images/freelanceGallery/RattlersRoster.jpg'
import YINadmin from '../../images/freelanceGallery/YINadmin.jpg'

interface FreelanceGalleryProps {
  toggle: () => void
}

function FreelanceGallery({toggle}: FreelanceGalleryProps) {
  const gallery = [
    {
      image: BRWWizardLanding1,
      description: 'Description'
    },
    {
      image: BRWWizardLanding2,
      description: 'Description'
    },
    {
      image: BRWWizardStart,
      description: 'Description'
    },
    {
      image: RattlersCover,
      description: 'Description'
    },
    {
      image: RattlersRoster,
      description: 'Description'
    },
    {
      image: BRWgenerated1,
      description: 'Description'
    },
    {
      image: BRWgenerated2,
      description: 'Description'
    },
    {
      image: YINadmin,
      description: 'Description'
    },
  ]

  return (
    <div>
      <Gallery 
        title={'Freelance'}
        subtitle={'August 2023 to Current'} 
        description={`
          In my freelance career so far, I have worked primarily as a UX/UI designer and have come up with tons of 
          designs for a large amount of websites and applications that cover a large range of different industries 
          and types of applications, whether that’s a new site creation tool or even a new website for a professional 
          rodeo bullriding team. I have also had the opportunity to bring my designs to life by coding them myself using 
          frameworks like Svelte, Astro and Tailwind, as well as other frontend technologies like HTML, CSS and JavaScript.
        `} 
        toggle={toggle}
        gallery={gallery}
        galleryColor={'#73bb44'}
        coverPhoto={freelanceCoverPhoto}
        />
    </div>
  )
}

export default FreelanceGallery
