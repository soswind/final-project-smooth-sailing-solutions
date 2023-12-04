import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Economy from './economy'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Economy />
  </>
  )
}

export default App
