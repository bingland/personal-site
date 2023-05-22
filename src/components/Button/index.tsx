import { useContext } from 'react'
import { createUseStyles } from 'react-jss'
import { ThemeContext } from '../../App'
import { GithubIcon, ViewSiteIcon, GalleryIcon, LinkedInIcon, EmailIcon } from '../../utilities/icons'
// import classNames from 'classnames'

interface ProjectBoxProps {
  text: string
  width?: string
  color?: string
  size?: string
  icon?: 'github' | 'viewsite' | 'gallery' | 'linkedin' | 'email'
}

function Button({color, text, width, size, icon, ...props}: ProjectBoxProps) {
  const theme = useContext(ThemeContext)
  
  const useStyles = createUseStyles({
    buttonContainer: {
      border: `1px solid ${theme.borderColor}`,
      borderRadius: 50,
      height: 40,
      display: 'flex',
      gap: 7,
      alignItems: 'center',
      backgroundColor: color || theme.themeColor,
      padding: '0 13px 0 5px',
      cursor: 'pointer',
      width: width || 'min-content',
      whiteSpace: 'nowrap',
      fontSize: 16,
    },
    iconContainer: {
      // TODO: not always with bg color and border
      backgroundColor: theme.buttonFontColor,
      border: `1px solid ${theme.borderColor}`,
      width: 30,
      height: 30,
      borderRadius: 30,
      display: 'grid',
      placeItems: 'center',
    },
    text: {
      fontWeight: 'bold',
      color: theme.buttonFontColor,
    }
  })
  const css = useStyles()

  return (
    <button className={css.buttonContainer}>
      <div className={css.iconContainer}>
        {icon === 'github' && <GithubIcon color={color || theme.themeColor} width={'19px'} height={'19px'} />}
        {icon === 'viewsite' && <ViewSiteIcon color={color || theme.themeColor} width={'19px'} height={'19px'} />}
        {icon === 'gallery' && <GalleryIcon color={color || theme.themeColor} width={'19px'} height={'19px'} />}
        {icon === 'linkedin' && <LinkedInIcon color={color || theme.themeColor} width={'19px'} height={'19px'} />}
        {icon === 'email' && <EmailIcon color={color || theme.themeColor} width={'19px'} height={'19px'} />}
      </div>
      <div className={css.text}>{text}</div>
    </button>
  )
}

export default Button
