

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import Chat from '../Chat.jsx'
import Login from './Login.jsx'
import SignUpForm from '../Signup.jsx'
import NavbarTop from './NavbarTop.jsx'
import MobileMenu from './MobileMenu.jsx'
import Landingpage from '../Landingpage.jsx'
import Header from '../Splashscreen.jsx'
import Navbar from '../Navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavbarTop/>
    <MobileMenu/>
    <Header/>
    <SignUpForm/>
    <Landingpage/>
  </React.StrictMode>
)
