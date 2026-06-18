const Analytics = () => {
  return (
    <div className="row">

      <div className="col-md-4">
        <div className="card bg-primary text-white shadow">
          <div className="card-body">
            <h5>Total Records</h5>
            <h2>50</h2>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card bg-success text-white shadow">
          <div className="card-body">
            <h5>Active Records</h5>
            <h2>30</h2>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card bg-warning text-dark shadow">
          <div className="card-body">
            <h5>Pending Records</h5>
            <h2>20</h2>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Analytics;