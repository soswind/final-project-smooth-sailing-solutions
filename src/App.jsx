import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Accordion from './Accordion'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Accordion title="Hewoo" description="works" />
  </>
  )
}

export default App
