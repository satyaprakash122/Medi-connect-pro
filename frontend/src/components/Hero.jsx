function Hero() {
  return (
    <section id="hero" style={{
      minHeight: "100vh",
      paddingTop: "72px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      alignItems: "center",
      background: "linear-gradient(135deg, #F7FAFA 0%, #E6F5F3 100%)",
      overflow: "hidden",
      fontFamily: "Inter, system-ui, sans-serif"
    }}>

      {/* LEFT — Content */}
      <div style={{ padding: "80px 5% 80px 8%" }}>

        {/* Eyebrow badge */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          background: "#E6F5F3",
          border: "1px solid #C8DDD9",
          borderRadius: "100px",
          padding: "6px 14px",
          fontSize: "0.78rem",
          fontWeight: 600,
          color: "#0A7B6C",
          letterSpacing: "0.5px",
          textTransform: "uppercase",
          marginBottom: "24px"
        }}>
          <span style={{
            width: "6px", height: "6px",
            borderRadius: "50%",
            background: "#0A7B6C",
            display: "block",
            animation: "pulse 2s infinite"
          }}></span>
          Trusted by 50,000+ patients
        </div>

        {/* Heading */}
        <h1 style={{
          fontFamily: "Georgia, serif",
          fontSize: "clamp(2.4rem, 4vw, 3.6rem)",
          lineHeight: 1.15,
          color: "#0D2B45",
          marginBottom: "20px"
        }}>
          Your Health,<br />
          Our <em style={{ color: "#0A7B6C", fontStyle: "italic" }}>Priority</em>.<br />
          Anytime.
        </h1>

        {/* Subtext */}
        <p style={{
          fontSize: "1.05rem",
          lineHeight: 1.7,
          color: "#5A7180",
          maxWidth: "460px",
          marginBottom: "36px"
        }}>
          Connect with certified doctors, schedule appointments instantly, and manage
          your health records — all in one seamless platform built around you.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "52px" }}>
          <a href="#" style={{
            background: "#0D2B45",
            color: "white",
            display: "flex", alignItems: "center", gap: "8px",
            padding: "14px 26px",
            fontSize: "0.95rem",
            fontWeight: 600,
            borderRadius: "10px",
            textDecoration: "none"
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            Doctor Login
          </a>
          <a href="#" style={{
            background: "#0A7B6C",
            color: "white",
            display: "flex", alignItems: "center", gap: "8px",
            padding: "14px 26px",
            fontSize: "0.95rem",
            fontWeight: 600,
            borderRadius: "10px",
            textDecoration: "none"
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
            </svg>
            Patient Login
          </a>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", gap: "32px" }}>
          {[
            { num: "1,200", suffix: "+", label: "Specialist Doctors" },
            { num: "50",    suffix: "k+", label: "Patients Served" },
            { num: "98",    suffix: "%",  label: "Satisfaction Rate" },
          ].map((stat) => (
            <div key={stat.label} style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontFamily: "Georgia, serif", fontSize: "1.9rem", color: "#0D2B45", lineHeight: 1 }}>
                {stat.num}<span style={{ color: "#0A7B6C" }}>{stat.suffix}</span>
              </span>
              <span style={{ fontSize: "0.78rem", color: "#5A7180", fontWeight: 500, marginTop: "4px" }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* RIGHT — Images */}
      <div style={{ position: "relative", padding: "40px 8% 40px 4%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>

          {/* Large image */}
          <div style={{ gridColumn: "1 / -1", borderRadius: "16px", overflow: "hidden", height: "280px" }}>
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80"
              alt="Doctor smiling"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* Small image 1 */}
          <div style={{ borderRadius: "16px", overflow: "hidden", height: "160px" }}>
            <img
              src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=400&q=80"
              alt="Doctor consulting"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* Small image 2 */}
          <div style={{ borderRadius: "16px", overflow: "hidden", height: "160px" }}>
            <img
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400&q=80"
              alt="Medical technology"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Floating badges */}
        <div style={{
          position: "absolute", top: "60px", left: "0",
          background: "white", borderRadius: "100px",
          padding: "10px 16px", fontSize: "0.82rem", fontWeight: 600,
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          display: "flex", alignItems: "center", gap: "8px", color: "#0D2B45"
        }}>
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22c55e", display: "block" }}></span>
          Dr. Priya is online now
        </div>

        <div style={{
          position: "absolute", bottom: "60px", right: "5%",
          background: "white", borderRadius: "100px",
          padding: "10px 16px", fontSize: "0.82rem", fontWeight: 600,
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          display: "flex", alignItems: "center", gap: "8px", color: "#0D2B45"
        }}>
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#D4A847", display: "block" }}></span>
          Next appt in 10 mins
        </div>

      </div>

    </section>
  );
}

export default Hero;