import "./Profiles.css";
import { UserRound, HeartPulse } from "lucide-react";
import { useNavigate } from "react-router-dom";
const Profiles = () => {
  const navigate = useNavigate();
  return (
    <>
    <section className="profiles-section" id="profiles">
      <section id="profiles"></section>
        <div className="profiles-header">
          <span className="section-label">
            Access Your Portal
          </span>

          <h2 className="profiles-title">
            Choose Your Profile
          </h2>

          <p className="profiles-subtitle">
            Whether you're a healthcare professional or a patient,
            we have a dedicated experience built just for you.
          </p>
        </div>

        <div className="profiles-grid">

          {/* Doctor Card */}

          <div className="profile-card">
            <div className="profile-image">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80"
                alt="Doctor" />
              <span className="badge">Doctor</span>
            </div>

            <div className="profile-content">
              <h3>Doctor Portal</h3>

              <p>
                Manage appointments, consult patients,
                write prescriptions and access your
                complete medical dashboard.
              </p>

              <button className="doctor-btn" onClick={() => navigate("/doctor-login")}>
                <UserRound size={18} />
                Login as Doctor
              </button>
            </div>
          </div>

          {/* Patient Card */}

          <div className="profile-card">
            <div className="profile-image">
              <img
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=800&q=80"
                alt="Patient" />
              <span className="badge">Patient</span>
            </div>

            <div className="profile-content">
              <h3>Patient Portal</h3>

              <p>
                Book appointments, access reports,
                chat with doctors and manage your
                health records in one place.
              </p>

              <button
                 className="patient-btn"
                 onClick={() => navigate("/patient-login")}
                 >
                <HeartPulse size={18} />
                Login as Patient
              </button>
            </div>
          </div>

        </div>
      </section></>
  );
};

export default Profiles;