import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import "../Login.css"; // Add this custom CSS file

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleLogin = (e) => {
        e.preventDefault();

        // Simulate a server request with a delay
        setTimeout(() => {
            if (username === "admin" && password === "password") {
                login();
                navigate("/dashboard");
            } else {
                alert("Invalid credentials. Please try again.");
            }
        }, 1000);
    };

    return (
        <div className="login-page">
            <div className="login-container">
                {/* Left Section with Image */}
                <div className="login-image">
                    <img
                        src="https://acsonnet.com/wp-content/uploads/2021/05/hospital-management-system-1.jpg" // Replace with a hospital-related image
                        alt="Hospital Management"
                        className="img-fluid"
                    />
                </div>
                {/* Right Section with Form */}
                <div className="login-form-container">
                    <div className="login-card">
                        <h2 className="login-title">Welcome Back</h2>
                        <p className="login-subtitle">Log in to manage your hospital system.</p>
                        <form onSubmit={handleLogin}>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    className="form-control"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="Enter your username"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    className="form-control"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary w-100 mt-4">
                                Login
                            </button>
                        </form>
                        <p className="login-footer mt-3">
                            © 2024 Hospital Management System
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
