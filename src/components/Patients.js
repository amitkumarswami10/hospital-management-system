import React, { useState } from "react";
import "../Dashboard.css";

function Patients() {
    const [activeSubTab, setActiveSubTab] = useState("manage");
    const [patients, setPatients] = useState([]); // Shared state for patient records

    // Add a new patient to the records
    const addPatient = (newPatient) => {
        setPatients((prevPatients) => [...prevPatients, newPatient]);
    };

    return (
        <div className="patients">
            <h2>Patients Management</h2>

            {/* Tabs Navigation */}
            <div className="patients-tabs">
                <button
                    className={activeSubTab === "manage" ? "active" : ""}
                    onClick={() => setActiveSubTab("manage")}
                >
                    Manage Patient Records
                </button>
                <button
                    className={activeSubTab === "profiles" ? "active" : ""}
                    onClick={() => setActiveSubTab("profiles")}
                >
                    View Profiles
                </button>
                <button
                    className={activeSubTab === "add" ? "active" : ""}
                    onClick={() => setActiveSubTab("add")}
                >
                    Add New Patients
                </button>
            </div>

            {/* Tab Content */}
            <div className="patients-content">
                {activeSubTab === "manage" && (
                    <ManagePatients patients={patients} />
                )}
                {activeSubTab === "add" && (
                    <AddPatient addPatient={addPatient} />
                )}
            </div>
        </div>
    );
}

function ManagePatients({ patients }) {
    return (
        <div>
            <h3>Manage Patient Records</h3>
            {patients.length === 0 ? (
                <p>No patients found. Add new patients to see them here.</p>
            ) : (
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Contact</th>
                            <th>Condition</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map((patient, index) => (
                            <tr key={index}>
                                <td>{patient.id}</td>
                                <td>{patient.name}</td>
                                <td>{patient.age}</td>
                                <td>{patient.contact}</td>
                                <td>{patient.condition}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

function AddPatient({ addPatient }) {
    const [form, setForm] = useState({
        id: "",
        name: "",
        age: "",
        contact: "",
        condition: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addPatient(form); // Add new patient to shared state
        alert("Patient added successfully!");
        setForm({ id: "", name: "", age: "", contact: "", condition: "" }); // Reset form
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="id" className="form-label">
                    ID
                </label>
                <input
                    type="number"
                    id="id"
                    name="id"
                    className="form-control"
                    value={form.id}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">
                    Age
                </label>
                <input
                    type="number"
                    id="age"
                    name="age"
                    className="form-control"
                    value={form.age}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="contact" className="form-label">
                    Contact
                </label>
                <input
                    type="text"
                    id="contact"
                    name="contact"
                    className="form-control"
                    value={form.contact}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="condition" className="form-label">
                    Condition
                </label>
                <input
                    type="text"
                    id="condition"
                    name="condition"
                    className="form-control"
                    value={form.condition}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit" className="btn btn-success">
                Add Patient
            </button>
        </form>
    );
}

export default Patients;
