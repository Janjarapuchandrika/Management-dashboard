import { useState } from "react";

const EditRecord = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    status: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Record Updated Successfully");
  };

  return (
    <div className="container mt-4">
      <h2>Edit Record</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="form-control mb-3"
          value={formData.name}
          onChange={handleChange}
        />

        <select
          name="category"
          className="form-select mb-3"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="">Select Category</option>
          <option value="HR">HR</option>
          <option value="IT">IT</option>
          <option value="Finance">Finance</option>
        </select>

        <select
          name="status"
          className="form-select mb-3"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="">Select Status</option>
          <option value="Active">Active</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
        </select>

        <button className="btn btn-warning">
          Update Record
        </button>
      </form>
    </div>
  );
};

export default EditRecord;