import React from "react";
import Logout from "../Auth/Logout";
import { useNavigate } from "react-router-dom";

const EmployeeDashboard = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px' }}>
      <h1>Employee Dashboard</h1>
      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        <button 
          onClick={() => navigate('/tasks')}
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '4px',
            border: 'none'
          }}
        >
          View My Tasks
        </button>
        <Logout />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
