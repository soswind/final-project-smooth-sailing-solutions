import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './styles.css'

import Header from "./components/Header.jsx";
import Seafares from "./components/NewSeafare.jsx";
import NavbarBottom from "./components/NavbarBottom.jsx";
import NewSeafare from "./components/NewSeafare.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
    <NewSeafare />
    <NavbarBottom />
    </BrowserRouter>
  </React.StrictMode>,
)