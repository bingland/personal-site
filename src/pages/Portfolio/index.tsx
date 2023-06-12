import { useContext, useState } from 'react'
import { createUseStyles } from 'react-jss'
import { ThemeContext } from '../../App'
import ProjectBox from '../../components/ProjectBox'
import NokeGallery from './nokeGallery'

function Portfolio() {
  const [nokeGallery, setNokeGallery] = useState(false)
  const toggleNokeGallery = () => setNokeGallery(!nokeGallery)
  const theme = useContext(ThemeContext)
  
  const useStyles = createUseStyles({
    projectsContainer: {
      height: '100vh',
      width: '100vw',
      position: 'absolute',
      top: 0,
      left: 0,
      paddingBottom: 80,
      // borderLeft: `10px solid ${theme.themeColor}`
    },
    projectsGrid: {
      width: '100%',
      margin: '0 auto',
      maxWidth: 1200,
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-aroun',
      gap: 30,
      position: 'relative',
      top: '50%',
      transform: 'translateY(-50%)',
    },
  })
  const css = useStyles()

  return (
    <div className={css.projectsContainer}>
      {/* galleries */}
      {nokeGallery && <NokeGallery toggle={toggleNokeGallery} />}
      <div className={css.projectsGrid}>
        <ProjectBox 
          title={'Noke Smart Entry'} 
          desc={'I worked with Nokē from June 2021 to April 2023. Nokē® Smart Entry is an electronic smart lock & access control system that allows tenants to access your facility & their unit using their smart device.'} 
          highlightColor={'#0070ce'}
          about={'https://www.janusintl.com/products/noke'} 
          gallery={true}
          size={2}
          showGallery={nokeGallery}
          toggleGallery={toggleNokeGallery} />
        <ProjectBox 
          title={'Color Accessibility App'} 
          desc={'React App that calculates the accessibility of a color scheme according to different types of colorblindness.'} 
          highlightColor={'#9491E9'}
          site={'https://prismcolor.netlify.app/'} 
          repo={'https://github.com/bingland/color-accessibility-app'} />
        <ProjectBox 
          title={'Translate to JSON'} 
          desc={'Translate a JSON object into different languages. Created with Svelte and NodeJS, uses a Puppeteer based backend for data scraping to bypass an API key. '} 
          highlightColor={'#2C6A72'}
          // site={'https://translate-to-json.onrender.com/'} 
          repo={'https://github.com/bingland/translateToJSON'} />
        <ProjectBox 
          title={'React Trivia'} 
          desc={'Trivia Game made with React and the Open Trivia DB API. Assignment for DGM 3790 at Utah Valley University.'} 
          highlightColor={'#E93323'}
          site={'https://reacttrivia.netlify.app/'} 
          repo={'https://github.com/bingland/trivia-react'} />
        <ProjectBox 
          title={'1800 Clothing'} 
          desc={'1800s Clothing site is to provide period-accurate images of clothing from the 1800s. This is a group application that done for a Senior Project at Utah Valley University.'} 
          highlightColor={'#CCBCA6'}
          site={'https://1800clothing.org/'} 
          repo={'https://github.com/timetoady/1800clothingSvelte1'} />
      </div>
    </div>
  )
}

export default Portfolio
