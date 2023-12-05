import { useState } from 'react'
import './App.css'
import Header from './Header'
import Seafares from './Seafares'
import NewSeafare from './NewSeafare'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <NewSeafare />
  </>
  )
}

export default App
