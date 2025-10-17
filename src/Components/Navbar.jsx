import React from "react";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Elaric</h2>
      <div style={styles.links}>
        <a href="#preview" style={styles.link}>Preview</a>
        <a href="#pricing" style={styles.link}>Pricing</a>
        <button style={styles.button}>Login</button>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 60px",
    backgroundColor: "#0a0a0a",
    borderBottom: "1px solid #1a1a1a",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  logo: {
    fontSize: "24px",
    fontWeight: "700",
    color: "white",
  },
  links: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  link: {
    color: "#aaa",
    textDecoration: "none",
    fontSize: "15px",
  },
  button: {
    backgroundColor: "#3b82f6",
    color: "white",
    border: "none",
    padding: "8px 18px",
    borderRadius: "8px",
    fontWeight: "500",
  },
};

export default Navbar;
