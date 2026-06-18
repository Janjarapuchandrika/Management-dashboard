import API from "../services/api";

const RecordTable = ({
  records,
  search,
  fetchRecords,
  setEditingRecord,
}) => {
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this record?"
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/records/${id}`);
      alert("Record Deleted Successfully");
      fetchRecords();
    } catch (error) {
      console.log(error);
      alert("Delete Failed");
    }
  };

  const filteredRecords = records.filter((record) =>
    record.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const getStatusBadge = (status) => {
    switch (status) {
      case "Active":
        return (
          <span className="badge bg-success">
            Active
          </span>
        );

      case "Completed":
        return (
          <span className="badge bg-primary">
            Completed
          </span>
        );

      case "Pending":
        return (
          <span className="badge bg-warning text-dark">
            Pending
          </span>
        );

      default:
        return (
          <span className="badge bg-secondary">
            {status}
          </span>
        );
    }
  };

  return (
    <div className="card shadow border-0 mt-4">
      <div className="card-body">

        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="mb-0">
            Records Management
          </h3>

          <span className="badge bg-dark">
            Total: {filteredRecords.length}
          </span>
        </div>

        <div className="table-responsive">

          <table className="table table-hover table-bordered align-middle">

            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Category</th>
                <th>Status</th>
                <th width="180">Actions</th>
              </tr>
            </thead>

            <tbody>

              {filteredRecords.length > 0 ? (
                filteredRecords.map((record) => (
                  <tr key={record.id}>
                    <td>{record.id}</td>

                    <td>{record.name}</td>

                    <td>{record.category}</td>

                    <td>
                      {getStatusBadge(record.status)}
                    </td>

                    <td>
                      <button
                        className="btn btn-warning btn-sm me-2"
                        onClick={() =>
                          setEditingRecord(record)
                        }
                      >
                        ✏ Edit
                      </button>

                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() =>
                          handleDelete(record.id)
                        }
                      >
                        🗑 Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center text-muted"
                  >
                    No Records Found
                  </td>
                </tr>
              )}

            </tbody>

          </table>

        </div>

      </div>
    </div>
  );
};

export default RecordTable;