import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import "../Login.css";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleLogin = (e) => {
        e.preventDefault();
        setTimeout(() => {
            if (username === "admin" && password === "password@123") {
                login();
                navigate("/dashboard");
            } else {
                alert("Invalid credentials. Please try again.");
            }
        }, 1000);
    };

    return (
        <div className="login-wrapper">
            <div className="login-container">
                {/* Left Section */}
                <div className="login-image">
                    <img
                        src="https://acsonnet.com/wp-content/uploads/2021/05/hospital-management-system-1.jpg" // Replace with an actual image URL
                        alt="Hospital Management"
                        className="responsive-img"
                    />
                </div>

                {/* Right Section */}
                <div className="login-form">
                    <h2 className="login-title">Welcome Back</h2>
                    <p className="login-subtitle">Log in to manage your hospital system</p>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        <button type="submit" className="btn-primary">
                            Login
                        </button>
                    </form>
                    <p className="footer">© 2024 Hospital Management System</p>
                </div>
            </div>
        </div>
    );
}

export default Login;
