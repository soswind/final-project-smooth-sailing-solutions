import { useState } from 'react'

import SignUpForm from '../Signup'


function App() {
    const [count, setCount] = useState(0)
  
    return (
      <>
    <div>
      <SignUpForm />
    </div>

        </>
    )
}