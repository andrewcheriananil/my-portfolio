import { useEffect, useState, useRef } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";
import "./styles.css";

function Portfolio() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xffffff,
          backgroundColor: 0x000000,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="container">
      <header className="header">
        <a href="" target="_blank" rel="noopener noreferrer">
          <img
            src="https://i.imgur.com/VD3X8bu.jpeg"
            alt="Andrew C Anil"
            className="profile-pic"
          />
        </a>
        <h1 className="name">Andrew C Anil</h1>
        <p className="subtitle">Cybersecurity Student</p>

        <div className="social-links">
          <button onClick={() => window.open("https://github.com/hackdrew", "_blank")}>
            <i className="bx bxl-github"></i>
          </button>
          <button onClick={() => (window.location.href = "mailto:aca.andrewcanil@gmail.com")}> 
            <i className="bx bxs-envelope"></i>
          </button>
          <button onClick={() => window.open("https://linkedin.com/in/hackdrew", "_blank")}>
            <i className="bx bxl-linkedin"></i>
          </button>
        </div>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          I am a third-year cybersecurity student passionate about securing digital landscapes
          and learning cutting-edge technologies. Let’s connect to collaborate on exciting projects!
        </p>
      </section>

      <footer className="footer">© 2025 Andrew C Anil. All rights reserved.</footer>
    </div>
  );
}

export default Portfolio;
