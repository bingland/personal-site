import { useState, useContext } from 'react'
import { createUseStyles } from 'react-jss'

import { ThemeContext } from '../../App'
import useMousePosition from '../../utilities/useMousePosition'

import CodeBG from './codeBg'
import LogoBg from './logoBg'
import CirclesBG from './circlesBg'
// import { hexToRGBA } from '../../utilities'

interface BackgroundProps {
  currentPage: PageTypes
}

function Background ({ currentPage }: BackgroundProps) {
  const theme = useContext(ThemeContext)
  const offset: number = 10
  const angleMovement: number = 20
  const mousePosition = useMousePosition()

  const calcGradientAngle = () => {
    if (mousePosition.x == null || mousePosition.y == null) return offset
    const xOffset = Math.floor(Math.abs((mousePosition.x) / angleMovement) + offset)
    const yOffset = Math.floor(Math.abs((mousePosition.y) / angleMovement))
    return xOffset - yOffset
  }

  const useStyles = createUseStyles({
    backgroundContainer: {
      zIndex: -1,
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      transition: 'background 1s ease, opacity 1s ease-in-out',
      // opacity: 0.5,
      // borderLeft: `10px solid ${theme.themeColor}`
    },
  })
  const css = useStyles()

  return (
    <div 
      className={css.backgroundContainer}
      style={{
        // background: `linear-gradient(${calcGradientAngle()}deg, rgba(189,208,255,1) 0%, rgba(193,224,255,1) 49%, rgba(222,255,249,1) 100%)`,
        // background: `linear-gradient(${calcGradientAngle()}deg, rgba(173,255,243,1) 0%, rgba(253,255,176,1) 100%)`,
        // background: `linear-gradient(${calcGradientAngle()}deg, ${hexToRGBA('#0070ce', 0.72)} 0%, ${hexToRGBA('#6700ce', 0.19)} 100%)`,
        background: `linear-gradient(${calcGradientAngle()}deg, rgba(208,176,255,1) 0%, rgba(173,255,243,1) 100%)`,
        // background: `linear-gradient(${calcGradientAngle()}deg, rgba(201,217,255,1) 0%, rgba(207,231,255,1) 49%, rgba(227,255,250,1) 100%)`,
        // background: `linear-gradient(${calcGradientAngle()}deg, rgba(198,229,255,1) 0%, rgba(235,246,255,1) 100%)`,
        // opacity: currentPage !== 'landing' ? 0.7 : 1,
      }}>
      {currentPage === 'portfolio' && <CodeBG />}
      {currentPage === 'contact' && <LogoBg />}
      {currentPage === 'landing' && <CirclesBG />}
    </div>
  )
}

export default Background 
