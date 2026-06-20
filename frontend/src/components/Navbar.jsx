import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
 const navStyle = {
  textDecoration: "none",
  fontSize: "0.9rem",
  fontWeight: 500,
  color: "#0D2B45",
  letterSpacing: "0.2px",
};
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 5%",
      height: "72px",
      background: "rgba(255,255,255,0.96)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid #C8DDD9",
      boxShadow: scrolled ? "0 2px 20px rgba(10,123,108,.12)" : "none",
      transition: "box-shadow 0.3s",
      fontFamily: "Inter, system-ui, sans-serif"
    }}>

      {/* Logo */}
      <a href="#" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
        <div style={{
          width: "38px", height: "38px",
          background: "#0A7B6C",
          borderRadius: "10px",
          display: "flex", alignItems: "center", justifyContent: "center"
        }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </div>
        <span style={{ fontFamily: "Georgia, serif", fontSize: "1.45rem", color: "#0D2B45" }}>
          Medico<span style={{ color: "#0A7B6C" }}>Pro</span>
        </span>
      </a>

      {/* Nav Links */}
      <ul
  style={{
    display: "flex",
    gap: "36px",
    listStyle: "none",
    margin: 0,
    padding: 0,
  }}
>
  <li>
    <a href="#hero" style={navStyle}>
      Home
    </a>
  </li>

  <li>
    <a href="#how-it-works" style={navStyle}>
      How It Works
    </a>
  </li>

  <li>
    <a href="#gallery" style={navStyle}>
      Gallery
    </a>
  </li>

  <li>
    <a href="#about-us" style={navStyle}>
      About Us
    </a>
  </li>

  <li>
    <a href="#contact-us" style={navStyle}>
      Contact Us
    </a>
  </li>

  <li>
    <a href="#profiles" style={navStyle}>
      Profiles
    </a>
  </li>
</ul>

      {/* Buttons */}
      <div style={{ display: "flex", gap: "12px" }}>
        <Link
    to="/doctor-login"
    style={{
      padding: "10px 20px",
      borderRadius: "8px",
      border: "1.5px solid #0A7B6C",
      color: "#0A7B6C",
      background: "transparent",
      fontWeight: 600,
      fontSize: "0.875rem",
      textDecoration: "none"
    }}
  >
    Login
  </Link>
        <Link
    to="/register"
    style={{
      padding: "10px 20px",
      borderRadius: "8px",
      background: "#0A7B6C",
      color: "white",
      fontWeight: 600,
      fontSize: "0.875rem",
      textDecoration: "none"
    }}
  >
    Register
  </Link>
      </div>

    </nav>
  );
}

export default Navbar;