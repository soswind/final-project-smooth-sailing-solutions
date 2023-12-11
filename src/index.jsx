import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

import Header from "./components/Header.jsx";
import Splashscreen from "./components/Splashscreen.jsx";
import Landingpage from "./Landingpage.jsx";
import NavbarBottom from "./components/NavbarBottom.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
    <Splashscreen />
    <Landingpage />
    <NavbarBottom />
    </BrowserRouter>
  </React.StrictMode>,
)