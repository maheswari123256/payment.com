import React from "react";
import "../styles/auth.css";

function AdminPanel() {
  return (
    <div className="auth_container">
      <h2>Admin Dashboard (Dummy)</h2>
      <div className="admin_buttons">
        <button>Add Hotel</button>
        <button>Edit Hotel</button>
        <button>Delete Hotel</button>
        <button>View Bookings</button>
      </div>
    </div>
  );
}

export default AdminPanel;