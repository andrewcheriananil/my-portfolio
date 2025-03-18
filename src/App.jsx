import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

function App() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    import("vanta/dist/vanta.waves.min").then((VANTA) => {
      if (!vantaEffect) {
        setVantaEffect(
          VANTA.default({
            el: vantaRef.current,
            THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x00ffcc, // Cyan effect
            shininess: 50,
            waveHeight: 20,
            waveSpeed: 1.2,
            zoom: 1,
          })
        );
      }
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="vanta-background">
      <div className="container">
        <header className="header">
          <img src="https://i.imgur.com/VD3X8bu.jpeg" alt="Andrew C Anil" className="profile-pic" />
          <h1 className="name">Andrew C Anil</h1>
          <p className="title">Cybersecurity Student</p>
        </header>

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

        <section className="about">
          <h2>About Me</h2>
          <p>Passionate about cybersecurity, ethical hacking, and digital forensics. Let’s connect and collaborate!</p>
        </section>

        <footer className="footer">© 2025 Andrew C Anil. All rights reserved.</footer>
      </div>

      <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
    </div>
  );
}

export default App;
