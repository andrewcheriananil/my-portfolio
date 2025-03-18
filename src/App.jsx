import { useEffect, useState, useRef } from "react";
import * as THREE from "three";
import WAVES from "vanta/dist/vanta.waves.min";
import "./App.css"; // Ensure CSS is imported

function App() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: vantaRef.current, // Attach to this div
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: window.innerHeight,
          minWidth: window.innerWidth,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x0000009, // Neon pink accents
          shininess: 200,
          waveHeight: 40,
          waveSpeed: 2.0,
          backgroundColor: 0xff0099, // Black background
          zoom: 1.2,
          color2: 0x00ffff, // Neon blue accents
          glare: true,
          highlightColor: 0x00ffff, // Additional blue highlight
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="app-container">
      <div className="content-wrapper">
        <header>
          <img
            src="https://i.imgur.com/VD3X8bu.jpeg"
            alt="Andrew C Anil"
            className="profile-pic"
          />
          <h1>Andrew C Anil</h1>
          <p>Cybersecurity Student</p>
          <p className="description">Passionate about cybersecurity, ethical hacking, and protecting digital assets in an ever-evolving technological landscape.</p>
        </header>
        <div className="social-links">
          <a href="https://github.com/yourgithub" className="cyberpunk-link" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:your.email@example.com" className="cyberpunk-link">Email</a>
          <a href="https://linkedin.com/in/yourlinkedin" className="cyberpunk-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
      <footer className="cyberpunk-footer">© 2025 Andrew C Anil. All rights reserved.</footer>
    </div>
  );
}

export default App;
