import React from "react";
import Particles from "./Particles";

const HeroDecoration = () => {
  return (
    <div className="absolute w-full h-full flex items-center justify-center pointer-events-none -z-10">
      <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={50}
        moveParticlesOnHover={false}
        alphaParticles={false}
        disableRotation={false}
      />{" "}
      <div
        className="w-[600px] aspect-square absolute top-1/2 left-1/2
                 rounded-full -z-10 blur-3xl opacity-70 -translate-1/2"
        style={{
          background: `radial-gradient(circle, #000000 0%, var(--primary) 80%)`,
        }}
      />
    </div>
  );
};

export default HeroDecoration;
