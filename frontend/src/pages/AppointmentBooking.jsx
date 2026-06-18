import "./AppointmentBooking.css";
import { useState } from "react";

const AppointmentBooking = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    doctor: "",
    date: "",
    time: "",
    problem: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Appointment Booked Successfully!");
  };

  return (
    <div className="appointment-container">
      <div className="appointment-card">

        <h2>Book Appointment</h2>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Patient Name</label>
            <input
              type="text"
              name="patientName"
              value={formData.patientName}
              onChange={handleChange}
              placeholder="Enter Name"
            />
          </div>

          <div className="input-group">
            <label>Select Doctor</label>

            <select
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
            >
              <option value="">Choose Doctor</option>
              <option>Dr. Smith</option>
              <option>Dr. John</option>
              <option>Dr. Emma</option>
            </select>
          </div>

          <div className="input-group">
            <label>Date</label>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Time</label>

            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Health Problem</label>

            <textarea
              name="problem"
              rows="4"
              value={formData.problem}
              onChange={handleChange}
              placeholder="Describe your issue"
            />
          </div>

          <button type="submit">
            Book Appointment
          </button>

        </form>

      </div>
    </div>
  );
};

export default AppointmentBooking;