import React, { useRef } from "react";
import Hero from "../components/Hero";
import Team from "../components/Team";
import Contact from "./Contact";

const Home = () => {
  const teamRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Hero />
      <div ref={teamRef}>
        <Team />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </>
  );
};

export default Home;
