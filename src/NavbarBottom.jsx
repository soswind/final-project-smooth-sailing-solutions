import React from 'react';

export default function NavbarBottom() {
    return (
        <><div className="footer-container">
            <div className="footer-logo">
                <img src="../src/images/hvid-sailmore-logo.svg" className="footer-img"></img>
            </div>
            <div className="footer-info">
                <h3>Contact</h3>
                <ul>
                    <li>Phone: 0045 66 66 66 66</li>
                    <li>E-mail: sailmore@mail.dk</li>
                    <li>CVR: 456789</li>
                </ul>
            </div>
            <div className="footer-address">
                <h3>Address</h3>
                <ul>
                    <li>Sailvej 67</li>
                    <li>8000 Aarhus C</li>
                    <li>Denmark</li>
                </ul>
            </div>
            <div className="footer-links">
                <h3>Important links</h3>
                <ul>
                    <li><a href="/">Create Profile</a></li>
                    <li><a href="/">Login</a></li>
                    <li><a href="/">All seafares</a></li>
                </ul>
            </div>
        </div><div className="footer-bottom">
                <p>© 2023 Sailmore. All rights reserved.</p>
            </div></>
    )
}