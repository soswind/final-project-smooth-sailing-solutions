import React, { useContext } from 'react';
import { ProvideAuth } from './login';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './Header'
import Login from './login'
import Dashboard from './Dashboard'
import PrivateRoute from './Authenticator';
import CaptainDashboard from './CaptainDashboard';
import Seafares from './Seafares';
import SignUpForm from './Signup';
import Splashscreen from '../Splashscreen';
import Landingpage from '../Landingpage';
import NavbarBottom from './NavbarBottom';


function App() {
  return (
    <ProvideAuth>
    <>
    <Header />
    <Routes>
        <Route path="/seafares" element={<Seafares />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard"
        element={<CaptainDashboard user_name="Sailor John" />} />
    </Routes>
    <Splashscreen />
    <Landingpage />
    <NavbarBottom />


  </>
  </ProvideAuth>

  )
}

export default App;
