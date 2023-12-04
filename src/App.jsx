import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Login from './login'
import ChatComponent from './ChatComponent'
import ChatMessage from './ChatMessage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <ChatMessage />
    <ChatComponent />
  </>
  )
}

export default App
