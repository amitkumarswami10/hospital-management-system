import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem("authToken"); // Check if user is authenticated
    return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
