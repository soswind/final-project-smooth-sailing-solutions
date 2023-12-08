import './App.css'
import { Routes, Route } from 'react-router-dom';
import Header from './Header'
import Login from './Login'
import Dashboard from './Dashboard'
import SignUpForm from './Signup';



function App() {
  return (
    <>
    <Header />
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<SignUpForm />} />
    </Routes>
  </>

  )
}

export default App;
