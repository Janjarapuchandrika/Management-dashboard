import React from "react";

const Home = () => {
  return (
    <div className="container mt-4">

      {/* Marquee */}
      <div className="alert alert-primary shadow-sm">
        <marquee behavior="scroll" direction="left">
          🚀 Welcome to Management Dashboard System |
          Manage Records | Analytics Reports |
          Search & Filter Data | Professional Internship Project
        </marquee>
      </div>

      {/* Hero Section */}
      <div className="row align-items-center mt-5">

        <div className="col-lg-6">
          <h1 className="display-4 fw-bold text-primary">
            Management Dashboard System
          </h1>

          <p className="lead mt-3">
            A professional dashboard application for
            managing records, analytics, reporting,
            search functionality, and business insights
            in a single platform.
          </p>

          <p className="text-muted">
            Developed using React.js, Bootstrap,
            JSON Server, Recharts, CRUD Operations,
            Authentication, and Reporting Features.
          </p>
        </div>

        <div className="col-lg-6 text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
            alt="dashboard"
            className="img-fluid"
            width="350"
          />
        </div>

      </div>

      {/* Features Section */}
      <div className="row mt-5">

        <div className="col-md-4 mb-4">
          <div className="card shadow border-0 h-100">
            <div className="card-body text-center">
              <h2>📊</h2>
              <h5>Analytics Dashboard</h5>
              <p>
                View charts, reports and business
                analytics with real-time insights.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow border-0 h-100">
            <div className="card-body text-center">
              <h2>📝</h2>
              <h5>Record Management</h5>
              <p>
                Add, edit, update and delete records
                efficiently with CRUD operations.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow border-0 h-100">
            <div className="card-body text-center">
              <h2>🔍</h2>
              <h5>Search & Filter</h5>
              <p>
                Quickly search and filter records
                using multiple criteria.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Footer Section */}
      <div className="text-center mt-5 mb-3">
        <hr />
        <p className="text-muted">
          © 2026 Management Dashboard System |
          Internship Project
        </p>
      </div>

    </div>
  );
};

export default Home;