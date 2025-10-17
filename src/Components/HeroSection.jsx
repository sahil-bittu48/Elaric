import React from "react";

function HeroSection() {
  return (
    <section style={styles.hero}>
      <div style={styles.textContainer}>
        <h1 style={styles.title}>Build native mobile apps, fast.</h1>
        <p style={styles.subtitle}>
          Turn your idea into a full mobile app in minutes — powered by Elaric AI.
        </p>

        <div style={styles.inputContainer}>
          <input
            type="text"
            placeholder="Describe the app you want to build..."
            style={styles.input}
          />
          <button style={styles.button}>Build</button>
        </div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    textAlign: "center",
    padding: "120px 20px 80px",
    backgroundColor: "#0a0a0a",
  },
  textContainer: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  title: {
    fontSize: "56px",
    fontWeight: "700",
    marginBottom: "20px",
  },
  subtitle: {
    fontSize: "18px",
    color: "#9ca3af",
    marginBottom: "40px",
  },
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    flexWrap: "wrap",
  },
  input: {
    width: "360px",
    padding: "14px 16px",
    borderRadius: "10px",
    border: "1px solid #333",
    backgroundColor: "#1c1c1c",
    color: "white",
    fontSize: "16px",
  },
  button: {
    backgroundColor: "#3b82f6",
    color: "white",
    border: "none",
    padding: "14px 26px",
    borderRadius: "10px",
    fontWeight: "500",
  },
};

export default HeroSection;
