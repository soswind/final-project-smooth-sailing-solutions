import './App.css'
import { Routes, Route } from 'react-router-dom';
import Header from './Header'
import Login from './login'
import Dashboard from './Dashboard'
import SignUpForm from './Signup';
import Splashscreen from '../Splashscreen';
import Landingpage from '../Landingpage';
import NavbarBottom from './NavbarBottom';



function App() {
  return (
    <>
    <Header />
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<SignUpForm />} />
    </Routes>
    <Splashscreen />
    <Landingpage />
    <NavbarBottom />


  </>

  )
}

export default App;
