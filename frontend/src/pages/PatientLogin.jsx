import "./PatientLogin.css";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
const PatientLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="doctor-login-container">
      <div className="doctor-login-card">

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

          <button type="submit">
            Login
          </button>

        </form>

      </div>
    </div>
  );
};

export default PatientLogin;