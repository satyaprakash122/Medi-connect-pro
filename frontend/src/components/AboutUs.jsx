import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-section" id="about-us">
      <div className="container">
        <h2>About Medico Pro</h2>

        <p>
          Medico Pro is a modern healthcare management platform designed
          to bridge the gap between patients and healthcare professionals.
          Our mission is to simplify medical services by providing a
          secure, accessible, and efficient digital ecosystem where
          patients can connect with trusted doctors, book appointments,
          access medical records, and manage their healthcare journey
          from anywhere.
        </p>

        <div className="about-grid">
          <div>
            <h3>Our Mission</h3>
            <p>
              To make quality healthcare accessible to everyone through
              technology-driven solutions that reduce complexity,
              improve communication, and enhance patient care.
            </p>
          </div>

          <div>
            <h3>Our Vision</h3>
            <p>
              To become a trusted digital healthcare companion that
          empowers patients and healthcare providers with innovative,
          reliable, and user-friendly healthcare services.
            </p>
          </div>

          <div>
            <h3>Our Values</h3>
            <p>
              We believe in trust, transparency, compassion, innovation,
              and patient-centered care. These values guide every
              decision we make and every service we provide.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutUs;