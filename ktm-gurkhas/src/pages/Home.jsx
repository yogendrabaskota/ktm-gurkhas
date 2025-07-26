import React, { useRef } from "react";
import Hero from "../components/Hero";
import Team from "../pages/Team";

const Home = () => {
  const teamRef = useRef(null);

  return (
    <>
      <Hero />
      <div ref={teamRef}>
        <Team />
      </div>
    </>
  );
};

export default Home;
