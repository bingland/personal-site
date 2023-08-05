import { useContext } from 'react'
import { createUseStyles } from 'react-jss'
import { ThemeContext } from '../../App'
import { GithubIcon, ViewSiteIcon, GalleryIcon, LinkedInIcon, EmailIcon, Checkmark } from '../../utilities/icons'
// import classNames from 'classnames'

interface ProjectBoxProps {
  text: string
  width?: string
  color?: string
  size?: 'xl' | 'lg' | 'md' | 'sm'
  href?: string
  icon?: 'github' | 'viewsite' | 'gallery' | 'linkedin' | 'email' | 'success'
  onClick?: () => void
}

function Button({color, text, width, size = 'md', icon, href, onClick, ...props}: ProjectBoxProps) {
  const theme = useContext(ThemeContext)
  
  const useStyles = createUseStyles({
    buttonContainer: {
      border: `1px solid ${theme.borderColor}`,
      borderRadius: 50,
      height: size === 'lg' ? 37 : size === 'md' ? 37 : size === 'sm' ? 30 : 35,
      display: 'flex',
      gap: 7,
      alignItems: 'center',
      backgroundColor: color || theme.themeColor,
      padding: `0 13px 0 ${size === 'lg' ? 4 : size === 'md' ? 4 : size === 'sm' ? 3 : 4}px`,
      cursor: 'pointer',
      width: width || 'min-content',
      whiteSpace: 'nowrap',
      fontSize: size === 'lg' ? 16 : size === 'md' ? 15 : size === 'sm' ? 13 : 15,
      fontFamily: `'Inter', sans-serif`,
      transition: 'opacity 0.2s ease-in-out',
      '&:hover': {
        opacity: 0.8,
      }
    },
    iconContainer: {
      // TODO: not always with bg color and border
      backgroundColor: theme.buttonFontColor,
      // border: `1px solid ${theme.borderColor}`,
      width: size === 'lg' ? 27 : size === 'md' ? 27 : size === 'sm' ? 25 : 28,
      height: size === 'lg' ? 27 : size === 'md' ? 27 : size === 'sm' ? 25 : 28,
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

  const clickButton = () => {
    if (href) window.open(href, '_blank')?.focus()
    onClick && onClick()
  }

  const getIconSize = () => {
    if (size === 'xl') return '21px'
    if (size === 'lg') return '19px'
    if (size === 'md') return '17px'
    if (size === 'sm') return '15px'
    return '17px'
  }

  return (
    <button className={css.buttonContainer} onMouseUp={clickButton}>
      <div className={css.iconContainer}>
        {icon === 'github' && <GithubIcon color={color || theme.themeColor} width={getIconSize()} height={getIconSize()} />}
        {icon === 'viewsite' && <ViewSiteIcon color={color || theme.themeColor} width={getIconSize()} height={getIconSize()} />}
        {icon === 'gallery' && <GalleryIcon color={color || theme.themeColor} width={getIconSize()} height={getIconSize()} />}
        {icon === 'linkedin' && <LinkedInIcon color={color || theme.themeColor} width={getIconSize()} height={getIconSize()} />}
        {icon === 'email' && <EmailIcon color={color || theme.themeColor} width={getIconSize()} height={getIconSize()} />}
        {icon === 'success' && <Checkmark color={color || theme.themeColor} width={getIconSize()} height={getIconSize()} />}
      </div>
      <div className={css.text}>{text}</div>
    </button>
  )
}

export default Button
