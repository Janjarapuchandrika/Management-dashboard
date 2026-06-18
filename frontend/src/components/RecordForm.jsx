import { useState, useEffect } from "react";
import API from "../services/api";

const RecordForm = ({
  fetchRecords,
  editingRecord,
  setEditingRecord,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    status: "",
  });

  useEffect(() => {
    if (editingRecord) {
      setFormData({
        name: editingRecord.name || "",
        category: editingRecord.category || "",
        status: editingRecord.status || "",
      });
    }
  }, [editingRecord]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormData({
      name: "",
      category: "",
      status: "",
    });
    setEditingRecord(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingRecord) {
        await API.put(
          `/records/${editingRecord.id}`,
          formData
        );

        alert("Record Updated Successfully");
      } else {
        await API.post("/records", formData);

        alert("Record Added Successfully");
      }

      resetForm();
      fetchRecords();
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="card shadow border-0 mt-4">
      <div className="card-header bg-primary text-white">
        <h4 className="mb-0">
          {editingRecord
            ? "✏️ Update Record"
            : "➕ Add New Record"}
        </h4>
      </div>

      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-bold">
              Name
            </label>

            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">
              Category
            </label>

            <select
              name="category"
              className="form-select"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">
                Select Category
              </option>
              <option value="HR">HR</option>
              <option value="IT">IT</option>
              <option value="Finance">
                Finance
              </option>
              <option value="Marketing">
                Marketing
              </option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">
              Status
            </label>

            <select
              name="status"
              className="form-select"
              value={formData.status}
              onChange={handleChange}
              required
            >
              <option value="">
                Select Status
              </option>
              <option value="Active">
                Active
              </option>
              <option value="Completed">
                Completed
              </option>
              <option value="Pending">
                Pending
              </option>
            </select>
          </div>

          <div className="d-flex gap-2">
            <button
              type="submit"
              className={`btn ${
                editingRecord
                  ? "btn-warning"
                  : "btn-success"
              }`}
            >
              {editingRecord
                ? "Update Record"
                : "Add Record"}
            </button>

            {editingRecord && (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={resetForm}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecordForm;