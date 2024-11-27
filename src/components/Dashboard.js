import React, { useState } from "react";
import "../Dashboard.css";
import { useNavigate } from "react-router-dom";
import Patients from "./Patients";
import Appointments from "./Appointments";
import StaffManagement from "./StaffManagement";
import Analytics from "./Analytics";

function Dashboard() {
    const [activeTab, setActiveTab] = useState("patients");
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        if (window.confirm("Are you sure you want to log out?")) {
            localStorage.removeItem("authToken");
            navigate("/");
        }
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setSidebarOpen(false); // Close menu after selecting a tab on mobile
    };

    return (
        <div className="dashboard">
            {/* Header */}
            <header className="header">
                <div className="logo">
                    <img
                        src="https://img.freepik.com/premium-vector/hms-logo-hms-letter-hms-letter-logo-design-initials-hms-logo-linked-with-circle-uppercase-monogram-logo-hms-typography-technology-business-real-estate-brand_229120-74540.jpg"
                        alt="Logo"
                    />
                    <h2>Hospital Management System</h2>
                </div>
                <div className="header-actions">
                    <button
                        className="toggle-sidebar"
                        onClick={() => setSidebarOpen(!isSidebarOpen)}
                    >
                        ☰
                    </button>
                    <button className="logout-btn" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </header>

            {/* Sidebar/Menu */}
            <div className={`sidebar ${isSidebarOpen ? "show" : ""}`}>
                <ul>
                    <li
                        className={activeTab === "patients" ? "active" : ""}
                        onClick={() => handleTabClick("patients")}
                    >
                        Patients
                    </li>
                    <li
                        className={activeTab === "appointments" ? "active" : ""}
                        onClick={() => handleTabClick("appointments")}
                    >
                        Appointments
                    </li>
                    <li
                        className={activeTab === "staff" ? "active" : ""}
                        onClick={() => handleTabClick("staff")}
                    >
                        Staff Management
                    </li>
                    <li
                        className={activeTab === "analytics" ? "active" : ""}
                        onClick={() => handleTabClick("analytics")}
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
