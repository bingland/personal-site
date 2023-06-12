import { useContext } from 'react'
import { createUseStyles } from 'react-jss'
import { ThemeContext } from '../../App'
import Button from '../../components/Button'
import Carousel from 'nuka-carousel'

import profilePic from '../../images/photosessSquare.jpg'

interface RecommendationProps {
  title: string
  text: string
  giverImg?: any
  giverName: string
  giverPosition: string
}

function Contact() {
  const theme = useContext(ThemeContext)
  
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
      // borderLeft: `10px solid ${theme.themeColor}`
    },
    mainBox: {
      border: `1px solid ${theme.borderColor}`,
      borderRadius: 49,
      overflow: 'hidden',
      display: 'grid',
      gridTemplateColumns: '300px 1fr',
      width: 850,
      height: 440,
    },
    connectArea: {
      borderRight: `1px solid ${theme.borderColor}`,
    },
    profileVisual: {
      width: '100%',
      background: theme.themeColor,
      borderRadius: '48px 0 0 0',
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
      marginTop: 60,
    },
    linkItem: {
      marginTop: 10,
      display: 'grid',
      alignItems: 'center',
    },
    recommendationArea: {
      // width: '100%',
      maxWidth: 550,
      position: 'relative',
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

  const Recommendation = ({title, text, giverImg, giverName, giverPosition}: RecommendationProps) => 
    <div className={css.recommendation}>
      <div className={css.recommendationTitle}>{title}</div>
      <div className={css.recommendationText}>{text}</div>
      <div className={css.recommendationGiver}>
        <div className={css.giverPic} />
        <div>
          <div className={css.giverName}>{giverName}</div>
          <div className={css.giverPosition}>{giverPosition}</div>
        </div>
      </div>
    </div>
  

  return (
    <div className={css.contactContainer}>
      <div className={css.mainBox}>
        <div className={css.connectArea}>
          <div className={css.profileVisual}>
            <img className={css.profileVisualImg} src={profilePic} alt={'Connect with Brayden England'} />
          </div>
          <div className={css.linkArea}>
            <div className={css.linkItem}>
              <Button text={'Connect on LinkedIn'} icon={'linkedin'} color={'#0070ce'} width={'215px'} />
            </div>
            <div className={css.linkItem}>
              <Button text={'Check out my GitHub'} icon={'github'} color={'#4B4B4B'} width={'215px'} />
            </div>
            <div className={css.linkItem}>
              <Button text={'Send me an email'} icon={'email'} color={'#E3421E'} width={'215px'} />
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
              title={'Highly Skilled and Professional'}
              text={`
                Brayden started at Noke and immediately hit the ground running. He instantly dove in and learned our processes and asked insightful 
                questions so he could start working immediately. Shortly after starting work he was already contributing, opening PRs, and even adding 
                some awesome and advanced new features.
              `}
              giverName={'Mikey Johnston'}
              giverPosition={'Frontend Developer at Angel Studios'}
              />
            <Recommendation 
              title={'A Valuable Asset For Any Team'}
              text={`
                Not only is he a talented web developer but his design is incredible. He's done a lot of mock ups and UI redesign that has really changed 
                the look and feel of our website into something more user friendly, modern and appealing. He's a hard worker who's always willing to tackle 
                a new challenge and always delivers outstanding results.
              `}
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
              giverName={'Kyle Johnson'}
              giverPosition={'Software Engineer at Noke'}
              />
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Contact
