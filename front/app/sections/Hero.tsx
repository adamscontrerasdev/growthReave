import React from "react";
import HeroDecoration from "../elements/HeroDecoration";

export const Hero = () => {
  return (
    <div className="w-screen h-[100dvh] flex flex-col items-center justify-center bg-gradient-to-b from-black to-transparent gap-5 relative overflow-hidden p-10">
      <HeroDecoration />
      <h1 className="text-center text-4xl md:text-6xl font-bold text-white max-w-4xl">
        Intelligent Automation for Modern Businesses.
      </h1>
      <p className="text-center text-base md:text-xl font-bold text-white/50 max-w-4xl">
        Xtract brings AI automation to your fingertips & streamline tasks.
      </p>
      <div className="flex gap-5 max-w-4xl">
        <button className="bg-[var(--primary)]  rounded-lg px-8 py-2 font-bold cursor-pointer">
          Get Started
        </button>
        <button className="border cursor-pointer border-white/50 text-white rounded-lg px-8 py-2 font-bold">
          Learn More
        </button>
      </div>
    </div>
  );
};

