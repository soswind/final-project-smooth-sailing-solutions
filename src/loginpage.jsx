import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './styles.css'

import Header from "./components/Header.jsx";
import Login from "./components/login.jsx";
import NavbarBottom from "./components/NavbarBottom.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
    <Login />
    <NavbarBottom />
    </BrowserRouter>
  </React.StrictMode>,
)