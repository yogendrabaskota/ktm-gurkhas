import React from "react";
import Hero from "../components/Hero";
import Team from "../components/Team";
import Contact from "./Contact";
import Schedule from "./Schedule";

const Home = () => {
  return (
    <>
      <Hero />

      <section id="schedule-section">
        <Schedule />
      </section>

      <section id="team-section">
        <Team />
      </section>

      <section id="contact-section">
        <Contact />
      </section>
    </>
  );
};

export default Home;
