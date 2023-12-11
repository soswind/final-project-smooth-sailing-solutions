import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './styles.css'

import Header from "./components/Header.jsx";
import Seafares from "./components/Seafares.jsx";
import NavbarBottom from "./components/NavbarBottom.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
    <a className="button-link seafare-button" href="/createseafare.html">Create New Seafare</a>
    <Seafares />
    <NavbarBottom />
    </BrowserRouter>
  </React.StrictMode>,
)