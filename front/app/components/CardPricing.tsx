import { IoIosRocket } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import React from "react";
import { PricingEntity } from "../types";
import { IconType } from "react-icons";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaCrown } from "react-icons/fa6";

interface CardPricingProps {
  pricing: PricingEntity;
}

const iconsMap: Record<string, IconType> = {
  IoIosRocket: IoIosRocket,
  AiFillThunderbolt: AiFillThunderbolt,
  FaCrown: FaCrown,
};

export const CardPricing: React.FC<CardPricingProps> = ({ pricing }) => {
  const Icon = iconsMap[pricing.icon];
  return (
    <div className="w-full p-5 flex flex-col items-start justify-center gap-6 relative overflow-hidden rounded-xl border border-white/20">
      <div
        className={`bg-[var(--primary)] w-full aspect-square rounded-full ${
          pricing.title === "Professional" ? "bottom-3/3" : "top-3/3"
        } absolute -z-10 blur-3xl`}
      />
      <div className="flex gap-2 justify-center items-center text-2xl font-bold text-white/60">
        {Icon && <Icon size={32} />}
        <h2>{pricing.title}</h2>
      </div>
      <div className="">
        <span className="font-bold text-4xl">
          {pricing.price === "Custom" ? "" : pricing.currency}
          {pricing.price}
        </span>
        {pricing.price !== "Custom" ? "/month" : ""}
      </div>
      <p className="text-white/50">
        Perfect for small businesses starting with AI automation.
      </p>
      <button
        className={`${
          pricing.title === "Professional"
            ? "bg-[var(--primary)]"
            : "bg-neutral-950 border border-white/30"
        } text-white rounded-lg px-4 py-2 font-bold w-full cursor-pointer hover:scale-105 transition-all text-wrap`}
      >
        {pricing.title === "Enterprise" ? "Contact Us" : "Choose this plan"}
      </button>
      <div className="flex flex-col gap-1 ">
        <h2>What is Included:</h2>
        {pricing.features.map((feature, i) => (
          <p className="flex gap-3 items-center justify-start " key={i}>
            <FaCheck /> {feature}
          </p>
        ))}
      </div>
      {pricing.title === "Professional" && (
        <p className="absolute top-5 right-5 text-xl text-[var(--primary)]">
          Popular
        </p>
      )}
    </div>
  );
};
