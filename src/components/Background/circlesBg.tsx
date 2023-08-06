import { useState, useContext } from 'react'
import { createUseStyles } from 'react-jss'
import classNames from 'classnames'

import { ThemeContext } from '../../App'

interface CodeBGProps {
  currentPage?: string
}

function LogoBg ({currentPage}: CodeBGProps) {
  const theme = useContext(ThemeContext)

  const useStyles = createUseStyles({
    // up and down motion for bubbles
    '@keyframes bobbing': {
      '0%': {
        transform: 'translate(0,0)',
        opacity: 0.035
      },
      '50%': {
        transform: 'translate(9px, -30px)',
        opacity: 0.05
      },
      '100%': {
        transform: 'translate(0,0)',
        opacity: 0.035
      },
    },
    "@keyframes pulsate": {
      from: {
        opacity: 1,
        transform: "scale(1)"
      },
      to: {
        opacity: 0,
        transform: "scale(2)"
      }
    },

    circlesBgContainer: {
      width: '100vw',
      height: '100vh',
      position: 'fixed',
      top: 0,
      left: 0,
    },
    circle: {
      animation: '$bobbing 10s infinite',
      // animation: "$pulsate 1s infinite ease",
      borderRadius: '50%',
      background: theme.themeColor,
      position: 'absolute',
      opacity: 0.035
    }
  })
  const css = useStyles()

  return (
    <div style={{...theme.animations.fadeIn}}>
      <div className={css.circlesBgContainer}>
        <div className={classNames(css.circle)} style={{animationDelay: '0.1s',width: 40, height: 40, left: '80%', top: '10%' }} />
        <div className={classNames(css.circle)} style={{animationDelay: '0.8s',width: 40, height: 40, left: '10%', top: '90%' }} />
        <div className={classNames(css.circle)} style={{animationDelay: '0.2s',width: 40, height: 40, left: '20%', top: '80%' }} />
        <div className={classNames(css.circle)} style={{animationDelay: '0.1s',width: 300, height: 300, left: '10%', top: '20%' }} />
        <div className={classNames(css.circle)} style={{animationDelay: '0.2s',width: 500, height: 500, left: '25%', bottom: '-18%' }} />
        <div className={classNames(css.circle)} style={{animationDelay: '0.6s',width: 1200, height: 1200, right: '-10%', top: '-30%' }} />
      </div>
    </div>
  )
}

export default LogoBg 
