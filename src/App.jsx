import { useEffect } from "react";
import "./styles.css";

function Portfolio() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const script1 = document.createElement("script");
      script1.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";
      script1.async = true;
      document.body.appendChild(script1);

      const script2 = document.createElement("script");
      script2.src = "https://cdn.jsdelivr.net/npm/vanta@0.5.21/dist/vanta.net.min.js";
      script2.async = true;

      script2.onload = () => {
        if (typeof window.VANTA !== "undefined") {
          window.VANTA.NET({
            el: "#vanta-background",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: "100vh",
            minWidth: "100vw",
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0xffffff,
            backgroundColor: 0x000000,
          });
        }
      };

      document.body.appendChild(script2);

      return () => {
        document.body.removeChild(script1);
        document.body.removeChild(script2);
        if (typeof window.VANTA !== "undefined") {
          window.VANTA.NET({ el: "#vanta-background" }).destroy();
        }
      };
    }
  }, []);

  return (
    <div id="vanta-background" className="container">
      <div className="content">
        <header className="header">
          <img
            src="https://i.imgur.com/VD3X8bu.jpeg"
            alt="Andrew C Anil"
            className="profile-pic"
          />
          <h1 className="name">Andrew C Anil</h1>
          <p className="subtitle">Cybersecurity Student</p>

          <div className="social-links">
            <button onClick={() => window.open("https://github.com/hackdrew", "_blank")}>
              <i className="bx bxl-github"></i>
            </button>
            <button onClick={() => window.location.href = "mailto:aca.andrewcanil@gmail.com"}>
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
      </div>

      <footer className="footer">
        © 2025 Andrew C Anil. All rights reserved.
      </footer>
    </div>
  );
}

export default Portfolio;
