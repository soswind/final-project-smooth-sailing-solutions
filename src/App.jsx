import { useState } from 'react'
import './App.css'
import Header from './Header'
import { Routes, Route } from 'react-router-dom';
import Login from './login'
import Dashboard from './Dashboard'
import Seafares from './Seafares'



function App() {
  return (
    <>
    <Header />
    <Seafares />
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </>

  )
}

export default App;
