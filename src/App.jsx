import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Login from './login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
<Login />
  </>
  )
}

export default App
