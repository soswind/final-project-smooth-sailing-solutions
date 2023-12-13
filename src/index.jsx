import React from "react";
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './styles.css'

import InfoBanner from "./components/InfoBanner";
import Header from "./components/Header.jsx";
import NavbarBottom from "./components/NavbarBottom.jsx";

import Splashscreen from "./components/Splashscreen.jsx";
import Landingpage from "./components/Landingpage.jsx";
import Seafares from "./components/Seafares.jsx";
import NewSeafare from "./components/NewSeafare.jsx";
import Economy from "./components/economy.jsx";
import SignUpForm from "./components/Signup.jsx";
import Login from "./components/login.jsx";
import CaptainDashboard from "./CaptainDashboard.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <InfoBanner />
    <Header />
    <Routes>
    <Route path="/" element={<><Splashscreen /><Landingpage /></>} exact />
    <Route path="/seafares" element={<Seafares />} />
    <Route path="/createseafare" element={<NewSeafare />} />
    <Route path="/info" element={<Economy />} />
    <Route path="/signup" element={<SignUpForm />} />
    <Route path="/signin" element={<Login />} />
    <Route path="/dashboard"
    element={<CaptainDashboard user_name="Karl Jensen" />} />
</Routes>
    <NavbarBottom />
    </BrowserRouter>
  </React.StrictMode>,
)