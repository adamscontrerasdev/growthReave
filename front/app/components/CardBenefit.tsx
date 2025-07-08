import React from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import { BenefitEntity } from "../types";
import { FaHandshakeSimple } from "react-icons/fa6";
import { IconType } from "react-icons";
import { IoTimeOutline } from "react-icons/io5";
import { GiReceiveMoney } from "react-icons/gi";
import { IoAnalytics } from "react-icons/io5";
import { FaAngleDoubleUp } from "react-icons/fa";
interface CardBenefitProps {
  benefit: BenefitEntity;
}

export const CardBenefit: React.FC<CardBenefitProps> = ({ benefit }) => {
  const iconsMap: Record<string, IconType> = {
    AiFillThunderbolt: AiFillThunderbolt,
    FaHandshakeSimple: FaHandshakeSimple,
    IoTimeOutline: IoTimeOutline,
    GiReceiveMoney: GiReceiveMoney,
    IoAnalytics: IoAnalytics,
    FaAngleDoubleUp: FaAngleDoubleUp,
  };
  const Icon = iconsMap[benefit.icon];
  return (
    <div className="w-full h-52 border border-white/20 rounded-lg p-5 flex flex-col items-start justify-center relative overflow-hidden gap-2">
      <div className="bg-[var(--primary)] w-full aspect-square rounded-full top-3/3 absolute -z-10 blur-3xl" />
      <Icon className="text-xl md:text-2xl" />
      <h1 className="text-xl md:text-2xl font-bold text-white">
        {benefit.title}
      </h1>
      <p className=" text-white/50">{benefit.description}</p>
    </div>
  );
};
