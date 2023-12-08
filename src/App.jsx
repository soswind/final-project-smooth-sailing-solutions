import React, { useContext } from 'react';
import { ProvideAuth } from './login';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './Header'
import Login from './login'
import Dashboard from './Dashboard'
import PrivateRoute from './Authenticator';
import CaptainDashboard from './CaptainDashboard';


function App() {
  return (
    <ProvideAuth>
    <>
    <Header />
    <CaptainDashboard user_name="Sailor John" />
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard"
        element={<PrivateRoute element={<CaptainDashboard />} />} />
    </Routes>
  </>
  </ProvideAuth>

  )
}

/* const PrivateRoute = ({ children }) => {
  const authContext = useContext(AuthContext);

  return authContext.authenticated ? children : <Navigate to="/login"/>;

} */

// Use navigate istedet for router

export default App
