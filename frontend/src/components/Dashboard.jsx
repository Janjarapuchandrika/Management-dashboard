import { useState, useEffect } from "react";
import API from "../services/api";

import RecordTable from "./RecordTable";
import RecordForm from "./RecordForm";
import SearchBar from "./SearchBar";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

const Dashboard = () => {
  const [records, setRecords] = useState([]);
  const [search, setSearch] = useState("");
  const [editingRecord, setEditingRecord] = useState(null);
  const [user, setUser] = useState(null);

  // ================= FETCH RECORDS =================
  const fetchRecords = async () => {
    try {
      const res = await API.get("/records");
      setRecords(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // ================= FETCH USER =================
  const fetchUser = async () => {
    try {
      const res = await API.get("/auth/me");
      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // ================= LOAD DATA =================
  useEffect(() => {
    fetchRecords();
    fetchUser();
  }, []);

  // ================= STATS =================
  const activeCount = records.filter((r) => r.status === "Active").length;
  const completedCount = records.filter((r) => r.status === "Completed").length;
  const pendingCount = records.filter((r) => r.status === "Pending").length;

  // ================= CATEGORY DATA =================
  const categoryData = ["HR", "IT", "Finance"].map((cat) => ({
    name: cat,
    value: records.filter((r) => r.category === cat).length,
  }));

  // ================= STATUS DATA =================
  const statusData = [
    { status: "Active", count: activeCount },
    { status: "Completed", count: completedCount },
    { status: "Pending", count: pendingCount },
  ];

  const COLORS = ["#0d6efd", "#198754", "#ffc107"];

  return (
    <div className="container-fluid">

      {/* ================= TOP HEADER ================= */}
      <div className="d-flex justify-content-between align-items-center mb-4 p-2 bg-light shadow-sm rounded">

        <h2 className="fw-bold m-0">
          Management Dashboard
        </h2>
{/* USER INFO TOP RIGHT */}
<div className="text-end">
  <div className="small text-muted">Logged in as</div>

  <div className="fw-bold">
    {JSON.parse(localStorage.getItem("registerUser"))?.name || "Guest"}
  </div>
</div>

      </div>

      {/* ================= CARDS ================= */}
      <div className="row g-3 mb-4">

        <div className="col-md-3">
          <div className="card shadow-sm text-center p-3">
            <h6>Total Records</h6>
            <h2>{records.length}</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm text-center p-3">
            <h6>Active</h6>
            <h2>{activeCount}</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm text-center p-3">
            <h6>Completed</h6>
            <h2>{completedCount}</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm text-center p-3">
            <h6>Pending</h6>
            <h2>{pendingCount}</h2>
          </div>
        </div>

      </div>

      {/* ================= CHARTS ================= */}
      <div className="row mb-4">

        {/* PIE CHART */}
        <div className="col-lg-6">
          <div className="card shadow-sm p-3">
            <h5 className="mb-3">Category Distribution</h5>

            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  dataKey="value"
                  outerRadius={100}
                  label
                >
                  {categoryData.map((_, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>

          </div>
        </div>

        {/* BAR CHART */}
        <div className="col-lg-6">
          <div className="card shadow-sm p-3">
            <h5 className="mb-3">Status Distribution</h5>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={statusData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="status" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#0d6efd" />
              </BarChart>
            </ResponsiveContainer>

          </div>
        </div>

      </div>

      {/* ================= SEARCH ================= */}
      <SearchBar search={search} setSearch={setSearch} />

      {/* ================= FORM ================= */}
      <RecordForm
        fetchRecords={fetchRecords}
        editingRecord={editingRecord}
        setEditingRecord={setEditingRecord}
      />

      {/* ================= TABLE ================= */}
      <RecordTable
        records={records}
        search={search}
        fetchRecords={fetchRecords}
        setEditingRecord={setEditingRecord}
      />

    </div>
  );
};

export default Dashboard;