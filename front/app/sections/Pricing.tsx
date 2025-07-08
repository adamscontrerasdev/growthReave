import React from "react";
import { CardPricing } from "../components/CardPricing";
import { plans } from "./../../public/data.json";

export const Pricing = () => {
  return (
    <div className="w-screen flex flex-col items-center justify-center gap-10 p-10">
      <h2 className="p-2 border border-white/30 rounded-lg bg-neutral-950">
        Pricing
      </h2>
      <div className="">
        <h1 className="text-center text-4xl md:text-6xl font-bold text-white max-w-4xl">
          The Best AI Automation, at the Right Price
        </h1>
        <p className="text-center text-base md:text-xl font-bold text-white/50 max-w-4xl mt-2">
          Choose a plan that fits your business needs and start automating with
          AI
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10 w-full max-w-7xl">
        <CardPricing pricing={plans[0]} />
        <CardPricing pricing={plans[1]} />

        <div className="col-span-1 md:col-span-2 lg:col-span-1 w-full">
          <CardPricing pricing={plans[2]} />
        </div>
      </div>
    </div>
  );
};
