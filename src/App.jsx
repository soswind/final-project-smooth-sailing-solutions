import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom';
import './App.css'
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

// Use navigate istedet for router

export default App
