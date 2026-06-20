import { useNavigate } from "react-router-dom";
import "./HowItWorks.css";
import { User, CalendarDays, Activity } from "lucide-react";

const steps = [
  {
    id: "01",
    icon: <User size={28} />,
    title: "Create Your Profile",
    description:
      "Register as a doctor or patient in under two minutes. Upload credentials, set availability, and you're ready to go.",
  },
  {
    id: "02",
    icon: <CalendarDays size={28} />,
    title: "Book an Appointment",
    description:
      "Browse specialists by field, read reviews, and book in-clinic or video consultations at a time that suits you.",
  },
  {
    id: "03",
    icon: <Activity size={28} />,
    title: "Get Care & Follow Up",
    description:
      "Receive digital prescriptions, track your health progress, and follow up anytime — all stored securely in your dashboard.",
  },
];


  const HowItWorks = () => {
  const navigate = useNavigate();

  const handleStepClick = (id) => {
    if (id === "01") {
      navigate("/register");
    }

    if (id === "02") {
      navigate("/appointment-booking");
    }

    if (id === "03") {
      navigate("/patient-dashboard");
    }
  };
  return (
    <section className="how-it-works" id="how">
      <section id="how-it-works"></section>
      <div className="how-header">
        <span className="section-label">Simple Process</span>

        <h2 className="section-title">
          Healthcare in 3 easy steps
        </h2>

        <p className="section-sub">
          From registration to recovery — we make the entire journey
          straightforward and stress-free.
        </p>
      </div>

      <div className="steps-grid">
        {steps.map((step) => (
          <div className="step-card" key={step.id}
          onClick={() => handleStepClick(step.id)}
          style={{ cursor: "pointer" }}>
            <div className="step-num">{step.id}</div>

            <div className="step-icon">
              {step.icon}
            </div>

            <h3 className="step-title">{step.title}</h3>

            <p className="step-desc">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;