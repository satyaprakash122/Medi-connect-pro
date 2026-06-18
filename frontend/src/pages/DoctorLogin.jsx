import "./DoctorLogin.css";

const DoctorLogin = () => {
  return (
    <div className="doctor-login-container">
      <div className="doctor-login-card">

        <h2>Doctor Login</h2>
        <p>Access your Medico Pro dashboard</p>

        <form>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="doctor@example.com"
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Password"
            />
          </div>

          <button type="submit">
            Login
          </button>

          <span className="register-link">
            Don't have an account? Register
          </span>
        </form>

      </div>
    </div>
  );
};

export default DoctorLogin;