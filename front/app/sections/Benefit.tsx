import React from "react";
import { CardBenefit } from "../components";
import { benefits } from "./../../public/data.json";

export const Benefit = () => {
  return (
    <div className="w-screen flex flex-col items-center justify-center gap-10 p-10">
      <h2 className="p-2 border border-white/30 rounded-lg bg-neutral-950">
        Benefit
      </h2>
      <div className="">
        <h1 className="text-center text-4xl md:text-6xl font-bold text-white max-w-4xl">
          The Key Benefits of AI for Your Business Growth
        </h1>
        <p className="text-center text-base md:text-xl font-bold text-white/50 max-w-4xl mt-2">
          Discover how AI automation enhances efficiency, reduces costs, and
          drives business growth with smarter, faster processes.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 py-10 max-w-7xl">
        {benefits.map((benefit, i) => (
          <CardBenefit key={i} benefit={benefit} />
        ))}
      </div>
    </div>
  );
};
