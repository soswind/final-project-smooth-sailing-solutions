import React from "react"


export default function Navbar() {
    return (
        <nav>
            <ul className="nav-links">
                <li><a href="/">All Seafares</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Good To Know</a></li>
                <li><a href="/">Sign Up</a></li>
                <li className="login-button"><a href="/">Login</a></li>
            </ul>
        </nav>
    )
}

