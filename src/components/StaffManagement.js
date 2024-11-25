import React, { useState } from "react";

function StaffManagement() {
    const [staff, setStaff] = useState([
        { id: 1, name: "John Doe", position: "Doctor", contact: "9876543210" },
        { id: 2, name: "Jane Smith", position: "Nurse", contact: "9876543211" },
        { id: 3, name: "Mary Johnson", position: "Administrator", contact: "9876543212" },
    ]);

    const [formData, setFormData] = useState({
        name: "",
        position: "",
        contact: "",
    });

    const [editMode, setEditMode] = useState(false);
    const [editId, setEditId] = useState(null);

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Add new staff or update existing staff
    const handleSubmit = (e) => {
        e.preventDefault();
        if (editMode) {
            // Update staff member
            const updatedStaff = staff.map((member) =>
                member.id === editId ? { ...member, ...formData } : member
            );
            setStaff(updatedStaff);
        } else {
            // Add new staff
            const newStaff = {
                id: staff.length + 1,
                ...formData,
            };
            setStaff([...staff, newStaff]);
        }
        setFormData({ name: "", position: "", contact: "" });
        setEditMode(false);
        setEditId(null);
    };

    // Handle editing staff data
    const handleEdit = (id) => {
        const staffMember = staff.find((member) => member.id === id);
        setFormData({ name: staffMember.name, position: staffMember.position, contact: staffMember.contact });
        setEditMode(true);
        setEditId(id);
    };

    // Handle deleting staff
    const handleDelete = (id) => {
        const filteredStaff = staff.filter((member) => member.id !== id);
        setStaff(filteredStaff);
    };

    return (
        <div className="staff-management">
            <h2>Staff Management</h2>

            {/* Staff Form for Adding or Editing */}
            <div className="card shadow mb-4">
                <div className="card-body">
                    <h5>{editMode ? "Edit Staff Member" : "Add New Staff Member"}</h5>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-control"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="position" className="form-label">Position</label>
                            <input
                                type="text"
                                id="position"
                                name="position"
                                className="form-control"
                                value={formData.position}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contact" className="form-label">Contact</label>
                            <input
                                type="text"
                                id="contact"
                                name="contact"
                                className="form-control"
                                value={formData.contact}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                            {editMode ? "Update Staff" : "Add Staff"}
                        </button>
                    </form>
                </div>
            </div>

            {/* Staff Table */}
            <div className="card shadow">
                <div className="card-body">
                    <h5>Staff List</h5>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Contact</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {staff.map((staffMember) => (
                                <tr key={staffMember.id}>
                                    <td>{staffMember.name}</td>
                                    <td>{staffMember.position}</td>
                                    <td>{staffMember.contact}</td>
                                    <td>
                                        <button className="btn btn-warning me-2" onClick={() => handleEdit(staffMember.id)}>
                                            Edit
                                        </button>
                                        <button className="btn btn-danger" onClick={() => handleDelete(staffMember.id)}>
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

export default StaffManagement;
