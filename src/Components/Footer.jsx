import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <h2 style={styles.logo}>Elaric</h2>
        <p style={styles.text}>
          Build native mobile apps with the power of AI — fast, simple, and beautiful.
        </p>

        <div style={styles.links}>
          <a href="#preview" style={styles.link}>Preview</a>
          <a href="#pricing" style={styles.link}>Pricing</a>
          <a href="mailto:support@elaric.ai" style={styles.link}>Contact</a>
        </div>

        <div style={styles.socials}>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
            style={styles.icon}
          >
            <FaTwitter />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            style={styles.icon}
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            style={styles.icon}
          >
            <FaLinkedin />
          </a>
        </div>

        <p style={styles.copy}>
          © {new Date().getFullYear()} Elaric · All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// ----- Styles -----
const styles = {
  footer: {
    backgroundColor: "#0a0a0a",
    borderTop: "1px solid #1a1a1a",
    padding: "60px 20px 40px",
    textAlign: "center",
  },
  container: {
    maxWidth: "900px",
    margin: "0 auto",
  },
  logo: {
    fontSize: "26px",
    fontWeight: "700",
    color: "#fff",
    marginBottom: "12px",
  },
  text: {
    fontSize: "15px",
    color: "#9ca3af",
    marginBottom: "32px",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "22px",
    marginBottom: "28px",
  },
  link: {
    color: "#9ca3af",
    textDecoration: "none",
    fontSize: "14px",
    transition: "color 0.2s ease",
  },
  socials: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    fontSize: "22px",
    marginBottom: "30px",
  },
  icon: {
    color: "#9ca3af",
    textDecoration: "none",
    transition: "color 0.2s ease, transform 0.2s ease",
  },
  copy: {
    fontSize: "13px",
    color: "#666",
  },
};

// --- hover styles via JS ---
Object.assign(styles.link, {
  onMouseEnter: (e) => (e.target.style.color = "#3b82f6"),
  onMouseLeave: (e) => (e.target.style.color = "#9ca3af"),
});
Object.assign(styles.icon, {
  onMouseEnter: (e) => {
    e.target.style.color = "#3b82f6";
    e.target.style.transform = "scale(1.2)";
  },
  onMouseLeave: (e) => {
    e.target.style.color = "#9ca3af";
    e.target.style.transform = "scale(1)";
  },
});

export default Footer;
