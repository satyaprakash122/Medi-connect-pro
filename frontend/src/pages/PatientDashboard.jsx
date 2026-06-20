import "./PatientDashboard.css";
import { useNavigate } from "react-router-dom";
import {
  Calendar,
  FileText,
  Bell,
  User,
} from "lucide-react";

const PatientDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="patient-dashboard">

      {/* Sidebar */}

      <div className="patient-sidebar">
        <h2>Medico Pro</h2>

        <ul>
          <li>Dashboard</li>
          <li>Appointments</li>
          <li onClick={() => navigate("/medical-reports")}>
                 Medical Reports
            </li>
          <li>Prescriptions</li>
          <li>Profile</li>
        </ul>
      </div>

      {/* Main Content */}

      <div className="patient-main">

        <div className="patient-topbar">
          <h1>Patient Dashboard</h1>
          <Bell size={24} />
        </div>

        {/* Cards */}

        <div className="patient-stats">

          <div className="patient-card">
            <Calendar size={30} />
            <h3>4</h3>
            <p>Appointments</p>
          </div>

          <div className="patient-card">
            <FileText size={30} />
            <h3>12</h3>
            <p>Medical Reports</p>
          </div>

          <div className="patient-card">
            <User size={30} />
            <h3>3</h3>
            <p>Doctors Consulted</p>
          </div>

        </div>

        {/* Upcoming Appointments */}

        <div className="appointment-table">

          <h2>Upcoming Appointments</h2>

          <table>
            <thead>
              <tr>
                <th>Doctor</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Dr. John Smith</td>
                <td>25 June 2026</td>
                <td>10:00 AM</td>
                <td>Confirmed</td>
              </tr>

              <tr>
                <td>Dr. Emma</td>
                <td>29 June 2026</td>
                <td>2:00 PM</td>
                <td>Pending</td>
              </tr>
            </tbody>
          </table>

        </div>

      </div>

    </div>
  );
};

export default PatientDashboard;