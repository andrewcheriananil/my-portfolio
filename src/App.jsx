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
          color: 0x222222, // Adjust color for better visibility
          shininess: 30,
          waveHeight: 20,
          waveSpeed: 0.5,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="app-container">
      <div className="content">
        <header>
          <img
            src="https://i.imgur.com/VD3X8bu.jpeg"
            alt="Andrew C Anil"
            className="profile-pic"
          />
          <h1>Andrew C Anil</h1>
          <p>Cybersecurity Student</p>
        </header>
        <section>
          <h2>About Me</h2>
          <p>
            I am a third-year cybersecurity student passionate about securing
            digital landscapes and learning cutting-edge technologies. Let’s
            connect!
          </p>
        </section>
        <footer>© 2025 Andrew C Anil. All rights reserved.</footer>
      </div>
    </div>
  );
}

export default App;
