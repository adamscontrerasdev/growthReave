import React from "react";
import CardOurProcess from "../components/CardOurProcess";

export const OurProcess = () => {
  return (
    <div className="w-screen flex flex-col items-center justify-center gap-10 p-10">
      <h2 className="p-2 border border-white/30 rounded-lg bg-neutral-950">
        Our Process
      </h2>
      <div className="">
        <h1 className="text-center text-4xl md:text-6xl font-bold text-white max-w-4xl">
          Our Simple, Smart, and Scalable Process
        </h1>
        <p className="text-center text-base md:text-xl font-bold text-white/50 max-w-4xl mt-2">
          We design, develop, and implement automation tools that help you work
          smarter, not harder
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-16 w-full max-w-7xl">
        {Array.from({ length: 4 }, (_, i) => (
          <CardOurProcess key={i} />
        ))}
      </div>
    </div>
  );
};
