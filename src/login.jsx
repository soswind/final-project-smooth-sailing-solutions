import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './App.css'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Sender login dataen til vores backend
        try {
            const response = await fetch('/api/backend.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email, password })
            });

            if (response.ok) {
                console.log("Login successful");
                history.push('/dashboard');
            } else {
                console.error("Error with login");
            }
        } catch(error) {
            console.error("Error logging in", error);
        }
    };
    
    return(
        <>
        <form id="login-form" onSubmit={handleSubmit}>
            <label className="input-item" htmlFor="email">E-mail:
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" className="input" />
            </label>
            <label className="input-item" htmlFor="password">Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" id="password" className="input" />
            </label>
            <div className="remember">
            <input type="checkbox" name="remember" id="remember" />
            <label htmlFor="remember">Remember me</label></div>
            <button type="submit" id="login-button" className="button">Login</button>
            <a href="http:/#"><button className="button button--white">New User</button></a>
        </form>
        </>
    )
}

export default Login