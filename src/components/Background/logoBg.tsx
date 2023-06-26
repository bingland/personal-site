import { useState, useContext } from 'react'
import { createUseStyles } from 'react-jss'

import { ThemeContext } from '../../App'
import { MainLogo } from '../../utilities/icons'

interface CodeBGProps {
  currentPage?: string
}

function LogoBg ({currentPage}: CodeBGProps) {
  const theme = useContext(ThemeContext)

  const useStyles = createUseStyles({
    logoBgContainer: {
      width: '100vw',
      height: '100vh',
      position: 'fixed',
      top: 0,
      left: 0,
      display: 'grid',
      placeItems: 'center',
      transform: 'rotate(140deg)',
      opacity: 0.04
    },
  })
  const css = useStyles()

  return (
    <div style={{...theme.animations.fadeIn}}>
      <div className={css.logoBgContainer}>
        <MainLogo color={theme.themeColor} width={'215%'} height={'215%'} />
      </div>
    </div>
  )
}

export default LogoBg 
