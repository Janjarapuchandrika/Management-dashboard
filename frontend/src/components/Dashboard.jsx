import React, { useState } from "react";

const Dashboard = () => {
  // ================= STATE =================
  const [students, setStudents] = useState([
    { id: 1, name: "John", status: "Active" },
    { id: 2, name: "Sarah", status: "Active" },
  ]);

  const [name, setName] = useState("");
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

  // ================= ADD / UPDATE =================
  const handleAddOrUpdate = () => {
    if (name.trim() === "") return;

    if (editId !== null) {
      // EDIT STUDENT
      setStudents(
        students.map((s) =>
          s.id === editId ? { ...s, name: name } : s
        )
      );
      setEditId(null);
    } else {
      // ADD STUDENT
      const newStudent = {
        id: Date.now(),
        name: name,
        status: "Active",
      };

      setStudents([...students, newStudent]);
    }

    setName("");
  };

  // ================= DELETE =================
  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  // ================= EDIT =================
  const editStudent = (student) => {
    setName(student.name);
    setEditId(student.id);
  };

  // ================= SEARCH =================
  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>

      {/* SIDEBAR */}
      <div style={styles.sidebar}>
        <h2>🎓 College ERP</h2>
        <a href="/dashboard" style={styles.link}>Dashboard</a>
        <a href="/add-record" style={styles.link}>Students</a>
        <a href="/settings" style={styles.link}>Settings</a>
        <a href="/login" style={styles.link}>Logout</a>
      </div>

      {/* MAIN */}
      <div style={styles.main}>

        {/* HEADER */}
        <div style={styles.header}>
          <h2>Student Dashboard</h2>

          {/* SEARCH */}
          <input
            placeholder="Search student..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={styles.input}
          />
        </div>

        {/* ADD / EDIT SECTION */}
        <div style={styles.formBox}>

          <input
            placeholder="Enter student name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />

          <button onClick={handleAddOrUpdate} style={styles.button}>
            {editId ? "Update Student" : "Add Student"}
          </button>

        </div>

        {/* CARDS */}
        <div style={styles.grid}>

          <div style={styles.card}>
            <h3>Total Students</h3>
            <h2>{students.length}</h2>
          </div>

          <div style={styles.card}>
            <h3>Active</h3>
            <h2>{students.filter(s => s.status === "Active").length}</h2>
          </div>

        </div>

        {/* STUDENT LIST */}
        <div style={styles.listBox}>
          <h3>Students List</h3>

          {filteredStudents.length === 0 ? (
            <p>No students found</p>
          ) : (
            filteredStudents.map((s) => (
              <div key={s.id} style={styles.studentCard}>

                <span>
                  👤 {s.name} - {s.status}
                </span>

                <div style={{ display: "flex", gap: "10px" }}>

                  <button
                    style={styles.editBtn}
                    onClick={() => editStudent(s)}
                  >
                    Edit
                  </button>

                  <button
                    style={styles.deleteBtn}
                    onClick={() => deleteStudent(s.id)}
                  >
                    Delete
                  </button>

                </div>

              </div>
            ))
          )}

        </div>

      </div>
    </div>
  );
};

// ================= STYLES =================
const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "Arial"
  },

  sidebar: {
    width: "220px",
    background: "#1e3a8a",
    color: "white",
    padding: "20px"
  },

  link: {
    display: "block",
    color: "white",
    textDecoration: "none",
    padding: "10px",
    marginTop: "5px"
  },

  main: {
    flex: 1,
    padding: "20px",
    background: "#f4f6f9"
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px"
  },

  formBox: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px"
  },

  input: {
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #ccc"
  },

  button: {
    background: "#2563eb",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "6px",
    cursor: "pointer"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "15px",
    marginBottom: "20px"
  },

  card: {
    background: "white",
    padding: "15px",
    borderRadius: "10px"
  },

  listBox: {
    background: "white",
    padding: "15px",
    borderRadius: "10px"
  },

  studentCard: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    borderBottom: "1px solid #eee"
  },

  editBtn: {
    background: "#f59e0b",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer"
  },

  deleteBtn: {
    background: "#dc2626",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default Dashboard;