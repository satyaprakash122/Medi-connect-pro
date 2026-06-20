import "./PatientLogin.css";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const PatientLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="patient-login-container">
      <div className="patient-login-card">

        <h2>Patient Login</h2>
        <p>Access your appointments and health records</p>

        <form>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="patient@example.com"
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
              />
              <span
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>
          </div>

          <button
              type="button"
               onClick={() => navigate("/patient-dashboard")}
          >
             Login
          </button>

        </form>

      </div>
    </div>
  );
};

export default PatientLogin;