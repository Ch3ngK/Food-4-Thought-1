import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import logo from './pictures/Food4Thought.png';
import chef from './pictures/chef.png';

function SignUp() {
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Prevents page reload
        if (!username || !email || !password || !confirmPassword) {
            alert("Please fill in all fields.");
        } else if (password !== confirmPassword) {
            alert("Passwords do not match.");
        } else {
            alert(`Sign up successful for ${username} with email ${email}`);
        // Reset fields after submission
            setUsername('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        }
    };

    return (
        <div className="SignUp">
        <div className="background-img-3">
            <div className="text-box-3">
            <img id="Chef-3" src={chef} alt="Chef Image" />
            <br />
            <img id="Logo" src={logo} alt="Food 4 Thought Logo" />
            <h2>Sign up</h2>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                />
                <br />
                <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
                <br />
                <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
                <br />
                <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                />
                <br />
                <button type="submit">Sign Up</button>
            </form>
            <br></br>
            <Link to="/">Back to Login</Link>
            </div>
        </div>
        </div>
  );
}

export default SignUp;