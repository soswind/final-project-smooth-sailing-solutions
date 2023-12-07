import { useState } from 'react'
import './App.css'
import NavbarTop from './NavbarTop'
import Header from '../Splashscreen'
import Landingpage from '../Landingpage'
import CarrouselLandingpage from '../CarrouselLandingpage'
import SignUpForm from './Signup'
import MobileMenu from './MobileMenu'



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
      <Landingpage />
    </div>

    <div>
      <CarrouselLandingpage/>
    </div>
  </>
  )
}

export default App