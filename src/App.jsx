import { useState } from 'react'
import './App.css'
import Seafares from './Seafares'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Seafares />
  </>
  )
}

export default App
