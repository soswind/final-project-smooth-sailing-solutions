import React, { useContext } from 'react';
import { ProvideAuth } from './login';
import { Routes, Route } from 'react-router-dom';
import Login from './login'
import Dashboard from './Dashboard'
import FindGaster from './FindGaster';
import Login from './login'
import Dashboard from './Dashboard'
import Seafares from './Seafares'
import './App.css'
import Header from './Header'
import Economy from './economy'
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
    <Seafares />
    <Routes>
        <Route path="/seafares" element={<Seafares />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard"
        element={<CaptainDashboard user_name="Sailor John" />} />
    </Routes>
  </>
  </ProvideAuth>

  )
}

export default App;
