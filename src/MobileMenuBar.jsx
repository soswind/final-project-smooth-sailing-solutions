import './App.css'
import reactLogo from './assets/react.svg'
import burgerMenu from './images/burger-menu.png'

function MobileMenuBar() {

  return(
    <>
      <nav className='mobile-nav-bar'>
        <img src={burgerMenu}></img>
      </nav>
    </>
  )
}

export default MobileMenuBar;