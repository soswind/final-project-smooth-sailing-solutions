import { useState } from 'react'
import './App.css'
import Seafares from './Seafares'
import Header from './Header'


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
