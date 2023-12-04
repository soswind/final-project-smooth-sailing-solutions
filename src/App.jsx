import { useState } from 'react'
import './App.css'
import Header from './Header'
import ChatComponent from './ChatComponent'
import ChatMessage from './ChatMessage'
import SignUpForm from './Signup'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <ChatMessage />
    <ChatComponent />
    <SignUpForm />
  </>
  )
}

export default App;
