import { useState } from 'react'
import './App.css'
import Header from './Header'
import { Routes, Route } from 'react-router-dom';
import Header from './Header'
import Login from './login'
import Dashboard from './Dashboard'



function App() {
  return (
    <>
    <Header />
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </>

  )
}

export default App;
