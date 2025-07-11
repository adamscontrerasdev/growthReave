import React from "react";
import { ServiceEntity } from "../types";

interface CardOurServicesProps {
  services: ServiceEntity;
}

export const CardOurServices: React.FC<CardOurServicesProps> = ({
  services,
}) => {
  return (
    <div
      className={`flex md:gap-10 max-w-7xl w-full justify-between items-center md:h-auto ${
        services.order === 1 ? "md:flex-row" : "md:flex-row-reverse"
      } flex-col `}
    >
      {/* Imagen */}
      <div className="md:w-1/2 w-full h-auto max-h-[500px] rounded-lg overflow-hidden bg-neutral-900 flex items-center justify-center">
        <img
          src={services.image}
          alt={services.title}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Texto */}
      <div className="md:w-1/2 w-full h-full flex flex-col items-start justify-center gap-3 p-6">
        <h2 className="px-3 py-1 border border-white/30 rounded-lg bg-neutral-950 text-sm">
          {services.name}
        </h2>
        <h2 className="text-2xl md:text-4xl font-bold text-white">
          {services.title}
        </h2>
        <p className="text-white/80">{services.description}</p>

        <div className="flex gap-2 justify-start items-start flex-wrap">
          {services.points.map((point, i) => (
            <h2
              className="px-3 py-1 border border-white/30 rounded-lg bg-neutral-950 text-sm whitespace-nowrap"
              key={i}
            >
              {point}
            </h2>
          ))}
        </div>
      </div>
    </div>
  );
};
