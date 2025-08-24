import { useContext } from 'react'
import { createUseStyles } from 'react-jss'
import { ThemeContext } from '../../App'
import { GithubIcon, ViewSiteIcon, GalleryIcon, LinkedInIcon, EmailIcon, Checkmark, ForwardsArrow } from '../../utilities/icons'
// import classNames from 'classnames'

interface ProjectBoxProps {
  text: string
  width?: string
  color?: string
  size?: 'xl' | 'lg' | 'md' | 'sm'
  href?: string
  icon?: 'github' | 'viewsite' | 'gallery' | 'linkedin' | 'email' | 'success' | 'forwardsArrow'
  onClick?: () => void
}

function Button({color, text, width, size = 'md', icon, href, onClick, ...props}: ProjectBoxProps) {
  const theme = useContext(ThemeContext)

  const getContainerHeight = () => {
    if (size === 'xl') return 40
    if (size === 'lg') return 37
    if (size === 'md') return 37
    if (size === 'sm') return 30
    return 35
  }

  const getContainerPadding = () => {
    if (size === 'xl') return "20px 15px 20px 5px";
    if (size === 'lg') return "0 13px 0 4px"
    if (size === 'md') return "0 13px 0 4px"
    if (size === 'sm') return "0 13px 0 3px"
    return "0 13px 0 4px"
  }

  const getContainerFontSize = () => {
    if (size === 'xl') return 18
    if (size === 'lg') return 16
    if (size === 'md') return 15
    if (size === 'sm') return 13
    return 15
  }

  const getIconContainerSize = () => {
    if (size === 'xl') return 32
    if (size === 'lg') return 27
    if (size === 'md') return 27
    if (size === 'sm') return 25
    return 28
  }

  const getIconSize = () => {
    if (size === 'xl') return '21px'
    if (size === 'lg') return '19px'
    if (size === 'md') return '17px'
    if (size === 'sm') return '15px'
    return '17px'
  }
  const useStyles = createUseStyles({
    buttonContainer: {
      border: `1px solid ${theme.borderColor}`,
      borderRadius: 50,
      height: getContainerHeight(),
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      backgroundColor: color || theme.themeColor,
      padding: getContainerPadding(),
      cursor: 'pointer',
      width: width || 'min-content',
      whiteSpace: 'nowrap',
      fontSize: getContainerFontSize(),
      fontFamily: `'Open Sans', sans-serif`, // body
      transition: 'opacity 0.2s ease-in-out',
      '&:hover': {
        opacity: 0.8,
      }
    },
    iconContainer: {
      // TODO: not always with bg color and border
      backgroundColor: theme.buttonFontColor,
      // border: `1px solid ${theme.borderColor}`,
      width: getIconContainerSize(),
      height: getIconContainerSize(),
      borderRadius: 999,
      display: 'grid',
      placeItems: 'center',
    },
    text: {
      fontWeight: 'bold',
      color: theme.buttonFontColor,
      marginBottom: 2,
    }
  })
  const css = useStyles()

  const clickButton = () => {
    if (href) window.open(href, '_blank')?.focus()
    onClick && onClick()
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
        {icon === 'forwardsArrow' && <ForwardsArrow color={color || theme.themeColor} width={getIconSize()} height={getIconSize()} />}
      </div>
      <div className={css.text}>{text}</div>
    </button>
  )
}

export default Button
