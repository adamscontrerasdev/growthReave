import React from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import { BenefitEntity } from "../types";

interface CardBenefitProps {
  benefit: BenefitEntity;
}

export const CardBenefit: React.FC<CardBenefitProps> = ({ benefit }) => {
  return (
    <div className="w-full h-52 border border-white/20 rounded-lg p-5 flex flex-col items-start justify-center relative overflow-hidden gap-2">
      <div className="bg-[var(--primary)] w-full aspect-square rounded-full top-3/4 absolute -z-10 blur-3xl" />
      <AiFillThunderbolt className="text-xl md:text-2xl" />
      <h1 className="text-xl md:text-2xl font-bold text-white">
        {benefit.title}
      </h1>
      <p className=" text-white/50">
        {benefit.description}
      </p>
    </div>
  );
};
