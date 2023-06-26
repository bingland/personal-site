import { useContext, useState } from 'react'
import { createUseStyles } from 'react-jss'
import { ThemeContext } from '../../App'
import Button from '../../components/Button'
import Carousel from 'nuka-carousel'

import profilePic from '../../images/photosessSquare.jpg'
import kylePic from '../../images/recs/kyle.jpg'
import mateoPic from '../../images/recs/mateo.jpg'
import mikeyPic from '../../images/recs/mikey.jpg'
import seanPic from '../../images/recs/sean.jpg'

interface RecommendationProps {
  title: string
  text: string
  giverImg?: any
  giverName: string
  giverPosition: string
}

function Contact() {
  const theme = useContext(ThemeContext)
  const [showCopyMsg, setShowCopyMsg] = useState<boolean>(false)
  const [showCopyErr, setShowCopyErr] = useState<boolean>(false)
  
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
    },
    mainBox: {
      border: `1px solid ${theme.borderColor}`,
      borderRadius: 25,
      overflow: 'hidden',
      display: 'grid',
      gridTemplateColumns: '300px 1fr',
      width: 850,
      height: 440,
      background: theme.backgroundColor,
      // boxShadow: `0px 9px ${theme.themeColor}`,
      boxShadow: theme.boxShadow,
      '@media (max-width: 920px)': {
        gridTemplateColumns: '300px',
        width: 'auto',
        height: 410,
      },
      '@media (max-width: 350px)': {
        gridTemplateColumns: '270px',
        width: 'auto',
      },
    },
    connectArea: {
      borderRight: `1px solid ${theme.borderColor}`,
      '@media (max-width: 920px)': {
        borderRight: 'none',
      },
    },
    profileVisual: {
      width: '100%',
      background: `linear-gradient(100deg, #17ACFF 0%, #A129FF 100%)`,
      display: 'grid',
      justifyContent: 'center',
      height: 150,
    },
    profileVisualImg: {
      width: 180,
      position: 'relative',
      top: 25,
      borderRadius: 180,
      border: `5px solid white`
    },
    linkArea: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      marginTop: 70,
    },
    linkItem: {
      marginTop: 10,
      display: 'grid',
      alignItems: 'center',
    },
    recommendationArea: {
      maxWidth: 550,
      position: 'relative',
      '@media (max-width: 920px)': {
        display: 'none',
      }
    },
    recommendation: {
      padding: 50,
    },
    recommendationTitle: {
      fontFamily: `'League Spartan', sans-serif`,
      fontSize: 24,
      fontWeight: 'bold',
    },
    recommendationText: {
      fontSize: 20,
      marginTop: 15,
    },
    recommendationGiver: {
      display: 'flex',
      gap: 10,
      marginTop: 25,
      alignItems: 'center',
    },
    giverPic: {
      width: 35,
      height: 35,
      borderRadius: 35,
      border: `1px solid ${theme.borderColor}`,
      background: 'grey',
      overflow: 'hidden',
    },
    giverPicImg: {
      width: '100%',
      height: '100%',
    },
    giverName: {
      fontFamily: `'League Spartan', sans-serif`,
      fontSize: 20,
      fontWeight: 'bold',
    },
    giverPosition: {
      fontSize: 12,
    },
  })
  const css = useStyles()

  const openLinkedin = () => {
    const url = 'https://www.linkedin.com/in/brayden-england/'
    window.open(url, '_blank')?.focus()
  }
  const openGithub = () => {
    const url = 'https://github.com/bingland'
    window.open(url, '_blank')?.focus()
  }
  const copyEmail = async () => {
    const email = 'bray.patriot@gmail.com'
    try {
      await navigator.clipboard.writeText(email)
      setShowCopyMsg(true)
      setTimeout(() => setShowCopyMsg(false), 2000)
    } catch (e) {
      setShowCopyErr(true)
      setTimeout(() => setShowCopyErr(false), 2000)
    }
  }

  const Recommendation = ({title, text, giverImg, giverName, giverPosition}: RecommendationProps) => 
    <div className={css.recommendation}>
      <div className={css.recommendationTitle}>{title}</div>
      <div className={css.recommendationText}>{text}</div>
      <div className={css.recommendationGiver}>
        <div className={css.giverPic}>
          <img className={css.giverPicImg} src={giverImg} alt="Recommender of review" />
        </div>
        <div>
          <div className={css.giverName}>{giverName}</div>
          <div className={css.giverPosition}>{giverPosition}</div>
        </div>
      </div>
    </div>
  

  return (
    <div className={css.contactContainer} style={{...theme.animations.fadeDown, animationDelay: '0.1s'}}>
      <div className={css.mainBox}>
        <div className={css.connectArea}>
          <div className={css.profileVisual}>
            <img className={css.profileVisualImg} src={profilePic} alt={'Connect with Brayden England'} loading={'lazy'} />
          </div>
          <div className={css.linkArea}>
            <div className={css.linkItem}>
              <Button 
                text={'Connect on LinkedIn'} 
                onClick={openLinkedin} 
                icon={'linkedin'} 
                size={'lg'} 
                color={'#0070ce'} 
                width={'230px'} />
            </div>
            <div className={css.linkItem}>
              <Button 
                text={'Check out my GitHub'} 
                onClick={openGithub} 
                icon={'github'} 
                size={'lg'} 
                color={'#4B4B4B'} 
                width={'230px'} />
            </div>
            <div className={css.linkItem}>
              <Button 
                text={showCopyErr ? `Couldn't Copy Email` : !showCopyMsg ? 'Send me an Email' : 'Copied to Clipboard'} 
                onClick={copyEmail}
                icon={showCopyMsg ? 'success' : 'email'} 
                size={'lg'} 
                color={'#E3421E'} 
                width={'230px'} />
            </div>
          </div>
        </div>
        <div className={css.recommendationArea}>
          <Carousel 
            dragging={false} 
            autoplay={true} 
            autoplayInterval={6000}
            speed={1000}
            wrapAround={true}
            slideWidth={'550px'}
            style={{
              width: '100%',
              maxWidth: '100%',
            }}
            defaultControlsConfig={{
              prevButtonStyle: { display: 'none' }, 
              nextButtonStyle: { display: 'none' },
              // containerClassName: css.recommendationContainer
            }}
            >

            <Recommendation 
              title={'A Valuable Asset For Any Team'}
              text={`
                Not only is he a talented web developer but his design is incredible. He's done a lot of mock ups and UI redesign that has really changed 
                the look and feel of our website into something more user friendly, modern and appealing. He's a hard worker who's always willing to tackle 
                a new challenge and always delivers outstanding results.
              `}
              giverImg={seanPic}
              giverName={'Sean Calkins'}
              giverPosition={'Mobile Application Developer at Tendo'}
              />
            <Recommendation 
              title={'Truly An Extraordinaire'}
              text={`
                He not only has a very keen eye for slick-looking design across user interfaces, he also has the advanced front end skills--React, JavaScript, 
                HTML, CSS, etc.--to make that design a reality. His strong work ethic, attention to detail, technical skills, collaborative approach, and 
                commitment to quality would make him a valuable asset to any organization.
              `}
              giverImg={mateoPic}
              giverName={'Matthew Johnston'}
              giverPosition={'Software Engineer at Noke'}
              />
            <Recommendation 
              title={'Standout Talent'}
              text={`
                Brayden's eye for design is out of this world! He took our basic web portal and made it amazing! All of his UX/UI designs are both beautiful 
                and refreshingly simplistic, and he is the best at creating simple and delightful user experiences. Brayden would be an asset to any team and 
                I highly recommend him for any frontend developer job.
              `}
              giverImg={kylePic}
              giverName={'Kyle Johnson'}
              giverPosition={'Software Engineer at Noke'}
              />
            <Recommendation 
              title={'An Excellent Collaborator'}
              text={`
                Brayden started at Noke and immediately hit the ground running. He instantly dove in and learned our processes and asked insightful 
                questions so he could start working immediately. Shortly after starting work he was already contributing, opening PRs, and even adding 
                some awesome and advanced new features.
              `}
              giverImg={mikeyPic}
              giverName={'Mikey Johnston'}
              giverPosition={'Frontend Developer at Angel Studios'}
              />
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Contact
