import "./DoctorProfile.css";

const DoctorProfile = () => {
  return (
    <div className="doctor-profile">

      <div className="profile-card">

        <img
          src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600"
          alt="Doctor"
        />

        <h2>Dr. John Smith</h2>

        <p className="specialization">
          Cardiologist
        </p>

        <div className="profile-info">

          <div>
            <h4>Experience</h4>
            <p>10 Years</p>
          </div>

          <div>
            <h4>Qualification</h4>
            <p>MBBS, MD</p>
          </div>

          <div>
            <h4>Patients</h4>
            <p>1500+</p>
          </div>

          <div>
            <h4>Availability</h4>
            <p>Mon - Sat</p>
          </div>

        </div>

        <button>
          Edit Profile
        </button>

      </div>

    </div>
  );
};

export default DoctorProfile;