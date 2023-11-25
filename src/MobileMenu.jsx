import './App.css';
import reactLogo from './assets/react.svg'

function MobileMenu() {

  return(
    <>
    <nav className='mobile-nav'>
            <ul className="mobile-nav-links">
                <li><a href="/">All Seafares</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Good To Know</a></li>
                <li><a href="/">Sign Up</a></li>
                <li className="mobile-login-button"><a href="/">Login</a></li>
            </ul>
        </nav>
    </>
  )
};



export default MobileMenu