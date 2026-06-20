import {Routes, Route} from 'react-router-dom';

import Home from "./Home";
import DoctorLogin from "./pages/DoctorLogin";
import Register from "./pages/Register";
import PatientLogin from "./pages/PatientLogin";
import DoctorDashboard from "./pages/DoctorDashboard";
import AppointmentBooking from "./pages/AppointmentBooking";
import DoctorProfile from "./pages/DoctorProfile";
import PatientDashboard from "./pages/PatientDashboard";
import MedicalReports from "./pages/MedicalReports";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/doctor-login" element={<DoctorLogin />} />
      <Route path="/patient-login" element={<PatientLogin />} />
      <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
      <Route path="/appointment-booking" element={<AppointmentBooking />} />
      <Route path="/doctor-profile" element={<DoctorProfile />} />
      <Route path="/patient-dashboard" element={<PatientDashboard />} />
      <Route
      path="/medical-reports"
       element={<MedicalReports />}
      />
    </Routes>
  );
}

export default App