import { useEffect } from "react";

function Portfolio() {
  useEffect(() => {
    // Load Three.js and Vanta.js for the background effect
    if (typeof window !== "undefined") {
      const script1 = document.createElement("script");
      script1.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";
      script1.async = true;
      document.body.appendChild(script1);

      const script2 = document.createElement("script");
      script2.src = "https://cdn.jsdelivr.net/npm/vanta@0.5.21/dist/vanta.net.min.js";
      script2.async = true;

      script2.onload = () => {
        // Initialize Vanta.NET once the script is loaded
        if (typeof window.VANTA !== "undefined") {
          window.VANTA.NET({
            el: "#vanta-background", // Ensure this matches the id of the background div
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0xffffff, // White color for the net effect
            backgroundColor: 0x000000 // Black background color for contrast
          });
        }
      };

      document.body.appendChild(script2);

      // Cleanup scripts and Vanta effect when component unmounts
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
    <div
      id="vanta-background"
      style={{
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: "black", // Fallback color
        color: "white",
        fontFamily: "sans-serif",
        margin: "0",
        padding: "0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* Header Section */}
      <header
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "10vh 0",
          textAlign: "center",
          width: "100%",
        }}
      >
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <img
            src="https://i.imgur.com/VD3X8bu.jpeg"
            alt="Andrew C Anil"
            style={{
              width: "25vw",
              height: "25vw",
              borderRadius: "50%",
              border: "4px solid white",
              boxShadow: "0 0 10px white",
              marginBottom: "2rem",
            }}
          />
        </a>
        <h1
          style={{
            fontSize: "6vw",
            fontWeight: "bold",
            marginTop: "1rem",
          }}
        >
          Andrew C Anil
        </h1>
        <p
          style={{
            fontSize: "2.5vw",
            marginTop: "0.5rem",
          }}
        >
          Cybersecurity Student
        </p>

        {/* Social Links */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
            marginTop: "1rem",
          }}
        >
          <button
            style={{
              backgroundColor: "white",
              border: "1px solid black",
              padding: "1rem",
              borderRadius: "0.25rem",
            }}
            onClick={() => window.open("https://github.com/hackdrew", "_blank")}
          >
            <i className="bx bxl-github" style={{ fontSize: "2rem", color: "black" }}></i>
          </button>
          <button
            style={{
              backgroundColor: "white",
              border: "1px solid black",
              padding: "1rem",
              borderRadius: "0.25rem",
            }}
            onClick={() => (window.location.href = "mailto:aca.andrewcanil@gmail.com")}
          >
            <i className="bx bxs-envelope" style={{ fontSize: "2rem", color: "black" }}></i>
          </button>
          <button
            style={{
              backgroundColor: "white",
              border: "1px solid black",
              padding: "1rem",
              borderRadius: "0.25rem",
            }}
            onClick={() => window.open("https://linkedin.com/in/hackdrew", "_blank")}
          >
            <i className="bx bxl-linkedin" style={{ fontSize: "2rem", color: "black" }}></i>
          </button>
        </div>
      </header>

      {/* About Section */}
      <section
        style={{
          padding: "10vh 10vw",
          textAlign: "center",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: "100%",
        }}
      >
        <h2
          style={{
            fontSize: "4vw",
            fontWeight: "600",
          }}
        >
          About Me
        </h2>
        <p
          style={{
            fontSize: "2vw",
            marginTop: "1rem",
            maxWidth: "40rem",
            marginInline: "auto",
          }}
        >
          I am a third-year cybersecurity student passionate about securing digital landscapes and learning cutting-edge technologies. Let’s connect to collaborate on exciting projects!
        </p>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: "5vh 0",
          textAlign: "center",
          fontSize: "1vw",
          borderTop: "1px solid white",
          backgroundColor: "rgba(255, 255, 255, 0.3)", // Translucent white background
          width: "100%",
        }}
      >
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