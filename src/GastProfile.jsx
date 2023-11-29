import React from "react";
import "./GastProfile.css";
import "./App.css";
import NavbarTop from "./NavbarTop";
import Navbar from "./Navbar"; 
import NavbarBottom from "./NavbarBottom";

function GastProfile() {
    return (
        <>
        <div>
        <NavbarTop />
        </div>
    
        <div>
        <Navbar />
        </div>
    
        <div className="gastprofile">
        <h1>Gast Profile</h1>
        <div className="card">
            <p>
            Edit <code>src/GastProfile.jsx</code> and save to test HMR
            </p>
        </div>
        <p className="read-the-docs">
            Click on the Vite and React logos to learn more
        </p>
        </div>
        <div>
        <NavbarBottom />
        </div>
        </>
    );
}