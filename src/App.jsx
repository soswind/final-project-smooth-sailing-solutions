import React, { useContext } from 'react';
import { ProvideAuth } from './login';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './Header'
import Login from './login'
import Dashboard from './Dashboard'
import PrivateRoute from './Authenticator';


function App() {
  return (
    <ProvideAuth>
    <>
    <Header />
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard"
        element={<PrivateRoute element={<Dashboard />} />} />
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
