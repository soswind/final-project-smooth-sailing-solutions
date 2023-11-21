import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavbarTop from './NavbarTop'
import Navbar from '../Navbar'
import Header from '../Header'
import Landingpage from '../Landingpage'
import CarrouselLandingpage from '../CarrouselLandingpage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <NavbarTop />
    </div>

    <div>
      <Navbar />
    </div>
  
    <div>
      <Header />  
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
