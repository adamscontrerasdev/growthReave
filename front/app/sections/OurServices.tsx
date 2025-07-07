import React from "react";
import { CardOurServices } from "../components";
import { services } from "../../public/data.json";

export const OurServices = () => {
  return (
    <div className="w-screen flex flex-col items-center justify-center gap-10 p-10">
      <h2 className="p-2 border border-white/30 rounded-lg bg-neutral-950">
        Our Services
      </h2>
      <div className="">
        <h1 className="text-center text-4xl md:text-6xl font-bold text-white max-w-4xl">
          AI Solutions That Take Your Business to the Next Level
        </h1>
        <p className="text-center text-base md:text-xl font-bold text-white/50 max-w-4xl mt-2">
          We design, develop, and implement automation tools that help you work
          smarter, not harder
        </p>
      </div>
      <div className="flex flex-col gap-24 md:py-24 w-full items-center ">
        {services.map((service, i) => (
          <CardOurServices key={i} services={service} />
        ))}
      </div>
    </div>
  );
};
