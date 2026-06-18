import { useState } from "react";
import "./Register.css";

const Register = () => {
  const [role, setRole] = useState("Patient");

  return (
    <div className="register-container">
      <div className="register-card">

        <h2>Create Account</h2>
        <p>Join Medico Pro today</p>

        <form>

          <div className="input-group">
            <label>Select Role</label>

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option>Patient</option>
              <option>Doctor</option>
            </select>
          </div>

          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter Full Name"
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter Email"
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Create Password"
            />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
            />
          </div>

          <button type="submit">
            Register as {role}
          </button>

        </form>

      </div>
    </div>
  );
};

export default Register;