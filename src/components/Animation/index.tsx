import { useContext } from 'react'
import { createUseStyles } from 'react-jss'

import { Keyframes } from '../../utilities/Keyframes'

import { ThemeContext } from '../../App'

function Animations() {
  const theme = useContext(ThemeContext)

  const useStyles = createUseStyles({
    
  })
  const css = useStyles()

  const fadeDownProps = {
    from: { 
      opacity: 0, 
      transform: 'translateY(-25px)', 
    }, 
    to: { 
      opacity: 1, 
      transform: 'translateY(0px)', 
    }
  }
  const fadeDownShortProps = {
    from: { 
      opacity: 0, 
      transform: 'translateY(-15px)', 
    }, 
    to: { 
      opacity: 1, 
      transform: 'translateY(0px)', 
    }
  }
  const fadeInProps = {
    from: { 
      opacity: 0, 
    }, 
    to: { 
      opacity: 1, 
    }
  }

  return (
    <>
      <Keyframes name="fadeDown" animationProps={fadeDownProps} />
      <Keyframes name="fadeDownShort" animationProps={fadeDownShortProps} />
      <Keyframes name="fadeIn" animationProps={fadeInProps} />
    </>
  )
}

export default Animations
