import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './styles.css'

import Header from "./components/Header.jsx";
import Economy from "./components/economy.jsx";
import NavbarBottom from "./components/NavbarBottom.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
    <Economy />
    <NavbarBottom />
    </BrowserRouter>
  </React.StrictMode>,
)