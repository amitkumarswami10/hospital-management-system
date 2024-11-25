import React, { useState } from "react";
import "../Dashboard.css"; // For styling the appointments page

function Appointments() {
    const [appointments, setAppointments] = useState([
        { id: 1, patientName: "John Doe", doctor: "Dr. Smith", date: "2024-11-26", time: "10:00 AM" },
        { id: 2, patientName: "Jane Smith", doctor: "Dr. Taylor", date: "2024-11-27", time: "11:00 AM" },
        { id: 3, patientName: "Mary Johnson", doctor: "Dr. Adams", date: "2024-11-28", time: "2:00 PM" },
    ]);

    const [formData, setFormData] = useState({
        patientName: "",
        doctor: "",
        date: "",
        time: "",
    });
    const [editMode, setEditMode] = useState(false);
    const [editId, setEditId] = useState(null);

    // Handle input changes in the form
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission for adding or updating appointments
    const handleSubmit = (e) => {
        e.preventDefault();
        if (editMode) {
            // Update appointment
            const updatedAppointments = appointments.map((appointment) =>
                appointment.id === editId ? { ...appointment, ...formData } : appointment
            );
            setAppointments(updatedAppointments);
        } else {
            // Add new appointment
            const newAppointment = {
                id: appointments.length + 1,
                ...formData,
            };
            setAppointments([...appointments, newAppointment]);
        }
        setFormData({ patientName: "", doctor: "", date: "", time: "" });
        setEditMode(false);
        setEditId(null);
    };

    // Handle editing an appointment
    const handleEdit = (id) => {
        const appointment = appointments.find((appointment) => appointment.id === id);
        setFormData({
            patientName: appointment.patientName,
            doctor: appointment.doctor,
            date: appointment.date,
            time: appointment.time,
        });
        setEditMode(true);
        setEditId(id);
    };

    // Handle deleting an appointment
    const handleDelete = (id) => {
        const filteredAppointments = appointments.filter((appointment) => appointment.id !== id);
        setAppointments(filteredAppointments);
    };

    return (
        <div className="appointments">
            <h2>Appointments Management</h2>

            {/* Appointment Form */}
            <div className="card shadow mb-4">
                <div className="card-body">
                    <h5>{editMode ? "Edit Appointment" : "Add New Appointment"}</h5>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="patientName" className="form-label">Patient Name</label>
                            <input
                                type="text"
                                id="patientName"
                                name="patientName"
                                className="form-control"
                                value={formData.patientName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="doctor" className="form-label">Doctor</label>
                            <input
                                type="text"
                                id="doctor"
                                name="doctor"
                                className="form-control"
                                value={formData.doctor}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="date" className="form-label">Date</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                className="form-control"
                                value={formData.date}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="time" className="form-label">Time</label>
                            <input
                                type="time"
                                id="time"
                                name="time"
                                className="form-control"
                                value={formData.time}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                            {editMode ? "Update Appointment" : "Add Appointment"}
                        </button>
                    </form>
                </div>
            </div>

            {/* Appointment List */}
            <div className="card shadow">
                <div className="card-body">
                    <h5>Appointments List</h5>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Patient Name</th>
                                <th>Doctor</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointments.map((appointment) => (
                                <tr key={appointment.id}>
                                    <td>{appointment.patientName}</td>
                                    <td>{appointment.doctor}</td>
                                    <td>{appointment.date}</td>
                                    <td>{appointment.time}</td>
                                    <td>
                                        <button
                                            className="btn btn-warning me-2"
                                            onClick={() => handleEdit(appointment.id)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => handleDelete(appointment.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Appointments;
