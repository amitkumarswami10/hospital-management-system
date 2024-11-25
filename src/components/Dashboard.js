import React, { useState } from "react";
import "../Dashboard.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Patients from "./Patients";
import Appointments from "./Appointments";
import StaffManagement from "./StaffManagement";
import Analytics from "./Analytics";

function Dashboard() {
    const [activeTab, setActiveTab] = useState("patients");
    const navigate = useNavigate(); // Initialize navigate here

    // Logout function
    const handleLogout = () => {
        if (window.confirm("Are you sure you want to log out?")) {
            localStorage.removeItem("authToken"); // Clear authentication token or session data
            navigate("/"); // Redirect to login page
        }
    };

    return (
        <div className="dashboard">
            {/* Header */}
            <header className="header">
                <div className="logo">
                    <img src="https://img.freepik.com/premium-vector/hms-logo-hms-letter-hms-letter-logo-design-initials-hms-logo-linked-with-circle-uppercase-monogram-logo-hms-typography-technology-business-real-estate-brand_229120-74540.jpg" alt="Hospital Logo" width="50" height="50" />
                    <h2>Hospital Management System</h2>
                </div>
                <button className="btn btn-danger logout-btn" onClick={handleLogout}>
                    Logout
                </button>
            </header>

            {/* Sidebar */}
            <div className="sidebar">
                <ul>
                    <li
                        className={activeTab === "patients" ? "active" : ""}
                        onClick={() => setActiveTab("patients")}
                    >
                        Patients
                    </li>
                    <li
                        className={activeTab === "appointments" ? "active" : ""}
                        onClick={() => setActiveTab("appointments")}
                    >
                        Appointments
                    </li>
                    <li
                        className={activeTab === "staff" ? "active" : ""}
                        onClick={() => setActiveTab("staff")}
                    >
                        Staff Management
                    </li>
                    <li
                        className={activeTab === "analytics" ? "active" : ""}
                        onClick={() => setActiveTab("analytics")}
                    >
                        Analytics
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="main-content">
                {activeTab === "patients" && <Patients />}
                {activeTab === "appointments" && <Appointments />}
                {activeTab === "staff" && <StaffManagement />}
                {activeTab === "analytics" && <Analytics />}
            </div>

            {/* Footer */}
            <footer className="footer">
                <p>&copy; 2024 Hospital Management System. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default Dashboard;
