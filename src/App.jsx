import React, { useState, useEffect } from "react";
import Loader from "./Components/Loader";
import "./App.css";
import Homepage from "./Pages/Homepage";
import AboutMe from "./Pages/AboutMe";
import ProjectShowcase from "./Pages/ProjectShowcase";
import Projects from "./Pages/Projects";
import AbilitiesAccordion from "./Components/AnimatedAbilities";
import Footer from "./Pages/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust loading duration
  }, []);

  return <>{loading ? <Loader /> : <MainContent />}</>;
}

const MainContent = () => (
  <>
    <Homepage />
    <Projects />
    <ProjectShowcase />
    <AboutMe />
    <AbilitiesAccordion />
    <Footer />
  </>
);

export default App;
