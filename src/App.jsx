import { useEffect, useState, useRef } from "react";
import * as THREE from "three";
import WAVES from "vanta/dist/vanta.waves.min";
import "./App.css";

function App() {
  const vantaRef = useRef(null);

  useEffect(() => {
    const effect = WAVES({
      el: vantaRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: "100vh",
      minWidth: "100vw",
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x111111,
      shininess: 20,
      waveHeight: 25,
      waveSpeed: 0.6,
      zoom: 1.2,
    });

    return () => effect.destroy();
  }, []);

  return (
    <div ref={vantaRef} className="app-container">
      <div className="content-wrapper">
        <header className="header">
          <img
            src="https://i.imgur.com/VD3X8bu.jpeg"
            alt="Andrew C Anil"
            className="profile-pic"
          />
          <h1>Andrew C Anil</h1>
          <p>Cybersecurity Student</p>
        </header>
        <section className="social-links">
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="cyberpunk-link">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="cyberpunk-link">
            LinkedIn
          </a>
          <a href="mailto:your.email@example.com" className="cyberpunk-link">
            Email Me
          </a>
        </section>
        <main className="main-content">
          <section>
            <h2>About Me</h2>
            <p>
              I am a third-year cybersecurity student passionate about securing
              digital landscapes and learning cutting-edge technologies. Let’s
              connect!
            </p>
          </section>
        </main>
      </div>
      <footer className="cyberpunk-footer">© 2025 Andrew C Anil. All rights reserved.</footer>
    </div>
  );
}

export default App;
