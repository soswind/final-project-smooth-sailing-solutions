import { useState } from 'react'
import './App.css'
import Header from './Header'
import Seafares from './Seafares'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Seafares />
  </>
  )
}

export default App
