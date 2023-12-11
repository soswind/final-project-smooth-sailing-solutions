
import burgerMenu from '../images/burger-menu.png'
import closeMenu from '../images/menu-close.png'
import React, { useState } from 'react';

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }

  return(
    <>
    <nav className='mobile-nav-bar'>
      <img onClick={toggleNavbar}
      src={isOpen ? closeMenu : burgerMenu}></img>
    </nav>
    {isOpen && (
      <nav className='mobile-nav'>
      <ul className="mobile-nav-links">
          <li><a href="/seafares.html">All Seafares</a></li>
          <li><a href="/about.html">About</a></li>
          <li><a href="/info.html">Good To Know</a></li>
          <li><a href="/signup.html">Sign Up</a></li>
          <li className="mobile-login-button"><a href="/login.html">Login</a></li>
      </ul>
  </nav>
    )}
    </>
  )
};



export default MobileMenu