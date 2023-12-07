import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavbarTop from './NavbarTop'
import Navbar from '../Navbar'
import NavbarBottom from './NavbarBottom'


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

     
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    <div>
      <NavbarBottom />
    </div>
    </>
  )
}

export default App
