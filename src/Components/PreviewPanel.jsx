import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

function PreviewPanel() {
  const [url, setUrl] = useState("https://example.com");

  return (
    <section id="preview" style={styles.container}>
      <div style={styles.phoneFrame}>
        <div style={styles.notch}></div>
        <iframe title="App Preview" src={url} style={styles.iframe}></iframe>
      </div>

      <div style={styles.qrSection}>
        <h3 style={styles.heading}>Test on your phone</h3>
        <QRCodeCanvas value={url} size={140} />
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter app preview URL..."
          style={styles.input}
        />
        <p style={styles.note}>
          Scan this QR code to open your preview link.
        </p>
      </div>
    </section>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "50px",
    backgroundColor: "#0a0a0a",
    padding: "100px 20px",
    flexWrap: "wrap",
  },
  phoneFrame: {
    width: "300px",
    height: "600px",
    borderRadius: "45px",
    border: "2px solid #222",
    overflow: "hidden",
    position: "relative",
    backgroundColor: "#000",
    boxShadow: "0 0 30px rgba(0,0,0,0.5)",
  },
  notch: {
    width: "120px",
    height: "25px",
    backgroundColor: "#111",
    borderRadius: "0 0 15px 15px",
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 2,
  },
  iframe: {
    width: "100%",
    height: "100%",
    border: "none",
  },
  qrSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#111",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
  },
  heading: {
    fontSize: "18px",
    marginBottom: "20px",
  },
  input: {
    marginTop: "20px",
    padding: "8px 12px",
    width: "220px",
    borderRadius: "8px",
    border: "1px solid #444",
    backgroundColor: "#222",
    color: "white",
  },
  note: {
    fontSize: "12px",
    color: "#aaa",
    marginTop: "10px",
    textAlign: "center",
  },
};

export default PreviewPanel;
