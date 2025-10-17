import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import PreviewPanel from "./Components/PreviewPanel";
import PricingSection from "./Components/PricingSection";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <PreviewPanel />
      <PricingSection />
      <Footer />
    </div>
  );
}

export default App;
