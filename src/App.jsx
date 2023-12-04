import { useState } from 'react'
import './App.css'
import NavbarTop from './NavbarTop'
import Header from '../Splashscreen'
import Landingpage from '../Landingpage'
import CarrouselLandingpage from '../CarrouselLandingpage'
import SignUpForm from '../Signup'
import MobileMenu from './MobileMenu'
import Chat from '../Chat'
import MobileMenu from './MobileMenu'
import MobileMenuBar from './MobileMenuBar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <NavbarTop />
    </div>


    <div>
      <MobileMenu />
    </div>
  
    <div>
      <Header />  
    </div>

      <div>
        <SignUpForm />
      </div>

    <div>
      <Chat/>
    </div>


    <div>
      <Landingpage />
    </div>

    <div>
      <CarrouselLandingpage/>
    </div>
  </>
  )
}

export default App