import "./DoctorDashboard.css";
import { useNavigate } from "react-router-dom";


import {
  Users,
  Calendar,
  Stethoscope,
  Bell,
} from "lucide-react";


const DoctorDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard">

      {/* Sidebar */}

      <div className="sidebar">
        <h2>Medico Pro</h2>

        <ul>
          <li>Dashboard</li>
          <li onClick={() => navigate("/appointment-booking")}>Appointments</li>
          <li>Patients</li>
          <li>Reports</li>
          <li>Settings</li>
          <li onClick={() => navigate("/doctor-profile")}>
             Profile
          </li>
        </ul>
      </div>

      {/* Main Content */}

      <div className="main-content">

        <div className="topbar">
          <h1>Doctor Dashboard</h1>

          <Bell size={24} />
        </div>

        {/* Stats */}

        <div className="stats-grid">

          <div className="stat-card">
            <Users size={32} />
            <h3>150</h3>
            <p>Total Patients</p>
          </div>

          <div className="stat-card">
            <Calendar size={32} />
            <h3>24</h3>
            <p>Today's Appointments</p>
          </div>

          <div className="stat-card">
            <Stethoscope size={32} />
            <h3>85</h3>
            <p>Consultations</p>
          </div>

        </div>

        {/* Recent Patients */}

        <div className="table-container">

          <h2>Recent Patients</h2>

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Condition</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Hari Prasad</td>
                <td>35</td>
                <td>Fever</td>
                <td>Recovered</td>
              </tr>

              <tr>
                <td>Rukma Devi</td>
                <td>28</td>
                <td>Diabetes</td>
                <td>Under Treatment</td>
              </tr>

              <tr>
                <td>Arjun Reddy</td>
                <td>42</td>
                <td>Blood Pressure</td>
                <td>Monitoring</td>
              </tr>
            </tbody>
          </table>

        </div>

      </div>
    </div>
  );
};

export default DoctorDashboard;