import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section className="contact-section" id="contact-us">
      <h2>Contact Us</h2>

      <form className="contact-form">
        <input
          type="text"
          placeholder="Your Name"
        />

        <input
          type="email"
          placeholder="Your Email"
        />

        <textarea
          placeholder="Your Message"
          rows="5"
        />

        <button type="submit">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactUs;