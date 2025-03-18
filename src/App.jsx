import { useEffect, useState } from "react";

function Portfolio() {
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loadScripts = async () => {
        if (!window.THREE) {
          const script1 = document.createElement("script");
          script1.src =
            "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";
          script1.async = true;
          document.body.appendChild(script1);
          await new Promise((resolve) => (script1.onload = resolve));
        }

        if (!window.VANTA) {
          const script2 = document.createElement("script");
          script2.src =
            "https://cdn.jsdelivr.net/npm/vanta@0.5.21/dist/vanta.net.min.js";
          script2.async = true;
          document.body.appendChild(script2);
          await new Promise((resolve) => (script2.onload = resolve));
        }

        // Initialize Vanta.NET effect
        setVantaEffect(
          window.VANTA.NET({
            el: "#vanta-background",
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
      };

      loadScripts();
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <div id="vanta-background" className="container">
      {/* Header Section */}
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

        {/* Social Links */}
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

      {/* About Section */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          I am a third-year cybersecurity student passionate about securing digital landscapes
          and learning cutting-edge technologies. Let’s connect to collaborate on exciting projects!
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        © 2025 Andrew C Anil. All rights reserved.
      </footer>

      {/* Boxicons Script */}
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />
    </div>
  );
}

export default Portfolio;
