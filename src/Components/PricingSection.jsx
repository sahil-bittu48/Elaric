import React from "react";

function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      features: ["Basic templates", "Limited previews", "Community support"],
    },
    {
      name: "Pro",
      price: "$29/mo",
      features: [
        "All templates",
        "Unlimited previews",
        "Priority support",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "White-label solutions",
        "Team collaboration",
        "Dedicated support",
      ],
    },
  ];

  return (
    <section id="pricing" style={styles.section}>
      <h2 style={styles.heading}>Pricing</h2>
      <div style={styles.cards}>
        {plans.map((plan, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.cardTitle}>{plan.name}</h3>
            <p style={styles.price}>{plan.price}</p>
            <ul style={styles.features}>
              {plan.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            <button style={styles.button}>Get Started</button>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    textAlign: "center",
    padding: "100px 20px",
  },
  heading: {
    fontSize: "40px",
    fontWeight: "700",
    marginBottom: "50px",
  },
  cards: {
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch",
    gap: "30px",
    flexWrap: "wrap",
  },
  card: {
    backgroundColor: "#111",
    padding: "40px 30px",
    borderRadius: "20px",
    width: "280px",
    border: "1px solid #2a2a2a",
    boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
  },
  cardTitle: {
    fontSize: "22px",
    marginBottom: "10px",
    fontWeight: "600",
  },
  price: {
    fontSize: "30px",
    fontWeight: "700",
    marginBottom: "20px",
  },
  features: {
    listStyle: "none",
    padding: 0,
    margin: "0 0 30px 0",
    color: "#9ca3af",
    fontSize: "14px",
    textAlign: "left",
  },
  button: {
    backgroundColor: "#3b82f6",
    color: "white",
    border: "none",
    padding: "12px 20px",
    borderRadius: "10px",
  },
};

export default PricingSection;
