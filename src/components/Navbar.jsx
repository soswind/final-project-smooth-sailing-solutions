import React from "react"


export default function Navbar() {
    return (
        <nav className="desktop-nav">
            <ul className="nav-links">
                <li><a href="/seafares.html">All Seafares</a></li>
                <li><a href="#">About</a></li>
                <li><a href="/info.html">Good To Know</a></li>
                <li><a href="/signup.html">Sign Up</a></li>
            </ul>
            <a className="login-button" href="/login.html">Login</a>
        </nav>
    
    )
}

