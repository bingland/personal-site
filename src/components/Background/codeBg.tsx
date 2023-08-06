import { useContext } from 'react'
import { createUseStyles } from 'react-jss'

import { ThemeContext } from '../../App'
import useMousePosition from '../../utilities/useMousePosition'

function CodeBG () {
  const theme = useContext(ThemeContext)
  const mousePosition = useMousePosition()
  const defaultPercent = '-15%'

  const calcLeftOffset = () => {
    if (mousePosition.x == null || mousePosition.y == null) return defaultPercent
    const xOffset = Math.abs((mousePosition.x) / 215)

    const result = '-' + xOffset + '%'
    console.log(result)
    return result
    
  }
  const calcTopOffset = () => {
    if (mousePosition.x == null || mousePosition.y == null) return defaultPercent
    const yOffset = Math.abs((mousePosition.y) / 215)

    const result = '-' + yOffset + '%'
    // console.log(result)
    return result
    
  }

  const useStyles = createUseStyles({
    codeBgContainer: {
      width: '100vw',
      height: '100vh',
      position: 'fixed',
      top: 0,
      left: 0,
    },
    codeText: {
      fontSize: 85,
      fontWeight: 'bold',
      fontFamily: `'Roboto Mono', monospace`,
      width: '200%',
      position: 'absolute',
      left: '-20%',
      top: '-15%',
      transition: 'top 0.7s linear, left 0.7s linear',
      color: theme.fontColor,
      // opacity: 0.015,
      overflowWrap: 'break-word',
    }
  })
  const css = useStyles()

  const codeText = `
    if (type === 'three' && typeof value === 'object') { return ( <div className={ css(this.styles.wrapper, this.styles.threeWrapper)}><div onClick={() => action({ email: !value.email, push: value.push, sms: value.sms }, valueName, id)} className={css(this.styles.cell, this.styles.borderRightCell, value.email && !disabled && this.styles.activeCell )}> {intl.formatMessage({ id: 'form.globalnotifs.email' })}</div><div
    onClick={() => action({ email: value.email, push: !value.push, sms: value.sms }, valueName, id)} className={css(this.styles.cell, this.styles.borderRightCell, value.push && !disabled && this.styles.activeCell)}>{intl.formatMessage({ id: 'form.notificationsPush' })}</div>
    <div onClick={() => action({ email: value.email, push: value.push, sms: !value.sms }, valueName, id)} className={css(this.styles.cell, value.sms && !disabled && this.styles.activeCell)}>{intl.formatMessage({ id: 'form.notificationsSMS' })}</div></div>);}
  `

  return (
    <div className={css.codeBgContainer} style={{...theme.animations.fadeIn,}}>
      <div className={css.codeText} style={{ 
        left: defaultPercent, 
        top: defaultPercent,
        opacity: 0.026,
      }}>
        {codeText}
      </div>
    </div>
  )
}

export default CodeBG 
